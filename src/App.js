import React from "react";
import ReactDOM from "react-dom/client";
import Restaurants from "./Components/Restaurants";
import  {BrowserRouter, Routes, Route} from "react-router";
import Home from "./Components/Homepage";
import RestaurantMenu from "./Components/RestaurantMenu";

function App() {

    return(<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/city/ahmedabad/:id" element={<RestaurantMenu />} />
            </Routes>
        </BrowserRouter>
    </>)
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);