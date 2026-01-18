import { useEffect, useState } from "react";
import { useParams, Link } from "react-router"
import MenuCard from "./MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../Store/MenuSlice";
import Shimmer from "./Shimmer";

export default function RestaurantMenu(){
    let {id} = useParams();
    console.log(id);

    const [selected, setSelected] = useState(null);
    const dispatch = useDispatch();
    
    const menu = useSelector((state) => state.menuSlice.menus[id]);
    const loading = useSelector((state) => state.menuSlice.loading);

    useEffect(() => {
        if (!menu) {
            dispatch(fetchMenu(id));
        }
    }, [id, menu, dispatch]);

    if (!menu && loading) {
        return <Shimmer />;
    }

    return(<>
        {/* header */}
        <div className="max-w-200 mx-auto mt-15">
            <div className="flex items-center justify-center gap-2 mb-5">
                <div className="h-px w-12 bg-gray-300"></div>
                <span className="text-gray-500 text-xs font-medium tracking-[4px]">MENU</span>
                <div className="h-px w-12 bg-gray-300"></div>
            </div>
            
            <div className="relative w-full mb-6 cursor-pointer">
                <Link to={"search"}>
                    <p className="w-full bg-gray-200 text-gray-700 text-center font-medium rounded-xl py-3 px-4">Search for dishes</p>
                    {/* Search Icon */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    </div>
                </Link>
            </div>

            <div className="flex gap-3">
                <button className={`border border-gray-200 rounded-full w-15 flex items-center justify-center p-2 cursor-pointer ${selected==='veg'?"bg-green-50 border-green-600 shadow-md": "bg-white shadow-sm hover:bg-gray-50 "}`} onClick={()=>setSelected(selected=='veg'?null: 'veg')}>
                    <div className="w-4 h-4 border border-green-600 flex items-center justify-center rounded-xs">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                </button>

                <button className={`border border-gray-200 rounded-full w-15 flex items-center justify-center p-2 cursor-pointer ${selected==='nonVeg'?"bg-red-50 border-red-600 shadow-md": "bg-white shadow-sm hover:bg-gray-50 "}`} onClick={()=>setSelected(selected=='nonVeg'?null: 'nonVeg')}>
                    <div className="w-4 h-4 border border-red-600 flex items-center justify-center rounded-sm mb-1">
                        <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-8 border-b-red-600"></div>
                    </div>
                </button>

                <button className={`border border-gray-200 rounded-full py-2 px-4 text-sm font-semibold text-gray-700 ${selected=='best'? "bg-orange-50 border-orange-600 shadow-md": "bg-white shadow-sm hover:bg-gray-50"}`} onClick={()=>setSelected(selected=='best'?null: 'best')}>
                    Bestseller
                </button>

            </div>
            
            <div className="h-px bg-gray-200 my-2 max-w-200 mx-auto mt-5"></div>

        </div>

        <div className="w-[80%] mx-auto">
            {
                menu?.map((menuItems)=> <MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodSelected={selected} />)
            }
        </div>
    </>)    
}