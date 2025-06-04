 import axios from 'axios';
import React, { useEffect, useState } from 'react'
 
 const API_KEY = 'f82568fa872671bddb97d46be4b7e701';
const BASE_URL = 'https://api.themoviedb.org/3';

 const Movie = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const axiosMovie = async() => {
            try {
                const response = await axios.get(`${BASE_URL}/movie/popular`, {
                    params: {
                        api_key: API_KEY
                    }
                })
                console.log(response.data);
                setMovies(response.data.results);
            } catch(error) {
                console.error(error);
            }
        }
        axiosMovie();
    }, [])

   return (
     <div>
       <h2>인기 영화</h2>
       <ul>
        {movies.map((movie) => (
            <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}></img></p>
            </li>
        ))}
       </ul>
     </div>
   )
 }
 
 export default Movie