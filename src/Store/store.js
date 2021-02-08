import {configureStore} from '@reduxjs/toolkit';
import valueReducer from "./reducer";

export const store=configureStore({
    reducer:{
        value: valueReducer
    }
})