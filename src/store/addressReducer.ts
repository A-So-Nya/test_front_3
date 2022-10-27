import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const client = axios.create();

export type AddressState = {
    data?: string[];
    isLoading: boolean;
    error: any;
};

const initialState: AddressState = {
    isLoading: false,
    error: null,
};

export const fetchAddresses = createAsyncThunk(
    'data/getAddresses',
    async (
        query: string,
    ): Promise<{ suggestions: Array<{ value: string }> }> => {
        const response: { data: { suggestions: Array<{ value: string }> } } =
            await client.post(
                'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
                { query },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        Authorization:
                            'Token 9a21c5552e927281ead6e847c5d372da113ec942',
                    },
                },
            );
        return response.data;
    },
);

export const addressesSlice = createSlice({
    name: 'adressess',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddresses.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchAddresses.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload.suggestions.map((sug) => sug.value);
            })
            .addCase(fetchAddresses.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            });
    },
});

// Action creators are generated for each case reducer function
export const {} = addressesSlice.actions;

export default addressesSlice.reducer;
