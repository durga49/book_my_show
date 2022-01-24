import React  from "react";
import Nav from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/HeroCarousal/heroCarousal.component";
const DefaultLayout = (props) =>{
    return (
        <div>
            <Nav/>
            <HeroCarousal/>
            {props.children}
        </div>
    )
}

export default DefaultLayout;