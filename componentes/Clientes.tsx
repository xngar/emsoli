import Image from "next/image";
import React from "react";

const Clientes = () => {
  return (
    <div className="flex flex-row ">
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
        <Image src="/cliente_resister.jpg" alt="" width={500} height={500} />
      </div>
      <div>
        <Image src="/cliente_terratest.jpg" alt="" width={500} height={500} />
      </div>
    </div>
  );
};

export default Clientes;
