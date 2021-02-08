import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
 
export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
      const response = await fetch("api/users");
      const data=response.json();
      return data
    }
  )

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
    },
    extraReducers:{
        [fetchUserById.fulfilled]:(state,action)=>{
            console.log("Payoad : ",action)
               state.value.push(...action.payload);
        }
    }
})
export const {display}=valueslice.actions;
 export default valueslice.reducer;