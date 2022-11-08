import React from "react";
import { Title, ContactCard, Cookies } from "./Contact.styles.js";
import Social from "./Social.js";
import Guides from "./Guides.js";

const Contact = () => {
  return (
    <ContactCard>
      <Title>Redes Sociales</Title>
      <Social />
      <Title>Guías</Title>
      <Guides />
      <Cookies>Política de Cookies</Cookies>
    </ContactCard>
  );
};

export default Contact;
