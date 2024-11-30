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
      
      <div>
      <CustomHeader>Movies</CustomHeader>
      <div className="grid grid-cols-6 gap-5">
        {
          movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        }
      </div>
      </div>

      <div>
      <CustomHeader>Series</CustomHeader>
      <div className="grid grid-cols-6 gap-5">
        {
          series.map((serie, index) => (
            <MovieCard key={index} movie={serie} />
          ))
        }
      </div>
      </div>

      <div>
      <CustomHeader>Episodes</CustomHeader>
      <div className="grid grid-cols-6 gap-5">
        {
          episodes.map((episode, index) => (
            <MovieCard key={index} movie={episode} />
          ))
        }
      </div>
      </div>


    </main>
   );
}
 
export default Homepage;