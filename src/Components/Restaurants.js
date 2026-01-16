import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

// "https://media-assets.swiggy.com/swiggy/image/upload/"

export default function Restaurants(){

    const [RestData, setRestData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch("/api/dapi/restaurants/list/v5?lat=23.0276&lng=72.5871&is-seo-homepage-enabled=true");
            try{
                if(!response.ok){
                    throw new Error("Network response was not ok");
                }
            }
            catch(error){
                console.log("CORS issue - Using proxy server");
                return;
            }
            const data = await response.json();
            setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }
        fetchData();
    }, [])  

    // console.log(RestData);


    //Shimeer Iffect to show loading state
    if(RestData.length===0){
        return(<>
            <Shimmer />
        </>)
    }

    return(<>
        <div className="flex flex-wrap max-w-[80%] container mx-auto gap-5 mt-20">
            {
                RestData.map((restaurant)=> <RestCard key={restaurant?.info.id} restaurant={restaurant}/>)
            }
        </div>
    </>)
}