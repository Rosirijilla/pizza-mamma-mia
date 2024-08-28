import React from "react";
import Header from "./Header";
import Galeria from "./Galeria";

function Home({pizzas, total, setTotal}) {
  return (
    <div>
      <Header/>
      <Galeria pizzas={pizzas} total={total} setTotal={setTotal} />
    </div>
  );
}

export default Home;
