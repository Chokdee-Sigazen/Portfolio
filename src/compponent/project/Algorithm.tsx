type Data = {
  pic: number;
};

const Algorithm = ({ pic }: Data) => {
  return (
    <div>
      <div
        className={` absolute transition-all duration-200 ${
          pic === 1 ? "opacity-100" : "opacity-0 invisible"
        }`}
      >
        <div className="font-inter font-bold text-xl text-white">
          Project : Algorithm.io
        </div>
        <div className="flex h-8 text-white my-3">
          <a
            href="https://github.com/Chokdee-Sigazen/Algorithm.io"
            className="w-auto bg-[#7B6ABF]  rounded-lg flex items-center hover:bg-[#5d5190] transition-colors duration-200 "
          >
            <div className="w-5 h-5 ml-2 mr-1 bg-[url('/pic/github.png')] bg-cover bg-center my-auto rounded-full"></div>
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
        <div className=" my-2 font-inter font-normal text-lg w-[70%] text-white">
          Algorithm.io is a platform that provides example algorithms,
          instructional videos demonstrating their functionality, and quizzes
          for hands-on practice.
        </div>
        <div className=" font-inter font-bold text-xl text-white my-3">
          What I've learned
        </div>
        <div className=" my-2 font-inter font-normal text-lg w-[70%] text-white">
          I decide to focus on Frontend Development first. and learn using
          frameworks to improve productivity
        </div>
        <div className="flex flex-col my-3">
          <div className="flex mb-3 ">
            <div className=" h-6 w-6 rounded-sm bg-center bg-cover bg-[url('/pic/react.png')]"></div>
            <div className="text-white ml-3 font-bold">
              React
              <span className=" font-normal mx-2">
                Learn making component , using Router , useState for interactive
                website
              </span>
            </div>
          </div>
          <div className="flex mb-3 ">
            <div className=" h-6 w-6 bg-center bg-cover bg-[url('/pic/tailwind.png')] rounded-sm"></div>
            <div className="text-white ml-3 font-bold">
              Tailwind
              <span className=" font-normal mx-2">
                Learn using to design website and add Transition to it using
                Frammer-Motion
              </span>
            </div>
          </div>
          <div className="flex mb-3 ">
            <div className=" h-6 w-6 bg-center bg-cover bg-[url('/pic/ts.png')] rounded-sm"></div>
            <div className="text-white ml-3 font-bold">
              Type Script
              <span className=" font-normal mx-2">
                Learn and using with React Framework.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Algorithm;
