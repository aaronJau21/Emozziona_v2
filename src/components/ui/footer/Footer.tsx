import { arimo } from "@/lib/fonts";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaMailBulk,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={`bg-primary text-white  ${arimo.className}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        <div className={`flex flex-col items-center gap-y-3 text-secondary`}>
          <h3 className="text-3xl font-semibold">Contáctenos</h3>
          <a href="#" className="flex flex-row gap-x-1.5 items-center">
            <FaPhoneAlt />
            <span>+51 123456789</span>
          </a>

          <a href="#" className="flex flex-row gap-x-1.5 items-center">
            <FaMailBulk />
            <span>emozziona@gmail.com</span>
          </a>
        </div>
        <div>
          <Image
            src={"/logo-gold.jpeg"}
            alt="Logo de emozziona"
            width={500}
            height={500}
            className="w-52"
          />
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <h3 className="text-3xl font-semibold">Síguenos</h3>

          <a
            href="https://www.instagram.com/emozziona/"
            target="_blank"
            className="flex flex-row items-center gap-x-1.5"
          >
            <FaFacebook />
            Facebook
          </a>
          <a
            href="https://web.facebook.com/emozziona"
            target="_blank"
            className="flex flex-row items-center gap-x-1.5"
          >
            <FaInstagram />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};
