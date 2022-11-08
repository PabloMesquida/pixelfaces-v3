import React from "react";
import {
  CardTitle,
  CardDescription,
  CardTags,
  CardTag,
  CardRole,
  Item,
} from "./Card.styles";

const Card = ({ data }) => {
  let tags = [];

  function SetColor(type) {
    console.log("ok");
    switch (type) {
      case "React.js":
        return "#FFC300";
      case "Three.js":
        return "#FFC300";
      case "Pixel Art":
        return "#FFC300";
      default:
        return "#000";
    }
  }

  for (let i = 0; i < data.tags.length; i++) {
    tags.push(
      <CardTag key={i}>
        <Item color={SetColor(data.tags[i])} />
        {console.log(SetColor(data.tags[i]))}
        {data.tags[i]}
      </CardTag>
    );
  }
  return (
    <div>
      <CardTitle>{data.name}</CardTitle>
      <CardDescription>{data.description}</CardDescription>
      <CardRole>{data.role}.</CardRole>
      <CardTags>{tags}</CardTags>
    </div>
  );
};

export default Card;
