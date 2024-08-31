import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { ShoeStore } from "./ShoeStore/ShoeStore";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ShoeStore />
    </>
  );
}

export default App;
