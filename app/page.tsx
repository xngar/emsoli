import Empresas from "@/componentes/Empresas";
import Footer from "@/componentes/Footer";
import Header from "@/componentes/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Empresas
        imagen="/migira.jpg"
        nombre="Migira"
        descripcion="lorem ipsum lorem ipsum"
        logo="/gira.png"
        color="#ef9d00"
        reverse={false}
      />
      <Empresas
        imagen="/migira.jpg"
        nombre="Migira"
        descripcion="lorem ipsum lorem ipsum"
        logo="/gira.png"
        color="#2353a3"
        reverse={true}
      />
      <Footer />
    </div>
  );
}
