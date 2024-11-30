import MovieCard from "@/components/cards/MovieCard";
import CustomHeader from "@/components/CustomHeader";
import { MOVIES } from "@/models";
import { APIKEY } from "@/utils";
import axios from "axios";
import { useEffect, useState } from "react";

const Homepage = () => {

  const [movies, setMovies] = useState([] as MOVIES)
  const [series, setSeries] = useState([] as MOVIES)
  const [episodes, setEpisodes] = useState([] as MOVIES)

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=movie&apikey=${APIKEY}&y=2024`)

      setMovies(response.data.Search)
    } catch (error) {
      console.log(error)
    }
  }

  const fetchSeries = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=series&apikey=${APIKEY}&y=2024`)

      setSeries(response.data.Search)
    } catch (error) {
      console.log(error)
    }
  }


  const fetchEpisodes = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=episode&apikey=${APIKEY}`)

      setEpisodes(response.data.Search)

      console.log(response.data.Search)
    } catch (error) {
      console.log(error)
    }
  }
  



  useEffect(()=>{
    fetchMovies()
    fetchSeries()
    fetchEpisodes()
  },[])
  return ( 
    <main className="flex flex-col gap-10">
      {/* hero  */}
      <div className="relative h-[70vh] bg-black text-white">
        <img
          src="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // 
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to KobbyFlix
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Your ultimate destination for discovering amazing movies.
          </p>
          <a
            href="#movies"
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
          >
            Explore Movies
          </a>
        </div>
      </div>

      {/*  */}
      
      <main className="section">
      <div>
        <div id="movies">

      <CustomHeader>Movies</CustomHeader>
        </div>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-5">
        {
          movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        }
      </div>
      </div>

      <div>
      <CustomHeader>Series</CustomHeader>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-5">
        {
          series.map((serie, index) => (
            <MovieCard key={index} movie={serie} />
          ))
        }
      </div>
      </div>

      <div>
      <CustomHeader>Episodes</CustomHeader>
      <div className="grid md:grid-cols-6 grid-cols-2 gap-5">
        {
          episodes.map((episode, index) => (
            <MovieCard key={index} movie={episode} />
          ))
        }
      </div>
      </div>
      </main>


    </main>
   );
}
 
export default Homepage;