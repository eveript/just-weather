import { createSlice } from '@reduxjs/toolkit'

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        current: null,
        hourly: null,
        daily: null,
        isLoadingComplete: false,
    },
    reducers: {
        setWeather(state, action) {
            const { current, hourly, daily } = action.payload
            state.current = current
            state.hourly = hourly
            state.daily = daily
        },
        setLoadingComplete(state, action) {
            state.isLoadingComplete = action.payload
        },
    }
})

export const {
    setWeather, setLoadingComplete
} = weatherSlice.actions

export default weatherSlice.reducer
