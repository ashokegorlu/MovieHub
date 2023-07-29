import React from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import "./index.css";

export const EachMovie = (props) => {
  const { movieDetails } = props;
  const { poster, director, genre, stars, pageViews, title, totalVoted } =
    movieDetails;

  return (
    <li className="border-bottom list-item ml-5">
      <div className="movie-item-card d-flex flex-row p-2">
        <div className="d-flex flex-column justify-content-center pr-3">
          <BiSolidUpArrow size="40px" className="mt-5" />
          <h1 className="pl-3">1</h1>
          <BiSolidDownArrow size="40px" className="mb-3" />
          <p className="pt-2">Votes</p>
        </div>
        <img
          src={poster}
          alt={title}
          className="rounded rounded-right image-container pr-2"
        />
        <div className="des-container">
          <h1 className="m-0">{title}</h1>
          <p className="m-0 ">
            <span className="text-secondary fw-bold">Genre: </span>
            {genre}
          </p>
          <p className="m-0">
            <span className="text-secondary fw-bold">Directoe: </span>
            {director}
          </p>
          <p className="m-0">
            <span className="text-secondary fw-bold">Starring: </span>
            {stars}
          </p>
          <p className="m-0">Mins | English | 1 Apr</p>
          <p className="text-primary m-0">
            {pageViews} views | Voted by {totalVoted} People
          </p>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary btn-lg btn-block mb-2 ">
          Watch Trailer
        </button>
      </div>
    </li>
  );
};
