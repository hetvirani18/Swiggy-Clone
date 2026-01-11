export default function FoodCard({foodData}){

    return(<>
        <a className="shrink-0 w-40 " href={foodData?.action.link}>
            <img className="w-full h-40 object-contain" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId} />
        </a>
    </>)
}