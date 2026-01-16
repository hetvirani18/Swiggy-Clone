import { Link } from "react-router"

//first fiv: swiggy logo and buttons

export default function Header(){

    return(
        <header className="bg-[#FF5200]">

            <div className="flex justify-between container mx-auto py-8">
                <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" />
                <div className="text-white text-base font-bold flex gap-8 items-center">
                    <a href="https://www.swiggy.com/corporate/" target="_blanck">Swiggy Corporet</a>
                    <a href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                    <a className="border border-white py-3 px-4 rounded-xl" href="">Get the App</a>
                    <a className="bg-black border border-black py-3 px-4 rounded-xl" href="">Sign in</a>
                </div>
            </div>

            <div className="pt-16 pb-8 relative">
                
                <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" />
                
                <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" />

                <div className="text-white text-center font-bold max-w-[60%] text-5xl mx-auto pl-3">
                    Order food & groceries. Discover best restaurants. Swiggy it!
                </div>

                <div className="max-w-[60%] container mx-auto flex gap-5 mt-10">
                    <input className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl" placeholder="Delhi, India"/>
                    <input className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl" placeholder="Search for restaurant, iteams or more"/>
                </div>
            </div>

            <div className="max-w-[80%] container mx-auto flex">
                <Link to="/restaurants">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" />
                </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" />
                </a>
                <a href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" />
                </a>
            </div>
        </header>
    )
}