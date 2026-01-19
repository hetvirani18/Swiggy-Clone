import { useEffect } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { fetchResturants } from "../Store/ResturantSlice";

// "https://media-assets.swiggy.com/swiggy/image/upload/"

export default function OnlineRestaurant(){
    
    const dispatch = useDispatch();
    const {resturants, loading, error} = useSelector((state)=>state.resturantSlice);

    useEffect(()=>{
        if(resturants.length==0) dispatch(fetchResturants());
    },[dispatch, resturants.length]) 


    //Shimeer Iffect to show loading state
    if(resturants.length===0){
        return(<>
            <Shimmer />
        </>)
    }

    return(<>
        <div className="max-w-[80%] container mx-auto my-20 text-2xl border-b border-gray-300 pb-20">
            <h2 className="font font-bold mb-5">Restaurants with online food delivery in Ahmedabad</h2>
            <div className="flex w-full container mx-auto gap-5 flex-wrap">
                {
                    resturants.map((restaurant)=> <RestCard key={restaurant?.info.id} restaurant={restaurant}/>)
                }
            </div>
        </div>
    </>)
}