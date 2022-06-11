import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ElementDisplay from "./components/ElementDisplay/ElementDisplay";
import Calculator from "./components/Calculator/Calculator";
import { useState } from "react";
function App() {
  const [element, setElement] = useState("default");
  const elementChange = (value) => {
    setElement(value);
  };
  return (
    <div className="App">
      <Navbar elementChange={elementChange} />
      <div className="appContainer">
        <Calculator selectedElement={element} />
        <ElementDisplay selectedElement={element} />
      </div>
    </div>
  );
}

export default App;
