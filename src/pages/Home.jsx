import React from "react";
import Header from "./Header";
import Galeria from "./Galeria";

function Home({ pizzas, total, setTotal, loading, error }) {
  return (
    <div className="vh-100">
      <Header />
      <Galeria
        pizzas={pizzas}
        total={total}
        setTotal={setTotal}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default Home;
