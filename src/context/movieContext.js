import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import axios from "axios";

const API = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState("avengers");

  const getMovies = async (url) => {
    try {
      const res = await axios.get(url);
      const data = await res.data;
      setIsLoading(false);
      setMovie(data.Search);
      console.log(res);
    } catch (error) {
      setError({ show: "true", msg: error });
      console.log(Error);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      getMovies(`${API}&s=${query}`);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [query]);

  return (
    <MovieContext.Provider value={{ movie, isLoading, error, query, setQuery }}>
      {children}
    </MovieContext.Provider>
  );
};

// custom global hook

const useMovieContext = () => {
  return useContext(MovieContext);
};

export { MovieContextProvider, useMovieContext };
