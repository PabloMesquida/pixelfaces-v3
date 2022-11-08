import { LogosContainer } from "./Social.styles.js";

import linkedin from "../../static/rrss/linkedin.svg";
import github from "../../static/rrss/github.svg";
import behance from "../../static/rrss/behance.svg";
import instagram from "../../static/rrss/instagram.svg";
import twitter from "../../static/rrss/twitter.svg";
import redbubble from "../../static/rrss/redbubble.svg";

const Social = () => {
  return (
    <LogosContainer>
      <a
        href="https://www.linkedin.com/in/pablomesquida/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="linkedin" width="20px" height="20px" />
      </a>
      <a
        href="https://github.com/PabloMesquida"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="github" width="20px" height="20px" />
      </a>
      <a
        href="https://www.behance.net/pablomesquida"
        target="_blank"
        rel="noreferrer"
      >
        <img src={behance} alt="behance" width="20px" height="20px" />
      </a>
      <a
        href="https://www.instagram.com/pixel_faces/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="instagram" width="20px" height="20px" />
      </a>
      <a
        href="https://twitter.com/pixel_faces"
        target="_blank"
        rel="noreferrer"
      >
        <img src={twitter} alt="twitter" width="20px" height="20px" />
      </a>
      <a
        href="https://www.redbubble.com/es/people/pixelfaces/shop?asc=u"
        target="_blank"
        rel="noreferrer"
      >
        <img src={redbubble} alt="redbubble" width="20px" height="20px" />
      </a>
    </LogosContainer>
  );
};

export default Social;
