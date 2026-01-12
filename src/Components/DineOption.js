import { dineoutRestaurants } from "../Utils/DineData"
import DineCard from "./DineCard"

export default function DineOption(){

    return(<>
        <div className="max-w-[80%] container mx-auto mt-25">
            <h2 className="text-2xl font-bold">Discover best restaurants on Dineout</h2>
            <div className="flex gap-8 overflow-x-auto mt-8">
                {
                    dineoutRestaurants.map((Dinedata)=> <DineCard key={Dinedata.info.id} Dinedata={Dinedata} />)
                }
            </div>
        </div>
    </>)
}