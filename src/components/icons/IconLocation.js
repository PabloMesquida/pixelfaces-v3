import React from "react";
import { Icons } from "./Icons.styles.js";

const IconLocation = ({ w, h }) => {
  return (
    <Icons width={w} height={h} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M12 2a7.181 7.181 0 0 1 7 7.333v.05c0 1.35-.37 2.675-1.069 3.83l-.731 1.02-5.2 7.238-5.2-7.233-.731-1.024A7.382 7.382 0 0 1 5 9.387v-.054A7.181 7.181 0 0 1 12 2zm0-2a9.171 9.171 0 0 0-9 9.333v.053a9.4 9.4 0 0 0 1.4 4.934l.773 1.08 5.8 8.067a1.259 1.259 0 0 0 2.057 0l5.8-8.067.77-1.08A9.4 9.4 0 0 0 21 9.387v-.054A9.171 9.171 0 0 0 12 0z" />
        <path d="M12 14a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
      </g>
    </Icons>
  );
};

export default IconLocation;