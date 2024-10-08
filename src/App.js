import logo from "./logo.svg";
import "./App.css";
import { A } from "./usememo";
import React, { useCallback } from "react";
import { useState } from "react";

function App() {
  // *******concept 1*******
  const [toggle, settoggle] = useState(false);
  const handleClick = () => {
    settoggle(!toggle);
  };
  // ***concept 2****
  // const [val, setval] = useState("hello");
  // *****concept3****
  const callme = useCallback(() => {
    console.log("I have been called");
  }, []);
  //usecallback will tell app component not to change the reference when called (i.e please dont create the function
  //and if the function is not created again, my callme props wont change and hence it will remain intact)

  return (
    <div className="App">
      <button onClick={handleClick} style={{ cursor: "pointer" }}>
        click from App
      </button>
      {/* <A toggle={toggle} /> */}
      {/* ****check concept2**** */}
      {/* <A val={val} /> */}
      {/* ***concept 3*** */}
      <A callme={callme} />
    </div>
  );
}

export default App;
