import React from "react";
import { SubSection, Title } from "./Info.styles.js";
import Cards from "./Cards.js";
import data from "../../data/data.json";

const Info = () => {
  let data1 = data.filter((data) => data.category === 1);
  let data2 = data.filter((data) => data.category === 2);
  let data3 = data.filter((data) => data.category === 3);
  return (
    <>
      <SubSection>
        <Title>Proyectos Personales</Title>
        <Cards data={data1} />
      </SubSection>
      <SubSection>
        <Title>Pixel Art</Title>
      </SubSection>
      <SubSection>
        <Title>Web Design</Title>
      </SubSection>
    </>
  );
};

export default Info;
