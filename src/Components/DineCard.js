import ratingImg from "url:../Utils/images/rating.png";
import persontageImg from "url:../Utils/images/persontage.png";

export default function DineOption({Dinedata}) {
    return(<>
        <div>
            <a href={Dinedata?.cta.link}>
                <div className="min-w-80 relative rounded-2xl border border-gray-100 shadow-md">
                    <img className="w-80 h-47 object-cover rounded-t-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+Dinedata?.info?.mediaFiles[0]?.url} />
                    <div className="absolute flex justify-between overflow-hidden w-full h-10 px-2 top-38 items-center text-white font-bold text-xl bg-linear-to-t from-black">
                        <p className="truncate w-[80%]">{Dinedata?.info?.name}</p>
                        <div className="flex items-center gap-1">
                            <img className="h-5" src={ratingImg} />
                            <p>{Dinedata?.info?.rating?.value}</p>
                        </div>
                    </div>

                    <div className="py-3 px-2">
                        <div className="text-[#535665] text-sm font-medium flex justify-between">
                            <div>
                                {
                                    Dinedata?.info.cuisines.map((cuisine, index)=><span key={cuisine} >{index>0 && " • "} {cuisine}</span>)
                                }
                            </div>
                            <div>
                                <p>{Dinedata?.info?.costForTwo}</p>    
                            </div>
                        </div>

                         <div className="text-sm text-[#535665] font-medium mt-1 flex justify-between overflow-hidden">
                            <p className="max-w-[90%] truncate">{Dinedata?.info.locationInfo.formattedAddress}</p>
                            <p>{Dinedata?.info?.locationInfo.distanceString}</p> 
                        </div>

                        <div className="flex gap-2 mt-3">
                            {Dinedata?.info?.vendorHighlights?.map((highlight, index) => (
                                <div key={index} className="flex items-center gap-1.5 px-2 py-1 bg-[#F3F3F5] rounded-lg border border-gray-100 w-fit">
                                <img className="h-3 w-3 opacity-60" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + highlight.logo.logo} />
                                <span className="text-[#535665] text-xs font-medium">
                                    {highlight.title}
                                </span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between bg-[#1BA672] text-white mt-3 px-3 py-2 rounded-lg">
                            <div className="flex items-center gap-2">
                                <img src={persontageImg} />
                                <span className="text-sm font-bold truncate">
                                    {Dinedata.info.offerInfoV3.vendorOffer.title} {Dinedata.info.offerInfoV3.vendorOffer.subtitle}
                                </span>
                            </div>
                            <span className="text-xs font-bold whitespace-nowrap">
                                {Dinedata.info.offerInfoV3.vendorOffer.subtext}
                            </span>
                        </div>

                        <div className="bg-[#E6F7F1] text-[#1BA672] mt-3 px-3 py-2 rounded-lg text-sm font-medium">
                            {Dinedata.info.customerOffer.info.description}
                        </div>

                        {Dinedata?.info?.offerInfoV3?.couponOffer?.title && (
                            <div className="text-[#6921C1] text-[10px] font-bold mt-3 px-1 tracking-tight">
                                {Dinedata.info.offerInfoV3.couponOffer.title}
                            </div>
                        )}

                    </div>

                   
                </div>
            </a>
        </div>
    </>)
}