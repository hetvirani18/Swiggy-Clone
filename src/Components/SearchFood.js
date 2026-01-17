import { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate  } from "react-router"
import ItemCard from "./ItemCard";

export default function SearchFood(){
    const {id} = useParams();
    const [food, setFood] = useState("");
    const[RestMenu, setRestMenu] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(food);
        
        
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
    
    const allItems = useMemo(() => {
        const items = [];
        const myset = new Set();
        RestMenu?.forEach((object) => {
            if ("itemCards" in object?.card?.card ) {
                object?.card?.card?.itemCards.forEach((item) => {
                    if(myset.has(item?.card?.info?.id) === false)
                    {
                        items.push(item?.card?.info)
                        myset.add(item?.card?.info?.id);
                    }
                });
            } else if ("categories" in object?.card?.card) {
                object?.card?.card?.categories.forEach((category) => {
                    category?.itemCards?.forEach((item) =>{
                        if(myset.has(item?.card?.info?.id) === false)
                        {
                            items.push(item?.card?.info)
                            myset.add(item?.card?.info?.id);
                        }
                    });
                });
            }
        });
        return items;
    }, [RestMenu]);

    // 3. Filter Data
    const filteredItems = allItems.filter((item) => 
        item?.name?.toLowerCase().includes(food.toLowerCase())
    );

    return(<>
        <div className="max-w-200 mx-auto mt-15 flex items-center border-b border-gray-300 pb-4 px-4">
            <button className="mr-4 text-gray-700 hover:text-orange-500 transition-colors" onClick={() => navigate(-1)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
            </button>

            <input type="text" placeholder="Search here" className="flex-1 text-gray-700 font-medium placeholder-gray-400 outline-none" onChange={(e)=>setFood(e.target.value)}/>

            <div className="text-gray-500 ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
        </div>  
        <div className="w-[80%] mx-auto mt-10">
            {
                food.length>1 &&
                filteredItems.map((item)=> <ItemCard key={item?.id} item={item} />)
            }
        </div>
    </>)
}