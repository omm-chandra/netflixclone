import "./banner.css"
import { useState, useEffect } from "react"
import netflixLogo from "../image/Logonetflix.png"
import payLogo from "../image/Netflix-avatar.png"
import axios from "./axios"
import requests from "./request"


const Banner = () => {
    const [movie, setMovie] = useState([])
    const [show,setShow] = useState(false);

    useEffect(() => {
        async function funcData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }
        funcData()
    }, [])

    function truncate(string, n) {
        return string > n ? string.substr(0, n - 1) + "..." : string;
    }

    const transtion = ()=>{
        if (window.scrollY>20) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transtion)
        return ()=> window.removeEventListener("scroll",transtion)
    })

    return (
        <>
            <div id="main_div">

                <div id={show?"nav_bars":"nav_bar"}>
                    <img src={netflixLogo} alt="logo" id="netflix_logo" />
                    <img src={payLogo} alt="paylogo" id="pay_logo" />
                </div>

                <div id="bgc_img"
                    style={{
                        backgroundSize: "cover",
                        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                        backgroundPosition: "center center"
                    }}
                >
                    <div id="center_div">
                        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
                        <div id="btns">
                            <button>PLAY</button>
                            <button>MY PLAYLIST</button>
                        </div>
                        <p>{truncate(movie.overview, 250)}</p>
                        {/* <p>{movie?.overview}</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;