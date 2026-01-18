import { Outlet } from "react-router"
import RestHeader from "./RestHeader"

export default function SecondaryHome (){
    return (<>
        <RestHeader />
        <Outlet />
    </>)
}