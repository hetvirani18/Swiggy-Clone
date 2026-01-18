import { addItems, IncrementItem, DecrementItem } from "../Store/CartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ItemCard({item}){

    const cartItems = useSelector(state=>state.cartSlice.items);
    const ele = cartItems.find(ele=>ele.id===item.id);
    const count = ele?.quantity || 0;
    const dispatch = useDispatch();

    function handleAddItem(){
        dispatch(addItems(item));
    }

    function handleIncrement() {
        dispatch(IncrementItem(item));
    }

    function handleDecrement() {
        dispatch(DecrementItem(item));
    }

    const isVeg = item?.itemAttribute?.vegClassifier === "VEG";
    const isBestseller = item?.ribbon?.text === "Bestseller";

    return (<>
        <div className="flex justify-between items-start w-full p-4 border-b border-gray-200 py-8 last:border-b-0">
            <div className="w-[60%] flex flex-col gap-1">

                <div className="flex items-center gap-2">
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
                    {isBestseller && (
                        <div className="flex items-center gap-1 mb-1">
                            {/* Orange Star SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EE5F24" className="w-4 h-4">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                            </svg>
                            <span className="text-[#EE5F24] text-xs font-semibold">Bestseller</span>
                        </div>
                    )}
                </div>
                

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
                {
                    count==0 ? (<button className="w-24 absolute -bottom-4 left-8 shadow-lg bg-white text-green-600 font-extrabold py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm" onClick={handleAddItem}> ADD </button>)
                    : (<div className="w-24 absolute -bottom-4 left-8 shadow-lg bg-white flex items-center justify-between text-green-600 font-extrabold py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
                        <button onClick={handleDecrement} className="text-2xl px-2 leading-none">−</button>
                        <span>{count}</span>
                        <button onClick={handleIncrement} className="text-2xl px-2 leading-none">+</button>
                    </div>)
                }
                
            </div>
        </div>
    </>)
}