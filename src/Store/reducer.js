import {createSlice} from '@reduxjs/toolkit';

let valueslice=createSlice({
    name:"Book",
    initialState:{
           value:[
            {
                "title": "Book 1",
                "author": "Author 1"
            }
           ]
    },
    reducers:{
        
        display:(state,action)=>{state.value.push(action.payload)}
    }
})
export const {display}=valueslice.actions;
 export default valueslice.reducer;