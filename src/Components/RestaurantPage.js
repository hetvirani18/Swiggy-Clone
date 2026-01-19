import Footer from "./Footer"
import OnlineRestaurant from "./OnlineRestaurant"
import Restaurants from "./Restaurants"
import RestFoodOption from "./RestFoodOption"

export default function RestaurantPage(){
    return(<>
        <RestFoodOption />
        <Restaurants />
        <OnlineRestaurant />
        <Footer />
    </>)
}