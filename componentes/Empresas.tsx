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
};

const Empresas = ({
  imagen,
  nombre,
  descripcion,
  logo,
  color,
  reverse = false,
}: EmpresasProps) => {
  return (
    <div
      className={`flex flex-row w-full h-[400px] relative justify-between ${
        reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className={`bg-[${color}] w-[40%] relative`}>
        <Image
          src={imagen}
          layout="fill"
          objectFit="cover"
          alt=""
          priority
          className="w-[80%]"
        />
      </div>
      <div
        className={`w-[60%] flex flex-col justify-center items-center`}
        style={{ backgroundColor: color }}
      >
        <Image src={logo} alt="" width={100} height={100} />
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <Link
          className="text-white bg-blue-950 rounded-2xl p-2 w-[200px] flex justify-center items-center hover:bg-blue-900"
          href="#"
        >
          Ir al sitio
        </Link>
      </div>
    </div>
  );
};

export default Empresas;
