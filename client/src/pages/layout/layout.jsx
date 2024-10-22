import { Outlet } from "react-router-dom";
import NavBar from "../../components/navBar/navBar";

function Layout() {
    return (
        <div className="layout">
            <div>
                <NavBar/>
            </div>
            <div className="content"> 
                <Outlet/>
            </div>
        </div>
    )
}

export {Layout}