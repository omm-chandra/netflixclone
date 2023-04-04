import "./row.css"
import { useEffect, useState } from "react"
import axios from "./axios"

const Row = ({ tittle, fetchUrl, isLargeRow = false }) => {

    const [movie, setMovie] = useState([])

    const baseUrl = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function funcData() {
            const request = await axios.get(fetchUrl)
            setMovie(request.data.results)
            return request
        }
        funcData()
    }, [fetchUrl])

    return (
        <>
            <div id="back_ground">
                <h2>{tittle}</h2>
                <div className="row_posters">
                {
                    movie.map(movie => (
                        <>
                            <div key={movie.id}>

                                <img src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                    alt={movie.original_title}
                                    className={`row_poster ${isLargeRow && "row_posterLarge"}`} 
                                />

                            </div>
                        </>
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default Row;