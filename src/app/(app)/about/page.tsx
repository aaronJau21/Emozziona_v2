import { MainAbout, Title } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Emozziona",
  description:
    "Conoce la filosofía, misión y visión de Emozziona. Creamos regalos que transmiten gratitud, cercanía y valor.",
};

const AboutPage = () => {
  return (
    <>
      <Title />
      <MainAbout />
    </>
  );
};

export default AboutPage;
