type Data = {
  Show: number;
};

const Info_Skill_UIUX = ({ Show }: Data) => {
  return (
    <div>
      <div
        className={`h-[90%] font-inter max-w-xl mx-4 transition-all duration-200  text-white flex-col absolute ${
          Show ? "opacity-100" : " invisible opacity-0"
        }`}
      >
        <div className="font-bold text-3xl">UX/UI</div>
        <div className=" font-normal my-2"></div>
        <div className="flex h-8 ">
          <a
            href="https://drive.google.com/file/d/1MblA_Xl7ZWb708Zs6syhZehuP33IsRE9/view?usp=sharing"
            className="w-auto bg-[#7B6ABF]  rounded-lg flex items-center hover:bg-[#5d5190] transition-colors duration-200 "
          >
            <div className="w-5 h-5 my-1 ml-2 mr-1 bg-[url('/pic/port.png')] bg-cover bg-center rounded-full"></div>
            <div className="font-bold mr-3">Portfolio</div>
          </a>
        </div>
        <div className="my-3 flex  h-auto flex-col">
          <div className="flex items-center ">
            <div className="w-6 h-6 my-1 ml-2 mr-1 bg-[url('/pic/photoshop.png')] rounded-sm bg-cover bg-center"></div>
            <div className=" font-inter mx-1"> Adobe Photoshop</div>
          </div>
          <div className="flex items-center ">
            <div className=" bg-cover bg-center w-6 h-6 my-1 ml-2 mr-1 bg-[url('/pic/figma.png')] rounded-sm"></div>
            <div className=" font-inter mx-1"> Figma</div>
          </div>
        </div>
        <div className=" text-lg font-inter">
          I always use Adobe Photoshop and Figma when it come to designing
          part.I start learning by designing Website project and Portfolio.
        </div>
      </div>
    </div>
  );
};

export default Info_Skill_UIUX;
