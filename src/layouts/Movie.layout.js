import React  from "react";
import MovieNav from "../components/Navbar/movieNav.component";
const MovieLayout = (props) =>{
    return (
        <div>
            <MovieNav/>
            {props.children}
        </div>
    )
}

export default MovieLayout;