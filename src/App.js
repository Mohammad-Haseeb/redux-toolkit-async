import {useEffect} from 'react';
import './App.css';

function App() {
  useEffect(() => {
   async function ApiCaller(){
      let api=await fetch("api/users");
      let data=await api.json();
               console.log("Data : ",data);
    }
    ApiCaller();
  }, [])
  return (
     <>
     <h1>Hello</h1>
     </>
    );
}

export default App;
