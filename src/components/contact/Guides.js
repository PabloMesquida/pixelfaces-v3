import IconStar from "../icons/IconStar.js";
import { GuideContainer, Guide } from "./Guides.styles.js";

const Guides = () => {
  return (
    <GuideContainer>
      <Guide>
        <IconStar w={16} h={16} />
        <a href="https://jonmircha.com/" target="_blank" rel="noreferrer">
          Jonathan MirCha
        </a>
      </Guide>
      <Guide>
        <IconStar w={16} h={16} />
        <a href="https://bruno-simon.com/" target="_blank" rel="noreferrer">
          Bruno Simon
        </a>
      </Guide>
    </GuideContainer>
  );
};

export default Guides;
