import { useState } from "react";

type Data = {
  Show: number;
  statePic: any;
  changeStatepic: any;
};

const Info_Skill_webApp = ({ Show, changeStatepic }: Data) => {
  const handleClickScrollProject0 = () => {
    const element = document.getElementById("project");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
      changeStatepic(0);
    }
  };

  const handleClickScrollProject1 = () => {
    const element = document.getElementById("project");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
      changeStatepic(1);
    }
  };

  const handleOnClickNext = () => {
    return changeStateSelect((stateSelect + 1) % 2);
  };
  const handleOnClickPrev = () => {
    return changeStateSelect(() => {
      if (stateSelect === 0) {
        return 1;
      }
      return stateSelect - 1;
    });
  };

  const [stateSelect, changeStateSelect] = useState<number>(0);
  return (
    <div>
      <div
        className={`h-[90%] font-inter max-w-xl mx-4 transition-all duration-200  text-white flex-col absolute ${
          Show && stateSelect === 0 ? "opacity-100" : " invisible opacity-0"
        }`}
      >
        <div className="font-bold text-3xl">Web app Development</div>
        <div className=" font-normal my-2">
          Project : Croissant Bonk Community
        </div>
        <div className="flex h-8 ">
          <a
            href="https://github.com/Chokdee-Sigazen/Croissant-Bonk-Community"
            className="w-auto bg-[#7B6ABF]  rounded-lg flex items-center hover:bg-[#5d5190] transition-colors duration-200 "
          >
            <div className="w-5 h-5 my-1 ml-2 mr-1 bg-[url('/pic/github.png')] bg-cover bg-center  rounded-full"></div>
            <div className="font-bold mr-3">code</div>
          </a>
          <a
            href="https://chokdee-sigazen.github.io/Croissant-Bonk-Community/"
            className="w-auto bg-[#5787A2] ml-2 rounded-lg flex items-center hover:bg-[#3c5d70] transition-colors duration-200"
          >
            <div className="w-5 h-5 my-1 ml-2 mr-1 bg-white rounded-full"></div>
            <div className="font-bold mr-3">live demo</div>
          </a>
        </div>
        <div className="my-3 flex  h-auto flex-col">
          <div className="flex items-center ">
            <div className="w-6 h-6 my-1 ml-2 mr-1  rounded-sm bg-cover bg-center bg-[url('/pic/html.png')]"></div>
            <div className=" font-inter mx-1"> HTML</div>
          </div>
          <div className="flex items-center ">
            <div className="w-6 h-6 my-1 ml-2 mr-1 bg-cover bg-center bg-[url('/pic/css.png')] rounded-sm"></div>
            <div className=" font-inter mx-1"> CSS</div>
          </div>
          <div className="flex items-center ">
            <div className="w-6 h-6 my-1 ml-2 mr-1 bg-cover bg-center bg-[url('/pic/js.png')] rounded-sm"></div>
            <div className=" font-inter mx-1"> Java Script</div>
          </div>
        </div>
        <div className=" text-lg font-inter">
          Croissant BONK Community is a web application designed exclusively for
          the CEDT community. It provides a platform where members can share
          their ideas anonymously.
        </div>
        <div className="h-10 flex my-2 ">
          <button
            className="w-auto h-full bg-[#4c628f] rounded-sm flex items-center mr-2 hover:bg-[#313F5B] duration-150"
            onClick={handleClickScrollProject0}
          >
            <div className=" mx-3 font-inter font-bold">readmore</div>
          </button>
          <button
            className="w-auto h-full bg-[#427679] rounded-sm flex items-center mr-2 hover:bg-[#31595B] duration-150"
            onClick={handleOnClickPrev}
          >
            <div className=" mx-3 font-inter font-bold">←prev</div>
          </button>
          <button
            className="w-auto h-full bg-[#427679] self-end rounded-sm flex items-center mr-2 hover:bg-[#31595B] duration-150"
            onClick={handleOnClickNext}
          >
            <div className=" mx-3 font-inter font-bold">next →</div>
          </button>
        </div>
      </div>
      <div
        className={`h-[90%] font-inter max-w-xl mx-4 transition-all duration-200  text-white flex-col absolute ${
          Show && stateSelect === 1 ? "opacity-100" : " invisible opacity-0"
        }`}
      >
        <div className="font-bold text-3xl">Web app Development</div>
        <div className=" font-normal my-2">Project : Algorithm.io</div>
        <div className="flex h-8 ">
          <a
            href="https://github.com/Chokdee-Sigazen/Algorithm.io"
            className="w-auto bg-[#7B6ABF]  rounded-lg flex items-center hover:bg-[#5d5190] transition-colors duration-200 "
          >
            <div className="w-5 h-5  ml-2 mr-1 bg-[url('/pic/github.png')] bg-cover bg-center my-auto  rounded-full"></div>
            <div className="font-bold mr-3">code</div>
          </a>
          <a
            href="https://chokdee-sigazen.github.io/Algorithm.io/"
            className="w-auto bg-[#5787A2] ml-2 rounded-lg flex items-center hover:bg-[#3c5d70] transition-colors duration-200"
          >
            <div className="w-5 h-5 my-1 ml-2 mr-1 bg-white rounded-full"></div>
            <div className="font-bold mr-3">live demo</div>
          </a>
        </div>
        <div className="my-3 flex  h-auto flex-col">
          <div className="flex items-center ">
            <div className="w-6 h-6 my-1 ml-2 mr-1 bg-cover bg-center bg-[url('/pic/react.png')] rounded-sm"></div>
            <div className=" font-inter mx-1"> React</div>
          </div>
          <div className="flex items-center ">
            <div className="w-6 h-6 my-1 ml-2 mr-1 bg-cover bg-center bg-[url('/pic/tailwind.png')] rounded-sm"></div>
            <div className=" font-inter mx-1"> Tailwind</div>
          </div>
          <div className="flex items-center ">
            <div className="w-6 h-6 my-1 ml-2 mr-1 bg-cover bg-center bg-[url('/pic/ts.png')] rounded-sm"></div>
            <div className=" font-inter mx-1"> Type Script</div>
          </div>
        </div>
        <div className=" text-lg font-inter">
          Algorithm.io is a platform that provides example algorithms,
          instructional videos demonstrating their functionality, and quizzes
          for hands-on practice.
        </div>
        <div className="h-10 flex my-2">
          <button
            onClick={handleClickScrollProject1}
            className="w-auto h-full bg-[#4c628f] rounded-sm flex items-center mr-2 hover:bg-[#313F5B] duration-150"
          >
            <div className=" mx-3 font-inter font-bold">readmore</div>
          </button>
          <button
            className="w-auto h-full bg-[#427679] rounded-sm flex items-center mr-2 hover:bg-[#31595B] duration-150"
            onClick={handleOnClickPrev}
          >
            <div className=" mx-3 font-inter font-bold">←prev</div>
          </button>
          <button
            className="w-auto h-full bg-[#427679] rounded-sm flex items-center mr-2 hover:bg-[#31595B] duration-150"
            onClick={handleOnClickNext}
          >
            <div className=" mx-3 font-inter font-bold">next →</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info_Skill_webApp;
