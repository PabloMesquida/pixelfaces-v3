import React from "react";
import { Canvas } from "@react-three/fiber";
import { DeviceOrientationControls, Stars } from "@react-three/drei";
import {
  EffectComposer,
  Pixelation,
  Vignette,
} from "@react-three/postprocessing";
import Lights from "./Lights.js";
import EarthSistem from "./EarthSistem.js";
import RandomEmoji from "./RandomEmoji.js";
import { MainAnimation, MainConteiner, H1, AH1, Txt } from "./Main.styles.js";

const Main = () => {
  const IS_MOBILE = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const arrayEmojis = [
    "🙂",
    "​🧡",
    "🪐",
    "🔥",
    "👾",
    "​👽",
    "​✌️",
    "​🤘",
    "​✊",
    "​🌱",
    "​🍊",
    "​🍎",
    "​🍕",
    "​🥟",
    "​🍦",
    "​⭐",
    "​🌈",
    "​⚡",
    "​💡",
    "🕹️",
    "🛸",
    "🚀",
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  return (
    <MainAnimation>
      {IS_MOBILE && (
        <Canvas
          style={{ position: "absolute", zIndex: 0 }}
          className="webgl"
          dpr={[1, 2]}
          camera={{ fov: 50, position: [0, 0, 10], near: 0.01, far: 1000 }}
        >
          <DeviceOrientationControls />
          <Stars speed={0} depth={0} count={1000} saturation={50} factor={7} />
        </Canvas>
      )}

      <MainConteiner>
        <Canvas
          style={{ position: "abosulote", zIndex: 1 }}
          className="webgl"
          dpr={[1, 2]}
          camera={{ fov: 50, position: [0, 0, 10], near: 0.01, far: 1000 }}
        >
          <Lights />
          <EarthSistem isMobile={IS_MOBILE} />
          <EffectComposer>
            <Pixelation granularity={6} />
          </EffectComposer>
        </Canvas>
        <H1>
          <AH1 href="#About">Pixel Faces</AH1>
        </H1>
        <RandomEmoji arrayE={shuffleArray(arrayEmojis)} />
      </MainConteiner>
    </MainAnimation>
  );
};

export default Main;
