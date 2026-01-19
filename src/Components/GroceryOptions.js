import {GrocerGridCard} from "../Utils/Grocery"
import GroceryCard from "./GroceryCard"

export default function GroceryOptions(){

    return(<>
        <div className="max-w-[80%] container mx-auto mt-25">
            <h2 className="text-2xl font-bold">Shop groceries on Instamart</h2>
            <div className="flex gap-8 overflow-x-auto mt-8 pb-10">
                {
                    GrocerGridCard.map((groceryData)=> <GroceryCard key={groceryData.id} groceryData={groceryData}/>)
                }
            </div>
        </div>
    </>)
}