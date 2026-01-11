export default function GroceryCard({groceryData}) {
    return(<>
        <div className="flex flex-col gap-2">
            <a className="shrink-0 w-40 " href={groceryData?.action.link}>
                <img className="w-full h-40 object-contain" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+groceryData?.imageId} />
            </a>
            <h2 className="text-xl font-bold text-center">{groceryData.action.text}</h2>
        </div>
    </>)
}