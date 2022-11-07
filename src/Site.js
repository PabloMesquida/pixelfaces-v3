import React from "react";
import {
  SiteContainer,
  PersonalCont,
  InfoCont,
  ContactCont,
} from "./Site.styles.js";

const Site = () => {
  return (
    <SiteContainer>
      <PersonalCont />
      <InfoCont />
      <ContactCont />
    </SiteContainer>
  );
};

export default Site;
