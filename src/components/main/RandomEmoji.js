import React, { useState, useEffect } from "react";
import { EmojiContainer } from "./RandomEmoji.styles.js";

export default function RandomEmoji({ arrayE }) {
  const [indexEmoji, setIndexEmoji] = useState(0);
  const [tiempo, setTiempo] = useState(200);

  useEffect(() => {
    if (arrayE.length > 1) {
      if (indexEmoji + 1 < arrayE.length) {
        setTimeout(() => {
          setIndexEmoji(indexEmoji + 1);
          if (indexEmoji > arrayE.length - 6) {
            setTiempo(tiempo + 200);
          }
        }, tiempo);
      }
    }
  }, [indexEmoji]);

  return <EmojiContainer>{arrayE[indexEmoji]}</EmojiContainer>;
}
