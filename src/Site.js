import React from "react";
import Info from "./components/info/Info.js";
import Personal from "./components/personal/Personal.js";
import RandomEmoji from "./RandomEmoji.js";
import {
  SiteContainer,
  Header,
  Sections,
  PersonalCont,
  InfoCont,
  ContactCont,
} from "./Site.styles.js";

const Site = () => {
  const arrayEmojis = [
    "🙂",
    "​🧡",
    "🪐",
    "🔥",
    "👾",
    "​👽",
    "​✌️",
    "​🤘",
    "​✊",
    "​🌱",
    "​🍊",
    "​🍎",
    "​🍕",
    "​🥟",
    "​🍦",
    "​⭐",
    "​🌈",
    "​⚡",
    "​💡",
    "🕹️",
    "🛸",
    "🚀",
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  return (
    <SiteContainer>
      <Header>
        <RandomEmoji arrayE={shuffleArray(arrayEmojis)} />
      </Header>
      <Sections>
        <PersonalCont>
          <Personal />
        </PersonalCont>
        <InfoCont>
          <Info />
        </InfoCont>
        <ContactCont />
      </Sections>
    </SiteContainer>
  );
};

export default Site;
