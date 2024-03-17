import { createSlice } from '@reduxjs/toolkit';

export const demoSlice = createSlice({
    name: 'demo',
    initialState: {
        shouldShow: false
    },
    reducers: {
        showOverlay(state, action) {
            state.shouldShow = action.payload;
        },
        hideOverlay(state) {
            state.shouldShow = false;
        }
    }
});

//exported for dispatching
export const demoActions = demoSlice.actions;