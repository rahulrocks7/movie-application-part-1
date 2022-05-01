import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  CardActions,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Genre from "./Genre";
import Artists from "./Artists";

export let filterObject = {
  name: "",
  releaseDateEnd: "",
  releaseDateStart: "",
  artists: [],
  genres: [],
};
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
    maxWidth: 300,
  },
  child: {
    minWidth: 240,
    maxWidth: 240,

    margin: theme.spacing(1),
  },

  title: {
    fontSize: 14,
    color: theme.palette.primary.light,
  },
}));
const Filter = (props) => {
  const styles = useStyles();

  return (
    <Card className={styles.root}>
      <CardContent>
        <Typography className={styles.title} gutterBottom>
          FIND MOVIES BY:
        </Typography>

        <FormControl size="medium" className={styles.child}>
          <InputLabel htmlFor="movieName">Movie Name</InputLabel>
          <Input
            id="movieName"
            onChange={(e) => {
              filterObject.name = e.target.value;
            }}
          />
        </FormControl>
        <FormControl size="medium" className={styles.child}>
          <InputLabel id="genreLabel" htmlFor="genre" className={styles.child}>
            Genres
          </InputLabel>
          <Genre genres={props.genres} />
        </FormControl>
        <FormControl size="medium" className={styles.child}>
          <InputLabel htmlFor="artists" id="artistsLabel">
            Artists
          </InputLabel>
          <Artists artists={props.artists} />
        </FormControl>
        <FormControl size="medium" className={styles.child}>
          <TextField
            label="Release Date Start"
            type="date"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              filterObject.releaseDateStart = e.target.value;
            }}
          />
        </FormControl>
        <FormControl size="medium" className={styles.child}>
          <TextField
            label="Release Date End"
            type="date"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              filterObject.releaseDateEnd = e.target.value;
            }}
          />
        </FormControl>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          className={styles.child}
          onClick={props.filterMovie}
        >
          Apply
        </Button>
      </CardActions>
    </Card>
  );
};

export default Filter;
