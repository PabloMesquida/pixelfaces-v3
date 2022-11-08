import React from "react";
import {
  CardContainer,
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
        return "#dc2f02";
      case "Pixel Art":
        return "#008000";
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
    <CardContainer>
      <CardTitle>
        <a href={data.link} target="_blank" rel="noreferrer">
          {data.name}
        </a>
      </CardTitle>
      <CardDescription>{data.description}</CardDescription>
      <CardRole>{data.role}.</CardRole>
      <CardTags>{tags}</CardTags>
    </CardContainer>
  );
};

export default Card;
