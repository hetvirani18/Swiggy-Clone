export default function ItemCard({item}){

    const isVeg = item?.itemAttribute?.vegClassifier === "VEG";

    return (<>
        <div className="flex justify-between items-start w-full p-4 border-b border-gray-200 py-8 last:border-b-0">
            <div className="w-[60%] flex flex-col gap-1">
        
                {isVeg ? (
                    <div className="w-4 h-4 border border-green-600 flex items-center justify-center rounded-sm mb-1">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    ) : (
                    <div className="w-4 h-4 border border-red-600 flex items-center justify-center rounded-sm mb-1">
                        {/* Simple CSS triangle using borders */}
                        <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-8 border-b-red-600"></div>
                    </div>
                )}

                <h3 className="font-bold text-lg text-gray-800">{item?.name}</h3>
                
                <p className="font-semibold text-gray-700">
                ₹{item?.defaultPrice ? item?.defaultPrice / 100 : item?.price / 100}
                </p>

                {item?.ratings?.aggregatedRating?.rating && (
                    <div className="flex items-center gap-1 text-xs font-bold text-green-700 mt-1">
                        <span>★ {item?.ratings?.aggregatedRating?.rating}</span>
                        <span className="text-gray-500 font-normal">
                            ({item?.ratings?.aggregatedRating?.ratingCountV2})
                        </span>
                    </div>
                )}

                <p className="text-gray-500 text-sm mt-3 line-clamp-2 leading-tight">
                    {item?.description}
                </p>
            </div>

            <div className="w-39 h-36 relative shrink-0 ml-4">
                <img className="w-full h-full object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + item?.imageId} />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 shadow-lg rounded-lg bg-white w-24">
                    <button className="w-full text-green-600 font-extrabold py-2 border border-gray-300 rounded-lg hover:bg-gray-50 uppercase text-sm"> ADD </button>
                </div>
            </div>
        </div>
    </>)
}