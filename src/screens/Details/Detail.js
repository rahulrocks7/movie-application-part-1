import {
  Typography,
  ImageList,
  ImageListItemBar,
  ImageListItem,
} from "@material-ui/core";
import React from "react";
import "./Detail.css";

import { Link, useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import RatingStars from "./RatingStars";

const Detail = () => {
  const location = useLocation();
  const movieData = location.state.movie;

  return (
    <div className="detail">
      <Link to="/">
        <Typography className="backButton">&lt; Back to Home</Typography>
      </Link>
      <div className="movieDetails">
        <div className="detailsLeftPart">
          <img
            src={movieData.poster_url}
            className="detailImage"
            alt="movieData.title"
          />
        </div>
        <div className="detailsMiddlePart">
          <Typography variant="h5">
            <strong>{movieData.title}</strong>
          </Typography>
          <Typography>
            <strong>Genre :</strong>
            {" " + movieData.genres.toString()}
          </Typography>
          <Typography>
            <strong>Duration :</strong>
            {" " + movieData.duration}
          </Typography>
          <Typography>
            <strong>Release Date :</strong>
            {new Date(movieData.release_date).toDateString()}
          </Typography>
          <Typography>
            <strong>Rating :</strong>
            {movieData.critics_rating.toFixed(1)}
          </Typography>
          <Typography className="detailsPlot">
            <strong>Polt :</strong>
            <a href={movieData.wiki_url} target="_blank">
              (Wiki Link)
            </a>
            {movieData.storyline}
          </Typography>
          <Typography className="trailerText">
            <strong>Trailer :</strong>
          </Typography>
          <YouTube
            videoId={movieData.trailer_url.split("=")[1]}
            opts={{ width: "100%", height: "400px" }}
          />
        </div>

        <div className="detailsRightPart">
          <Typography>
            <strong>Rate this movie:</strong>
            <br />
            <RatingStars />
          </Typography>

          <Typography>
            <strong>Artists :</strong>
          </Typography>
          <ImageList cols={2}>
            {movieData.artists.map((artist) => {
              return (
                <ImageListItem key={artist.id}>
                  <img src={artist.profile_url} alt={artist.first_name} />
                  <ImageListItemBar
                    title={`${artist.first_name} ${artist.last_name}`}
                  ></ImageListItemBar>
                </ImageListItem>
              );
            })}
          </ImageList>
        </div>
      </div>
    </div>
  );
};

export default Detail;
