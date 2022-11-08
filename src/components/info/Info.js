import { SubSection, Title } from "./Info.styles.js";
import Cards from "./Cards.js";
import data from "../../data/data.json";

const Info = () => {
  let data1 = data.filter((data) => data.category === 1);
  let data2 = data.filter((data) => data.category === 2);
  let data3 = data.filter((data) => data.category === 3);
  let data4 = data.filter((data) => data.category === 4);
  return (
    <>
      <SubSection>
        <Title>Proyectos Personales</Title>
        <Cards data={data1} />
      </SubSection>
      <SubSection>
        <Title>Pixel Art</Title>
        <Cards data={data2} />
      </SubSection>
      <SubSection>
        <Title>Web Design</Title>
        <Cards data={data3} />
      </SubSection>
      <SubSection>
        <Title>Ejercicios</Title>
        <Cards data={data4} />
      </SubSection>
    </>
  );
};

export default Info;
