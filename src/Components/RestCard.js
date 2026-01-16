import { Link } from "react-router";

export default function RestCard({restaurant}){
    
    return(<>
        <Link to={"/city/ahmedabad/"+restaurant?.info.id}>
            <div className="max-w-70 transform transition duration-200 hover:scale-95">
                <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restaurant.info.cloudinaryImageId} />
                <div className="w-[95%] mx-auto mt-2">
                    <div className="font-bold text-xl">{restaurant?.info.name}</div>
                    <div className="text-lg font-medium flex gap-1 items-center">
                        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#1BA672]">
                            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l2.9 6.1 6.7.6-5 4.4 1.5 6.6L12 16.9 5.9 19.7l1.5-6.6-5-4.4 6.7-.6L12 2z" />
                            </svg>
                        </div>
                        <span>{restaurant?.info.avgRating} • </span>
                        <span>{restaurant?.info.sla.slaString}</span>
                    </div>
                    <div className="text-gray-500 font-medium text-base mt-1 overflow-hidden truncate ml-1">
                        {
                            restaurant?.info.cuisines.map((cuisine, index)=><span key={cuisine} >{index>0 && ", "} {cuisine}</span>)
                        }
                    </div>
                    <div className="text-gray-500 font-medium text-base ml-1">
                        {restaurant?.info.areaName}
                    </div>
                </div>
            </div>
        </Link>
    </>)
}