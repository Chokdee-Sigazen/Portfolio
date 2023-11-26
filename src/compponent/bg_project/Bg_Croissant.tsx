type Data = {
  pic: number;
};

const Bg_Croissant = ({ pic }: Data) => {
  return (
    <div>
      <div
        className={`bg-[url('/pic/project/croissantBonk.png')]  w-full h-full bg-cover bg-center absolute transition-all duration-400 ${
          pic === 0 ? "opacity-100" : "opacity-0 invisible"
        }`}
      ></div>
    </div>
  );
};

export default Bg_Croissant;
