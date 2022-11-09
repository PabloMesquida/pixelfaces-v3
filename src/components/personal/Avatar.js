import { useState } from "react";
import { useSpring } from "react-spring";
import IconRefresh from "../icons/IconRefresh.js";
import {
  AvatarCont,
  AvatarImg,
  AvatarBtn,
  AvatarImgCont,
} from "./Avatar.styles.js";

const data = ["01", "02", "03", "04"];

const Avatar = () => {
  const [avatar, setAvatar] = useState(0);
  let imgURL = `assets/avatars/${data[avatar]}.jpg`;

  const [{ opacity }] = useSpring(
    () => ({
      reset: true,
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 1000 },
    }),
    [avatar]
  );

  return (
    <AvatarCont>
      <AvatarImgCont>
        <AvatarImg src={imgURL} alt="pablo" style={{ opacity }} id="avatar" />
      </AvatarImgCont>
      <AvatarBtn onClick={() => setAvatar(avatar === 3 ? 0 : avatar + 1)}>
        <IconRefresh w={20} h={20} />
      </AvatarBtn>
    </AvatarCont>
  );
};

export default Avatar;
