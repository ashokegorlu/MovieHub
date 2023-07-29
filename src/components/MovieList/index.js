import React, { useEffect, useState } from "react";
import "./index.css";
import { EachMovie } from "../EachMovie";
import { Header } from "../Header";

const MovieList = () => {
  const storageData = localStorage.getItem("userData");
  if (storageData === null) {
    window.location.href = "/login";
  }

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    // Fetch movie data from the API
    const apiUrl = "https://hoblist.com/api/movieList";
    const requestData = {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting",
    };

    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(requestData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data.result);
      })
      .catch((error) => console.error("Error fetching movie data:", error));
  }, []);
  console.log(movieData);

  return (
    <div className="container pl-5">
      <div id="movieData">
        <Header />
        <ul className="list-unstyled m-2">
          {movieData.map((movie) => (
            <EachMovie key={movie.id} movieDetails={movie} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieList;
