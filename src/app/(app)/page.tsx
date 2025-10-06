import { Clients, Main, Product, OrganizationSchema, ProductSchema } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Emozziona transforma regalos corporativos en experiencias memorables. Diseño personalizado, packaging premium y atención al detalle para empresas que valoran las conexiones auténticas con sus clientes y equipos.",
  openGraph: {
    title: "Emozziona | Regalos Corporativos Personalizados y Memorables",
    description: "Transformamos regalos corporativos en experiencias memorables. Diseño personalizado, packaging premium y atención al detalle.",
    images: [
      {
        url: "/emozziona-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Emozziona - Regalos Corporativos",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <ProductSchema />
      <Main />
      <Product />
      <Clients />
    </>
  );
}
