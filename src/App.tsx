import Home from "./compponent/Home";
import { useState } from "react";
import AboutMe from "./compponent/AboutMe";
import Skill from "./compponent/Skill";
import Project from "./compponent/Project";
import Footer from "./compponent/Footer";
import Archive from "./compponent/Archive";
import ContactMe from "./compponent/ContactMe";

export default function App() {
  const [StateWeb, changeStateWeb] = useState(1);
  const [stateUI, changeStateUI] = useState(0);
  const [statePic, changeStatepic] = useState(0);
  return (
    <>
      <Home />
      <AboutMe
        stateWeb={StateWeb}
        stateUI={stateUI}
        changeStateWeb={changeStateWeb}
        changeStateUI={changeStateUI}
      />
      <Skill
        stateWeb={StateWeb}
        stateUI={stateUI}
        statePic={statePic}
        changeStateWeb={changeStateWeb}
        changeStateUI={changeStateUI}
        changeStatepic={changeStatepic}
      />
      <Project statePic={statePic} changeStatepic={changeStatepic} />
      <Archive />
      <ContactMe />
    </>
  );
}
