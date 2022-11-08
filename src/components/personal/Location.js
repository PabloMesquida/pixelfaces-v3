import { PCont } from "./Personal.styles.js";
import { LocationTxt } from "./Location.styles.js";
import IconLocation from "../icons/IconLocation.js";

const Location = () => {
  return (
    <PCont>
      <LocationTxt>
        <IconLocation w={16} h={16} />
        Madrid
      </LocationTxt>
    </PCont>
  );
};

export default Location;
