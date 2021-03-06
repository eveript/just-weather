import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { geoAPI } from '../../apis'
import { GeoPoint } from '../../apis/types'

export const getAddress = createAsyncThunk(
    'geo/getAddress',
    async (arg: GeoPoint, thunkAPI) => {
        try {
            const addressData = await geoAPI.getAddress(arg)
            const { structure } = addressData.response.result[0]
            return structure
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    },
)

const locationSlice = createSlice({
    name: 'location',
    initialState: {
        coords: null,
        address: null,
        loading: false,
        error: null,
    },
    reducers: {
        setLocation(state, action) {
            const { coords } = action.payload
            state.coords = coords
        },
        setAddress(state, action) {
            state.address = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAddress.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getAddress.fulfilled, (state, action) => {
                state.address = action.payload
                state.loading = false
            })
            .addCase(
                getAddress.rejected,
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

export const { setLocation, setAddress } = locationSlice.actions

export default locationSlice.reducer
