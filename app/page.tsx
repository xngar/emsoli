import Empresas from "@/componentes/Empresas";
import Footer from "@/componentes/Footer";
import Header from "@/componentes/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Empresas
        imagen="/jovenes_2.jpg"
        nombre=""
        descripcion="Programas turisticos Internacionales y Giras de Estudio"
        logo="/gira.png"
        color="#E76218"
        reverse={false}
      />
      <Empresas
        imagen="/bg-once.jpg"
        nombre=""
        descripcion="Construcción de proyectos públicos y privados | Proyectos inmobiliarios"
        logo="/logo-once-61.png"
        color="#E76218"
        reverse={true}
      />
      <Empresas
        imagen="/bg-rental.jpg"
        nombre=""
        descripcion="Arriendos de Camionetas | Arriendo de Vans | Arriendo de Camiones Pluma | Arriendo de Camiones Aljibe | Arriendo de Camiones Tolva"
        logo="/logo_rental.png"
        color="#E76218"
        reverse={false}
      />
      <Empresas
        imagen="/bg-energy.jpg"
        nombre=""
        descripcion="Venta de aguas y bebidas nutricionales"
        logo="/logo_energy.png"
        color="#E76218"
        reverse={true}
      />
      <Empresas
        imagen="/bg-gou.jpg"
        nombre=""
        descripcion="Venta de productos de construcción | Venta de neumáticos y accesorios para vehículos "
        logo="/logo_gouap.png"
        color="#E76218"
        reverse={false}
      />
      <Footer />
    </div>
  );
}
