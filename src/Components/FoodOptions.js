import { imageGridCards } from "../Utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption(){

    return(<>
        
        <div className="max-w-[80%] container mx-auto mt-25">
            <h2 className="text-2xl font-bold">Order our best food options</h2>
            <div className="grid grid-rows-2 grid-flow-col gap-x-8 gap-y-6 overflow-x-auto mt-8">
                {
                    imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData} />)
                }
            </div>
        </div>
    </>)
}