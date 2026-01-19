import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantPage from "./Components/RestaurantPage";
import  {BrowserRouter, Routes, Route} from "react-router";
import Home from "./Components/Homepage";
import RestaurantMenu from "./Components/RestaurantMenu";
import SearchFood from "./Components/SearchFood";
import SecondaryHome from "./Components/SecondaryHome";
import { store } from "./Store/Store";
import { Provider } from "react-redux";
import Checkout from "./Components/Checkout";

function App() {

    return(<>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route element={<SecondaryHome />}>
                        <Route path="/restaurants" element={<RestaurantPage />} />
                        <Route path="/city/ahmedabad/:id" element={<RestaurantMenu />} />
                        <Route path="/city/ahmedabad/:id/search" element={<SearchFood />} />
                    </Route>
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </>)
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);