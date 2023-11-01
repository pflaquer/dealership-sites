import React from "react";
import logo from "./logo_.webp";
import { NavLink } from "react-router-dom";

function MainMenu() {
return (
<div>
<NavLink to="/">
<img
src={logo}
className="autologo"
/>
</NavLink>
</div>

)
}

export default MainMenu;
