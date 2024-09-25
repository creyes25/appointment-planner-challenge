import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({tiles}) => {
  return (
    <div>
      {tiles.map((contact, idx) => {
        const {name , ...description} = contact
        return (
          <Tile 
            key={idx}
            name={name}
            description={description} // contains all other properties
        />
        )
      })}
    </div>
  );
};
