import { useSelector } from "react-redux"
import { Link } from "react-router"
import logo from "url:../Utils/images/logo.svg"


export default function RestHeader() {

    const counter = useSelector(state=>state.cartSlice.count);

    return (<>
        <div className="h-20 flex items-center shadow-md px-40 justify-between sticky top-0 z-10 bg-white">
            <Link to="/">
                <img className="hover:scale-110 transition-transform duration-200" src={logo} alt="logo"/>
            </Link>
            <Link to="/checkout">
                <div className="flex items-center hover:cursor-pointer group">
                    <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="14" stroke="black" strokeWidth="1" fill="#FFF" className="group-hover:stroke-[#fe5005]"/>
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="15" fontWeight="bold" className="group-hover:fill-[#fe5005]">
                            {counter}
                        </text>
                    </svg>
                    <span className="font-medium text-xl group-hover:text-[#fe5005]">Cart</span>
                </div>
            </Link>
        </div>
    </>)
}