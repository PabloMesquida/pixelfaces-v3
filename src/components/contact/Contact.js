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
      <Cookies>
        <a href="aviso-cookies.html">Política de Cookies</a>
      </Cookies>
    </ContactCard>
  );
};

export default Contact;
