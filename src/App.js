import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import MealItem from "./components/Meals/MealItem/MealItem";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
