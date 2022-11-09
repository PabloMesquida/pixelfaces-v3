import { PCont } from "./Personal.styles.js";
import { EmailTxt } from "./Email.styles.js";
import IconMail from "../icons/IconMail.js";

const Email = () => {
  return (
    <PCont>
      <EmailTxt>
        <IconMail w={16} h={16} />
        <a href="mailto:pablomesquida67@gmail.com">pablomesquida67@gmail.com</a>
      </EmailTxt>
    </PCont>
  );
};

export default Email;
