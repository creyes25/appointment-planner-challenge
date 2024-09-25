import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({contactsList}) => {
  return (
    <div>
      {contactsList.map((contact, idx) => {
        const {name , ...rest} = contact
        return (
          <Tile 
            key={idx}
            name={name}
            description={rest} // contains all other properties
        />
        )
      })}
    </div>
  );
};
