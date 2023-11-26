type Data = {
  pic: number;
};

const Bg_Algorithm = ({ pic }: Data) => {
  return (
    <div>
      <div
        className={`bg-[url('/pic/project/algorithm.png')]  w-full h-full bg-cover bg-center absolute transition-all duration-400  ${
          pic === 1 ? "opacity-100" : "opacity-0 invisible"
        }`}
      ></div>
    </div>
  );
};

export default Bg_Algorithm;
