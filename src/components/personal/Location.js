import React from "react";
import { PCont } from "./Personal.styles.js";
import { LocationTxt } from "./Location.styles.js";
import IconLocation from "../icons/IconLocation.js";

const Location = () => {
  return (
    <PCont>
      <LocationTxt>
        <IconLocation w={18} h={18} />
        Madrid
      </LocationTxt>
    </PCont>
  );
};

export default Location;
