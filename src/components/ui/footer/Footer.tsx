import { arimo } from "@/lib/fonts";
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="block">
              <Image
                src="/logo-gold.jpeg"
                alt="Logo de Emozziona"
                width={150}
                height={150}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-[#e8a54d]">
            <h3 className="text-xl font-semibold ">Contáctenos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/51902198142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 hover:text-white transition-colors"
                >
                  <FaPhoneAlt />
                  <span>+51 902 198 142</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pedidos.emozziona@gmail.com"
                  className="flex items-center gap-x-3 hover:text-white transition-colors"
                >
                  <FaMailBulk />
                  <span>pedidos.emozziona@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4 text-[#e8a54d]">
            <h3 className="text-xl font-semibold ">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/emozziona"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook size={31} color="#e8a54d" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/emozziona/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={31} color="#e8a54d" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="http://tiktok.com/@emozziona"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTiktok size={31} color="#e8a54d" />
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
