import { Header, Main, Footer } from "./components/index";
import "./App.css";
import React, { useState, useEffect } from "react";
import CheckIdleTime from "./components/common/IdleTime/CheckIdleTime";

const App = () => {
  /* constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      orders: [],
    };

    this.addToOrder = this.addToOrder.bind(this);
    this.ascOrder = this.ascOrder.bind(this);
    this.descOrder = this.descOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  } */

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true), setItems(result);
        },
        (error) => {
          setIsLoaded(true), error;
        }
      );
  }, []);

  const deleteOrder = (id) => {
    setOrders((prev) => prev.filter((el) => el.id !== id));
  };

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

  /* const { error, isLoaded, items } = this.state; */
  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div className="wrapper">
        <Header order={orders} onDelete={deleteOrder}></Header>
        <Main
          sortAB={ascOrder}
          sortBA={descOrder}
          /* chooseCategory={this.chooseCategory} */
          items={items}
          onAdd={addToOrder}
        ></Main>
        <Footer></Footer>
      </div>
    );
  }
};

export default App;
