import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { weatherAPI } from '../../apis'
import { getAddress, setLocation } from './locationSlice'
import * as Location from 'expo-location'

export const refetchOneCall = createAsyncThunk(
    'weather/refetchOneCall',
    async (arg, thunkAPI) => {
        try {
            const { status } = await Location.requestPermissionsAsync()
            if (status !== 'granted') {
                console.error('Permission to access location was denied')
            }

            const location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Low,
            })

            const point = {
                lon: location?.coords?.longitude,
                lat: location?.coords?.latitude,
            }
            const weatherData = await weatherAPI.oneCall(point)

            thunkAPI.dispatch(setLocation(location))
            thunkAPI.dispatch(getAddress(point))

            return weatherData
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    },
)

export type WeatherState = {
    current: any
    hourly: any
    daily: any
    loading: boolean
    error: any
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        current: null,
        hourly: null,
        daily: null,
        loading: false,
        error: null,
    } as WeatherState,
    reducers: {
        setWeather(state, action) {
            const { current, hourly, daily } = action.payload
            state.current = current
            state.hourly = hourly
            state.daily = daily
        },
    },
    extraReducers: (builder) => {
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
            .addCase(
                refetchOneCall.rejected,
                (state, action: { payload: any; error: any }) => {
                    if (action.payload) {
                        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, the payload will be available here.
                        state.error = action.payload
                    } else {
                        state.error = action.error
                    }
                    state.loading = false
                },
            )
    },
})

export const { setWeather } = weatherSlice.actions

export default weatherSlice.reducer
