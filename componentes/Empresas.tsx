import Image from "next/image";
import Link from "next/link";
import React from "react";

type EmpresasProps = {
  imagen: string;
  nombre: string;
  descripcion: string;
  logo: string;
  color: string;
  reverse?: boolean;
  vinculo: string;
};

const Empresas = ({
  imagen,
  nombre,
  descripcion,
  logo,
  color,
  reverse = false,
  vinculo,
}: EmpresasProps) => {
  return (
    <div
      className={`flex flex-row w-full h-[500px] relative justify-between ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className={`bg-[${color}] flex w-[80%] relative`}>
        <Image
          src={imagen}
          layout="fill"
          objectFit="cover"
          alt=""
          priority
          className="w-[80%] "
        />
      </div>
      <div
        className={`md:w-[60%] w-[50%] flex flex-col justify-center items-center`}
        style={{ backgroundColor: color }}
      >
        <Image src={logo} alt="" width={200} height={200} />
        <h2 className="mt-4 ">{nombre}</h2>
        <p className="w-[200px] md:w-[300px] text-center text-[12px] md:text-[16px] p-2 text-gray-600">
          {descripcion}
        </p>
        <Link
          className="text-white bg-blue-950 rounded-full mt-8 p-2 w-[150px] flex justify-center items-center hover:bg-blue-900"
          href={vinculo}
        >
          Ir al sitio
        </Link>
      </div>
    </div>
  );
};

export default Empresas;
