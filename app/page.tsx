"use client";
import { motion } from "framer-motion";
import Empresas from "@/componentes/Empresas";
import Footer from "@/componentes/Footer";
import Header from "@/componentes/Header";
import Clientes from "@/componentes/Clientes";
import Menu from "@/componentes/Menu";

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div>
      <Menu />
      <Header />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={variants}
      >
        <Empresas
          imagen="/jovenes_2.jpg"
          nombre=""
          descripcion="Programas turisticos Internacionales y Giras de Estudio"
          logo="/gira.png"
          color="#ffffff"
          reverse={false}
          vinculo="https://migira.cl/"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={variants}
      >
        <Empresas
          imagen="/bg-once.jpg"
          nombre=""
          descripcion="Construcción de proyectos públicos y privados | Proyectos inmobiliarios"
          logo="/marcuse.jpg"
          color="#ffffff"
          reverse={true}
          vinculo="https://once61.cl/"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={variants}
      >
        <Empresas
          imagen="/bg-rental.jpg"
          nombre=""
          descripcion="Arriendos de Camionetas | Arriendo de Vans | Arriendo de Camiones Pluma | Arriendo de Camiones Aljibe | Arriendo de Camiones Tolva"
          logo="/logo_rental.png"
          color="#ffffff"
          reverse={false}
          vinculo="https://rentalspa.cl/"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={variants}
      >
        <Empresas
          imagen="/bg-energy.jpg"
          nombre=""
          descripcion="Venta de aguas y bebidas nutricionales"
          logo="/logo_energy.png"
          color="#ffffff"
          reverse={true}
          vinculo=""
        />
      </motion.div>
      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={variants}
      >
        <Empresas
          imagen="/bg-gou.jpg"
          nombre=""
          descripcion="Venta de productos de construcción | Venta de neumáticos y accesorios para vehículos "
          logo="/logo_gouap.png"
          color="#ffffff"
          reverse={false}
          vinculo=""
        />
      </motion.div> */}
      <Clientes />
      <Footer />
    </div>
  );
}
