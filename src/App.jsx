import React,{useEffect} from "react";
import Homepage from "./pages/Homepage";
import AOS from "aos"
function App() {


   useEffect(() => {
      
          AOS.init();
      
    }, [])
  return (
    <>
      <Homepage />
    </>
  );
}

export default App;
