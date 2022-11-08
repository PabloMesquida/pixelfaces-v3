import { useState } from "react";
import { AvatarCont, AvatarImg } from "./Avatar.styles.js";

const data = ["01", "02", "03", "04"];

const Avatar = () => {
  const [avatar, setAvatar] = useState(0);
  let imgURL = `assets/avatars/${data[avatar]}.jpg`;

  return (
    <AvatarCont>
      <AvatarImg src={imgURL} alt="pablo" />
    </AvatarCont>
  );
};

export default Avatar;
