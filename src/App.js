import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import FoodOptions from "./Components/FoodOptions";
import GroceryOptions from "./Components/GroceryOptions";
import DineOption from "./Components/DineOption";
import Restaurants from "./Components/Restaurants";

function App() {

    return(<>
        <Header />
        <FoodOptions />
        <GroceryOptions />
        <DineOption />
        <Restaurants />
    </>)
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);