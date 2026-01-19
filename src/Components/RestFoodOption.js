import { imageGridCards } from "../Utils/FoodData";
import FoodCard from "./FoodCard";

export default function RestFoodOption(){

    return(<>
        
        <div className="max-w-[80%] container mx-auto mt-5 border-b border-gray-300 pb-20">
            <h2 className="text-2xl font-bold">What's on your mind?</h2>
            <div className="flex overflow-x-auto mt-8 pb-10">
                {
                    imageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData} />)
                }
            </div>
        </div>
    </>)
}