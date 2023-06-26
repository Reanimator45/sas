import { useEffect,useState } from "react";
import Movie from "./Movie";

/*cambiar Nombre del componente Movie a pelicula y rempelazar variables*/ 

const Peliculas = () => {
  const url =
  "https://api.themoviedb.org/3/movie/popular?api_key=d5c775389c73a0b2a2bc815d05093528&language=es-MX&page=";
const [popular, setPopular] = useState([]);
useEffect(() => {
  fetchPopular();
}, []);
const fetchPopular = async () => {
  const data = await fetch(url);
  const movies = await data.json();
  console.log(movies);
  setPopular(movies.results);
};



  return (
    <div className="pelis">

<h1>Ultimos Estrenos</h1>
<div className="popular-movies">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
        
    </div>
  )
}

export default Peliculas