import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
//import Register from "./components/Register";
//import Login from "./components/Login";



function App() {
  const [count, setCount] = useState(0);

  return <>
  <div>
    <Navbar count={count}/>
    <Home count={count} setCount={setCount}/>
    {/*
    <Register/>
    <Login/>
    */}
    <Footer/>
  </div>
  </>;
}

export default App;

