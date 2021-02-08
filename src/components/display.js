import React from 'react';
import {  useSelector,useDispatch} from 'react-redux';
import {display} from './../Store/reducer';
 
export default function Display(){
    const  dispatch = useDispatch();
    const  selector= useSelector((state)=>{
        return state.value.value
});
      return(
          <> 
          <h1>CHEking</h1>
          {
            selector.map((val,ind)=>{
                   return <h1 key={ind}>{val.title}</h1>
            })
          }
          <button onClick={()=>{dispatch(display({
                "title": "Book 4",
                "author": "Author 4"
            }))}}>Increment Array of Data</button>
          </>
      );
}