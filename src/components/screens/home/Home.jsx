import React from "react";
import "./Home.css";
import { useQuery } from "react-query";
import { MovieService } from "../../services/movie.service";

const Home = () => {
  const {data: movieList, isLoading} = useQuery({
    queryKey: ["get-all-movie"],
    queryFn: () => MovieService.getMovieList(),
  }); 
  console.log('mv',movieList)
  return (
    <div className="home">
      <div className="home-container">
        <h3 className="home-title">Тут конент</h3>
        <div className="home-content">
          <div className="home-content-all">
            {isLoading ? [] : movieList.results.map((movie) => (
              <li key={movie.id}> <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt="" width="200px" height="200px"/>{movie.title}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
