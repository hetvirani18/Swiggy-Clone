export default function Shimmer(){
    return(<>
        <div className="flex flex-wrap max-w-[80%] container mx-auto gap-5 mt-20">
            {
                Array.from({length:20}).map((_, index)=>(
                    <div key={index} className="max-w-70 animate-pulse">
                        <div className="w-70 h-45 rounded-xl bg-gray-300"></div>
                        <div className="w-[95%] mx-auto">
                            <div className="w-full h-6 bg-gray-300 mt-2"></div>
                            <div className="w-full h-6 bg-gray-300 mt-1"></div>
                            <div className="w-full h-6 bg-gray-300 mt-1"></div>
                            <div className="w-full h-6 bg-gray-300 mt-1"></div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>)
}