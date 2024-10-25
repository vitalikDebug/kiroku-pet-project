import { Outlet } from "react-router-dom";
import NavBar from "../../components/navBar/navBar";

function Layout() {
    return (
        <div>
            <div>
                <NavBar/>
            </div>
            <div> 
                <Outlet/>
            </div>
        </div>
    )
}

export {Layout}