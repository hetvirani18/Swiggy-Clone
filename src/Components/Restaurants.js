import { useEffect } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { fetchResturants } from "../Store/ResturantSlice";

// "https://media-assets.swiggy.com/swiggy/image/upload/"

export default function Restaurants(){
    
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
        <div className="flex flex-wrap max-w-[80%] container mx-auto gap-5 mt-20">
            {
                resturants.map((restaurant)=> <RestCard key={restaurant?.info.id} restaurant={restaurant}/>)
            }
        </div>
    </>)
}