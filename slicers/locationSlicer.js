import { createSlice } from '@reduxjs/toolkit'

const locationSlice = createSlice({
    name: 'location',
    initialState: {
        coords: {
            longitude: null,
            latitude: null,
        },
    },
    reducers: {
        setLocation(state, action) {
            const { coords } = action.payload
            state.coords = coords
        },
    }
})

export const {
    setLocation
} = locationSlice.actions

export default locationSlice.reducer
