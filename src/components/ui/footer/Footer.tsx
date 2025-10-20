import { arimo, popping } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaMailBulk,
  FaTiktok,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={`bg-primary text-gray-300 ${arimo.className}`}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
          {/* Logo and Description */}
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/" className="block mb-4">
              <Image
                src="/logo-gold.jpeg"
                alt="Logo de Emozziona"
                width={150}
                height={150}
                className="rounded-full"
              />
            </Link>

            <p className={`text-[#e8a54d] ${popping.className} text-sm md:text-base text-center md:text-left`}>
              Disfruta, celebra,... emozziona
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-[#e8a54d] flex flex-col items-center lg:items-start">
            <h3 className="text-xl md:text-2xl font-semibold">Contáctenos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/51902198142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-x-3 hover:text-white transition-colors"
                >
                  <FaPhoneAlt size={18} />
                  <span className="text-sm md:text-base">+51 902 198 142</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pedidos.emozziona@gmail.com"
                  className="flex items-center justify-center md:justify-start gap-x-3 hover:text-white transition-colors"
                >
                  <FaMailBulk size={18} />
                  <span className="text-sm md:text-base">pedidos.emozziona@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4 text-[#e8a54d] flex flex-col items-center lg:items-start">
            <h3 className="text-xl md:text-2xl font-semibold text-center lg:text-left">
              Síguenos en nuestras redes:
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-x-6 md:gap-x-8">
              <a
                href="https://web.facebook.com/emozziona"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all hover:scale-110 duration-300"
              >
                <FaFacebook size={36} color="#e8a54d" className="md:w-[31px] md:h-[31px]" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/emozziona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all hover:scale-110 duration-300"
              >
                <FaInstagram size={36} color="#e8a54d" className="md:w-[31px] md:h-[31px]" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="http://tiktok.com/@emozziona"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all hover:scale-110 duration-300"
              >
                <FaTiktok size={36} color="#e8a54d" className="md:w-[31px] md:h-[31px]" />
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-[#e8a54d]">
            &copy; {new Date().getFullYear()} Emozziona. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
