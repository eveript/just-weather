import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {weatherAPI} from "../apis/openWeatherMapAPI";

export const refetchOneCall = createAsyncThunk('weather/refetchOneCall', async () => {
    const res = await weatherAPI.refetchOneCall()

    return res
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
                const [{weatherData}, error] = action.payload
                const { current, hourly, daily } = weatherData
                state.current = current
                state.hourly = hourly
                state.daily = daily
                state.loading = false
                state.error = error
            })
    }
})

export const {
    setWeather
} = weatherSlice.actions

export default weatherSlice.reducer
