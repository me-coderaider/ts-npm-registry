// Outlet is a React compoent, and it reaches up to that browser-router through context system
// and asks what is the currently selected component means which of the 3 component are we currently supposed to display?
// and browser-router will tell 'outlet' component and 'Outlet' component will display it on UI.
import { Outlet } from "react-router-dom";

import Header from "../components/Header";

export default function Root() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}
