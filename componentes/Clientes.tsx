import Image from "next/image";
import React from "react";

const Clientes = () => {
  return (
    <div className="bg-white p-5">
      <div className="flex justify-center items-center text-gray-600 font-bold text-[30px] p-15">
        <h2>Empresas que han confiado en nosotros</h2>
      </div>
      <div className="flex flex-row pb-15 justify-center item-center">
        <div>
          <Image src="/cliente_resister.jpg" alt="" width={500} height={500} />
        </div>
        <div>
          <Image
            src="/cliente_angloamerican.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image src="/cliente_cm3.jpg" alt="" width={500} height={500} />
        </div>
        <div>
          <Image src="/cliente_eurohinca.jpg" alt="" width={500} height={500} />
        </div>

        <div>
          <Image src="/cliente_terratest.jpg" alt="" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Clientes;
