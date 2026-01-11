import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import FoodOptions from "./Components/FoodOptions";
import GroceryOptions from "./Components/GroceryOptions";

function App() {

    return(<>
        <Header />
        <FoodOptions />
        <GroceryOptions />
    </>)
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);