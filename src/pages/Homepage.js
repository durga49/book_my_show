import React,{useState,useEffect} from "react";
import Premier from "../components/Premier/premier.component";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import axios from "axios";
const HomePage = () =>{
    const [popularMovies,setpopularMovies] = useState([]);
    useEffect(()=>{
        const requestPopularMovies = async() =>{
            const getPopularMovies = await axios.get("/movie/popular");
            setpopularMovies(getPopularMovies.data.results);
        }
        requestPopularMovies();
    },[])
    console.log(popularMovies);
    return(
        <>
            <div className="flex flex-col gap-5">
                <div className="container  mx-auto px-32">
                    <h1 className="text-2xl font-bold text-gray-900 ">The best of Entertainment</h1>
                    <EntertainmentCardSlider/>
                </div>
                <div className="bg-bms-700  py-16">
                    <div className="mx-auto px-32 container">
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                        alt="Premier-Rupay"
                        className="w-full h-full"
                    />
                    </div>
                    <div className="mx-auto px-32 container">
                        <Premier PremierImage={popularMovies}/>
                    </div>
                </div>
            </div>
            
        </>
    );
};
export default HomePage;