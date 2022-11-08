import { LoaderCont, LoaderAnim, LoaderTxt } from "./Loader.styles.js";

const Loader = () => {
  return (
    <LoaderCont>
      <LoaderAnim />
      <LoaderTxt>Cargando...</LoaderTxt>
    </LoaderCont>
  );
};

export default Loader;
