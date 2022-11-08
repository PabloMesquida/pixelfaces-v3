import Card from "./Card.js";
import { CardsContainer } from "./Cards.styles.js";

const Cards = ({ data }) => {
  return (
    <CardsContainer>
      {data.map((data) => (
        <Card data={data} key={data.id} id={data.id} />
      ))}
    </CardsContainer>
  );
};

export default Cards;
