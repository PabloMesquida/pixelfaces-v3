import React from "react";
import { Icons } from "./Icons.styles.js";

const IconMail = ({ w, h }) => {
  return (
    <Icons width={w} height={h} viewBox="0 -6 32 32">
      <path d="M23.99 6.13V6c0-.18-.01-.35-.06-.53C23.69 4.6 22.9 4 22 4H2C1.1 4 .31 4.6.07 5.47.02 5.65 0 5.82 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2l-.01-11.87zm-2-.13L12 12 2 6h19.99zM2 18V8.33l8.97 5.38c.32.19.67.29 1.03.29s.71-.1 1.03-.29l8.96-5.38L22 18H2z" />
    </Icons>
  );
};

export default IconMail;
