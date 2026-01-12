import { useEffect, useState } from "react";
import RestCard from "./RestCard";

// "https://media-assets.swiggy.com/swiggy/image/upload/"

export default function Restaurants(){

    const [RestData, setRestData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const procyServer = "https://cors-anywhere.herokuapp.com/"
            const swiggyApi = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0276&lng=72.5871&is-seo-homepage-enabled=true"
            const response = await fetch(procyServer + swiggyApi);
            const data = await response.json();
            setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }
        fetchData();
    }, [])  
    console.log(RestData);

    return(<>
        <div className="flex flex-wrap mmax-w-[80%] container mx-auto gap-5 mt-25">
            {
                RestData.map((restaurant)=> <RestCard key={restaurant?.info.id} restaurant={restaurant}/>)
            }
        </div>
    </>)
}