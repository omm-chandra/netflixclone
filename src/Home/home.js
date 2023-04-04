import Banner from "./banner";
import requests from "./request";
import Row from "./row"

const Home = () => {

    return (
        <>

            <Banner/>

            <Row tittle="NETFLIC ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row tittle="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row tittle="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row tittle="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row tittle="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row tittle="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row tittle="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row tittle="Documentaries" fetchUrl={requests.fetchDocumentries}/>

        </>
    )
}

export default Home;