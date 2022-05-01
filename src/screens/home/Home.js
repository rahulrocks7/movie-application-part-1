import React, { useState } from "react";
import "./Home.css";
import SingleLineImageList from "./SingleLineImageList";
import moviesData from "../../common/moviesData";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";

import genreData from "./genreData";
import artistsData from "./artistsData";
import Filter, { filterObject } from "./Filter";
import { Link } from "react-router-dom";

function Home() {
  const [state, setState] = useState({
    moviesData: moviesData,
    genres: genreData,
    artists: artistsData,
  });

  const [movies, setMovies] = useState(moviesData);

  const filterMovie = () => {
    // checking if the user has clicked on apply button without filling form
    // if so do nothing just returning the initial movie data

    if (
      filterObject.name === "" &&
      filterObject.releaseDateEnd === "" &&
      filterObject.releaseDateStart === "" &&
      filterObject.genres.length === 0 &&
      filterObject.artists.length === 0
    ) {
      const newMovies = movies;
      setMovies(newMovies);
      return moviesData;
    }

    const filteredMovies = state.moviesData.filter((movie) => {
      if (
        movie.title.toLowerCase() === filterObject.name.toLowerCase() ||
        movie.genres.some((genre) => filterObject.genres.includes(genre)) ||
        movie.artists.some((artist) =>
          filterObject.artists.includes(
            `${artist.first_name} ${artist.last_name}`
          )
        ) ||
        (new Date(filterObject.releaseDateStart) <
          new Date(movie.release_date) &&
          new Date(filterObject.releaseDateEnd) > new Date(movie.release_date))
      ) {
        return movie;
      }
    });

    setMovies(filteredMovies);
  };
  return (
    <div>
      <span className="headingUpComingMovies">Upcoming Movies</span>
      <SingleLineImageList moviesData={state.moviesData} />

      <div className="flex-container">
        <div className="left">
          <ImageList cols={4} rowHeight={350}>
            {movies.map((item) => (
              <ImageListItem className="featuredImageContainer" key={item.id}>
                <Link to="/details" state={{ movie: item }}>
                  <img
                    src={item.poster_url}
                    srcSet={item.poster_url}
                    alt={item.title}
                    loading="lazy"
                    className="featuredImage"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={`Release Date : ${new Date(
                      item.release_date
                    ).toDateString()}`}
                  />
                </Link>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="right">
          <Filter
            genres={state.genres}
            artists={state.artists}
            filterMovie={filterMovie}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
