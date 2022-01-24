import React,{useState,useEffect} from "react";
import axios from "axios";
import HeroSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {PrevArrow,NextArrow} from "./Arrows.component";
const HeroCarousal = () => {

    const [images,setImages] = useState([]);
    useEffect (()=>{
        const requestNowPlayingMovies = async() =>{
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        }
        requestNowPlayingMovies();
    },[]);
    const settings = {
        arrows:true,
        centerMode:true,
        centerPadding:"150px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow/>
      };
      return(
          <>
            <HeroSlider {...settings}>
                {images.map((image)=>(
                    <div className="w-10 h-80 px-2 py-3">
                        <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="test-img" className="rounded-md w-full h-full"/>
                    </div>
                ))}
            </HeroSlider>
          </>
      )
}

export default HeroCarousal;