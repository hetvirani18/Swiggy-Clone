export default function RestCard({restaurant}){
    
    return(<>
        <img className="w-70 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restaurant.info.cloudinaryImageId} />
    </>)
}