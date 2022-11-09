import { useState } from "react";
import IconRefresh from "../icons/IconRefresh.js";
import { AvatarCont, AvatarImg, AvatarBtn } from "./Avatar.styles.js";

const data = ["01", "02", "03", "04"];

const Avatar = () => {
  const [avatar, setAvatar] = useState(0);
  let imgURL = `assets/avatars/${data[avatar]}.jpg`;

  return (
    <AvatarCont>
      <AvatarImg src={imgURL} alt="pablo" />
      <AvatarBtn>
        <IconRefresh w={20} h={20} />
      </AvatarBtn>
    </AvatarCont>
  );
};

export default Avatar;
