import { Header, Footer, Main } from "./components/index";
import Login from "./components/pages/Login/Login";
import PageNotFound from "./components/pages/PageNotFound/PageNotFound";
import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const [isLoggedIn, setISLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setIsLoaded(true);
      });
  }, []);

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });

    if (!isInArray) setOrders([...orders, item]);
  };

  const ascOrder = () => {
    setItems(
      items.slice(0, 12).sort(function (a, b) {
        return a.title.localeCompare(b.title);
      })
    );
  };
  const descOrder = () => {
    setItems(
      items.slice(0, 12).sort(function (a, b) {
        return b.title.localeCompare(a.title);
      })
    );
  };
  const deleteOrder = (id) => {
    setOrders((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <div className="wrapper">
      <Header
        order={orders}
        onDelete={deleteOrder}
        isLoggedIn={isLoggedIn}
      ></Header>
      <Routes>
        <Route
          path="/login"
          element={<Login setISLoggedIn={setISLoggedIn} />}
        />
        <Route
          path="/"
          element={
            <Main
              sortAB={ascOrder}
              sortBA={descOrder}
              items={items}
              onAdd={addToOrder}
              Skeleton={isLoaded}
            ></Main>
          }
        />
        <Route
          path="*"
          element={<PageNotFound />}
        />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
