import { useState } from "react";
import ItemCard from "./ItemCard"

export default function MenuCard({menuItems, isNested = false, lastIndex=0, foodSelected}) {

    const [isOpen, setIsOpen] = useState(true);
    let filteredItems = menuItems?.itemCards || [];

    if (foodSelected === 'veg') {
        // Logic: Keep items where 'isVeg' exists or vegClassifier is 'VEG'
        filteredItems = filteredItems.filter((item) => "isVeg" in item?.card?.info);
    } 
    else if (foodSelected === 'nonVeg') {
        filteredItems = filteredItems.filter((item) => !("isVeg" in item?.card?.info));
    }
    else if (foodSelected === 'best') {
        filteredItems = filteredItems.filter((item) => item?.card?.info?.ribbon?.text === "Bestseller");
    }

    if (!menuItems.categories && filteredItems.length === 0) {
        return null; 
    }
    
    const dividerStyle = isNested ? "h-[1px] bg-gray-200 my-2 max-w-200 mx-auto " : "h-4 bg-gray-200 mx-4 max-w-200 mx-auto";

    if("categories" in menuItems){
        return (<>
            <div className="w-full max-w-200 mx-auto border-gray-100 pb-4">
                <p className="text-xl font-extrabold text-black py-4">{menuItems?.title}</p>
                <div>
                  {
                    menuItems?.categories?.map((category, index) => (<MenuCard key={category?.title} menuItems={category} isNested={true} lastIndex={index==menuItems.categories.length-1} foodSelected={foodSelected}/>))
                  }
                </div>
            </div>
            {!lastIndex && <div className={dividerStyle}></div>}
        </>)
    }
    
    if(isOpen === false){
        return (<>
            <div className="w-full max-w-200 mx-auto">
                <div className="flex justify-between items-center py-4 cursor-pointer"  onClick={()=>setIsOpen(true)}>
                    <p className={`text-xl text-black ${isNested ? "text-base font-bold" : "font-extrabold"}`}>
                        {menuItems?.title} ({filteredItems.length})
                    </p>
                    <button className="font-bold">⮟</button>
                </div>
                {/* CHANGE 3: Use the variable variable instead of hardcoded class */}
            </div>
            {!lastIndex && <div className={dividerStyle}></div>}
        </>)
    }

    return (<> 

        <div className="w-full max-w-200 mx-auto">
            <div className="flex justify-between items-center py-4 cursor-pointer"  onClick={()=>setIsOpen(false)}>
                <p className={`text-xl text-black ${isNested ? "text-base font-bold" : "font-extrabold"}`}>
                    {menuItems?.title} ({filteredItems?.length})
                </p>
                <button onClick={()=>setIsOpen(false)} className="font-bold">⮝</button>
            </div>

            <div>
                {filteredItems?.map((item) => (
                <ItemCard key={item.card.info.id} item={item.card.info} />
                ))}
            </div>
            
            {/* CHANGE 3: Use the variable variable instead of hardcoded class */}
            {!lastIndex && <div className={dividerStyle}></div>}
        </div>
    </>)
}