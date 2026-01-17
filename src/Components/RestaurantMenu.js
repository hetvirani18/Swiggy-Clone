import { useEffect, useState } from "react";
import { useParams } from "react-router"
import MenuCard from "./MenuCard";

export default function RestaurantMenu(){
    let {id} = useParams();
    console.log(id);

    const[RestMenu, setRestMenu] = useState([]);

    useEffect(()=>{
    
        async function fetchData() {
           
           const proxyServer = "https://cors-anywhere.herokuapp.com/"
           const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();
           const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filterData = tempData.filter((items)=> 'title' in items?.card?.card);
           setRestMenu(filterData);
        }
   
        fetchData();
       },[])

       console.log(RestMenu);
    return(<>
        <div className="w-[80%] mx-auto">
            {
                RestMenu?.map((menuItems)=> <MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} />)
            }
        </div>
    </>)    
}