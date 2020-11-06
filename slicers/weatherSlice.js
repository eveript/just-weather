import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {weatherAPI} from "../apis/openWeatherMapAPI";
import {expoAPI} from "../apis/expoAPI";
import {setLocation} from "./locationSlice";


export const refetchOneCall = createAsyncThunk('weather/refetchOneCall', async (arg, thunkAPI) => {

    try {
        const locationData = await expoAPI.getLocation()

        const weatherData = await weatherAPI.oneCall({
            lon: locationData?.location?.coords?.longitude,
            lat: locationData?.location?.coords?.latitude,
        })

        thunkAPI.dispatch(setLocation(locationData.location))

        return weatherData
    } catch (e) {
        return thunkAPI.rejectWithValue(e)
    }
})

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        current: null,
        hourly: null,
        daily: null,
        loading: false,
    },
    reducers: {
        setWeather(state, action) {
            const { current, hourly, daily } = action.payload
            state.current = current
            state.hourly = hourly
            state.daily = daily
        },
    },
    extraReducers: builder => {
        builder
            .addCase(refetchOneCall.pending, (state, action) => {
                state.loading = true
            })
            .addCase(refetchOneCall.fulfilled, (state, action) => {
                const { current, hourly, daily } = action.payload
                state.current = current
                state.hourly = hourly
                state.daily = daily
                state.loading = false
            })
            .addCase(refetchOneCall.rejected, (state, action) => {
                if (action.payload) {
                    // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
                    state.error = action.payload
                } else {
                    state.error = action.error
                }
                state.loading = false
            })
    }
})

export const {
    setWeather
} = weatherSlice.actions

export default weatherSlice.reducer
