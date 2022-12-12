import { Header, Main, Footer } from "./components/index";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
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
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div className="wrapper">
          <Header
            order={this.state.orders}
            onDelete={this.deleteOrder}
          ></Header>
          <Main
            sortAB={this.ascOrder}
            sortBA={this.descOrder}
            chooseCategory={this.chooseCategory}
            items={this.state.items}
            onAdd={this.addToOrder}
          ></Main>
          <Footer></Footer>
        </div>
      );
    }
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
  ascOrder() {
    this.setState({
      items: this.state.items.slice(0, 12).sort(function (a, b) {
        return a.title.localeCompare(b.title);
      }),
    });
  }
  descOrder() {
    this.setState({
      items: this.state.items.slice(0, 12).sort(function (a, b) {
        return b.title.localeCompare(a.title);
      }),
    });
  }
}
export default App;
