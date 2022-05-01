import {
  Select,
  MenuItem,
  Checkbox,
  Input,
  ListItemText,
} from "@material-ui/core";
import React, { useState } from "react";
import { filterObject } from "./Filter";

const Artists = (props) => {
  const [artistsName, setArtistsName] = useState([]);

  const handleOnChange = (e) => {
    if (!filterObject.artists.includes(e.target.value)) {
      filterObject.artists = e.target.value;
    }
    setArtistsName(e.target.value);
  };
  return (
    <Select
      labelId="artistLabel"
      id="artist"
      multiple
      value={artistsName}
      onChange={handleOnChange}
      input={<Input />}
      renderValue={(selected) => selected.join(",")}
    >
      {props.artists.map((artist) => {
        return (
          <MenuItem
            key={artist.id}
            value={`${artist.first_name} ${artist.last_name}`}
          >
            <Checkbox
              checked={artistsName.includes(
                `${artist.first_name} ${artist.last_name}`
              )}
            />
            <ListItemText
              primary={`${artist.first_name} ${artist.last_name}`}
            />
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default Artists;
