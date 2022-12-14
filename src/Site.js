import Contact from "./components/contact/Contact.js";
import Info from "./components/info/Info.js";
import Personal from "./components/personal/Personal.js";
import RandomEmoji from "./RandomEmoji.js";
import { useMediaQuery } from "./hooks/useMediaQuery.js";
import {
  SiteMargins,
  SiteContainer,
  Header,
  Sections,
  PersonalCont,
  InfoCont,
  ContactCont,
} from "./Site.styles.js";

const Site = () => {
  const isDesktop = useMediaQuery("(min-width: 900px)");

  const arrayEmojis = [
    "๐",
    "โ๐งก",
    "๐ช",
    "๐ฅ",
    "๐พ",
    "โ๐ฝ",
    "โโ๏ธ",
    "โ๐ค",
    "โโ",
    "โ๐ฑ",
    "โ๐",
    "โ๐",
    "โ๐",
    "โ๐ฅ",
    "โ๐ฆ",
    "โโญ",
    "โ๐",
    "โโก",
    "โ๐ก",
    "๐น๏ธ",
    "๐ธ",
    "๐",
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
    <SiteMargins>
      <SiteContainer>
        <Header>
          <RandomEmoji arrayE={shuffleArray(arrayEmojis)} />
        </Header>
        <Sections>
          <PersonalCont>
            <Personal />
            {isDesktop && <Contact />}
          </PersonalCont>

          <InfoCont>
            <Info />
          </InfoCont>
          {!isDesktop && (
            <ContactCont>
              <Contact />
            </ContactCont>
          )}
        </Sections>
      </SiteContainer>
    </SiteMargins>
  );
};

export default Site;
