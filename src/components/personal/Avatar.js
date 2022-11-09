import { useState } from "react";
import { useSpring, config } from "react-spring";
import IconRefresh from "../icons/IconRefresh.js";
import {
  AvatarCont,
  AvatarImg,
  AvatarBtn,
  AvatarImgCont,
} from "./Avatar.styles.js";

const data = ["01.jpg", "02.png", "03.png", "04.png"];

const Avatar = () => {
  const [avatar, setAvatar] = useState(0);
  let imgURL = `assets/avatars/${data[avatar]}`;

  const [{ opacity, scale }] = useSpring(
    () => ({
      reset: true,
      from: { opacity: 0, scale: 0 },
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
