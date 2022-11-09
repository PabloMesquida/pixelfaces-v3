import { useState } from "react";
import { useSpring, config } from "react-spring";
import IconRefresh from "../icons/IconRefresh.js";
import {
  AvatarCont,
  AvatarImg,
  AvatarBtn,
  AvatarImgCont,
} from "./Avatar.styles.js";

import avatar01 from "../../static/avatars/01.jpg";
import avatar02 from "../../static/avatars/02.png";
import avatar03 from "../../static/avatars/03.png";
import avatar04 from "../../static/avatars/04.png";

const data = [avatar01, avatar02, avatar03, avatar04];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const Avatar = () => {
  const [avatar, setAvatar] = useState(getRandomInt(4));
  let imgURL = data[avatar];

  const [{ opacity, scale }] = useSpring(
    () => ({
      reset: true,
      from: { opacity: 0, scale: 0.9 },
      to: { opacity: 1, scale: 1 },
      config: config.gentle,
    }),
    [avatar]
  );

  return (
    <AvatarCont>
      <AvatarImgCont>
        <AvatarImg
          src={imgURL}
          alt="pablo"
          style={{ opacity, scale }}
          id="avatar"
        />
      </AvatarImgCont>
      <AvatarBtn onClick={() => setAvatar(avatar === 3 ? 0 : avatar + 1)}>
        <IconRefresh w={20} h={20} />
      </AvatarBtn>
    </AvatarCont>
  );
};

export default Avatar;
