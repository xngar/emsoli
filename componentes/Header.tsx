import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div
      className="bg-cover w-full h-screen flex flex-col p-10 justify-center items-center relative"
      style={{
        backgroundImage: `url(/fondo-emsoli.jpg)`,
      }}
    >
      <div className="absolute top-10 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
      <div className="pb-[200px] z-10">
        <Image src="/logo-emsoli.png" alt="" width={500} height={500} />
      </div>
      <div className="z-10 w-[50%]">
        <p className="text-justify ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, a
          inventore aliquid dolor architecto fugiat omnis, possimus ratione qui
          vel magni nobis nulla sint? Adipisci suscipit est incidunt autem et?
        </p>
      </div>
    </div>
  );
};

export default Header;
