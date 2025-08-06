import React from "react";
import Image from "next/image";

const Menu = () => {
  const empresas = [
    {
      nombre: "Mi Gira",
      url: "https://migira.cl/",
    },
    {
      nombre: "Marcuse",
      url: "https://marcuse.cl/",
    },
    {
      nombre: "Rental",
      url: "https://rentalspa.cl/",
    },
    {
      nombre: "Energy Sport",
      url: "#",
    },
    {
      nombre: "",
      url: "#",
    },
  ];

  return (
    <nav className="bg-white flex justify-between items-center p-4">
      <div className="flex items-center">
        <Image
          src="/logo-emsoli.jpg"
          alt="Emsoli Logo"
          width={150}
          height={150}
        />
      </div>
      <ul className="flex justify-center">
        {empresas.map((empresa) => (
          <li key={empresa.nombre} className="px-4 py-2">
            <a
              href={empresa.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 font-semibold hover:text-gray-500"
            >
              {empresa.nombre}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
