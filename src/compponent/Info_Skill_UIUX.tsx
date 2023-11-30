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
          <button className="w-auto bg-[#7B6ABF]  rounded-lg flex items-center hover:bg-[#5d5190] transition-colors duration-200 ">
            <div className="w-5 h-5 my-1 ml-2 mr-1 bg-white rounded-full"></div>
            <div className="font-bold mr-3">Portfolio</div>
          </button>
          <button className="w-auto bg-[#5787A2] ml-2 rounded-lg flex items-center hover:bg-[#3c5d70] transition-colors duration-200">
            <div className="w-5 h-5 my-1 ml-2 mr-1 bg-white rounded-full"></div>
            <div className="font-bold mr-3">Prototype</div>
          </button>
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
        <div className="h-10 flex my-2">
          <button className="w-auto h-full bg-[#4c628f] rounded-sm flex items-center mr-2 hover:bg-[#313F5B] duration-150">
            <div className=" mx-3 font-inter font-bold">readmore</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info_Skill_UIUX;
