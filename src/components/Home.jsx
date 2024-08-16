import React from "react";
import Header from "./Header";
import Galeria from "./Galeria";

function Home({count, setCount}) {
  return (
    <div>
      <Header/>
      <Galeria count={count} setCount={setCount}/>
    </div>
  );
}

export default Home;
