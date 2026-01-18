import { useSelector } from "react-redux";
import { Link } from "react-router";
import logo from "url:../Utils/images/logo.svg"


export default function Checkout(){
    const items = useSelector(state=>state.cartSlice.items);

    
    let subtotal=0;
    for(let i=0;i<items.length;i++){
        subtotal += ((items[i].defaultPrice || items[i].price)/100)*items[i].quantity;
    }

    const deliveryFee = items.length > 0 ? 40 : 0;
    const total = subtotal + deliveryFee;

    return(<>
        <div className="bg-gray-200 h-screen">

            <div className="h-20 flex items-center shadow-md px-40 justify-between sticky top-0 z-10 bg-white">
                <Link to="/">
                    <img className="hover:scale-110 transition-transform duration-200" src={logo} alt="logo"/>
                </Link>
                <div className="flex gap-10">
                    <Link to="https://www.swiggy.com/support">
                        <button className="font-medium hover:text-[#fe5005] cursor-pointer">Get Help</button>
                    </Link>
                    <Link to="https://www.swiggy.com/support">
                        <button className="font-medium hover:text-[#fe5005]">Sign In</button>
                    </Link>
                </div>
            </div>

            <div className="max-w-5xl mx-auto mt-10 flex gap-8">
                    
                    <div className="col-span-2 bg-white shadow-sm p-6 rounded-lg flex-5">
                        <h2 className="text-xl font-bold mb-4">Cart Items</h2>

                        {items.length === 0 && (
                            <p className="text-gray-500">Your cart is empty.</p>
                        )}

                        {
                            items.map(item => (
                                <div key={item.id} className="flex justify-between items-center border-b py-4 last:border-b-0">
                                    <div className="flex items-center gap-4">
                                        <img className="h-20 rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + item?.imageId} />
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-500">
                                            ₹{(item.defaultPrice || item.price) / 100}
                                        </p>
                                    </div>

                                    <div className="text-sm font-semibold">
                                        × {item.quantity}
                                    </div>

                                    <div className="font-semibold">
                                        ₹
                                        {(
                                            ((item.defaultPrice || item.price) / 100) *
                                            item.quantity
                                        ).toFixed(2)}
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="bg-white shadow-sm p-6 rounded-lg h-fit flex-2">
                        <h2 className="text-xl font-bold mb-4">Bill Details</h2>

                        <div className="flex justify-between text-sm mb-2">
                            <span>Item Total</span>
                            <span>₹{subtotal.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between text-sm mb-2">
                            <span>Delivery Fee</span>
                            <span>₹{deliveryFee}</span>
                        </div>

                        <hr className="my-4" />

                        <div className="flex justify-between font-bold text-lg">
                            <span>To Pay</span>
                            <span>₹{total.toFixed(2)}</span>
                        </div>

                        <button
                            disabled={items.length === 0}
                            className="w-full mt-6 bg-[#60b246] text-white py-3 rounded-lg font-bold disabled:bg-gray-300"
                        >
                            PLACE ORDER
                        </button>
                    </div>
                </div>
        </div>
    </>)
}