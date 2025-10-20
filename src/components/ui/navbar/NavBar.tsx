"use client";
import { montserrat, trajan } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const NavBar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevenir scroll cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!isHome) return; // Solo escuchar el scroll en la ruta raíz

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const headerClasses = isHome
    ? `fixed top-0 z-[100] w-full transition-all duration-300 ease-in-out  ${
        scrolled ? "bg-black/50 py-5" : "bg-transparent py-3"
      }`
    : "relative z-[100] bg-black/50 py-5";

  return (
    <header className={`${headerClasses}`}>
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center px-5">
        {/* Logo */}
        <Link href={"/"} className="flex flex-row items-center gap-x-2 md:gap-x-3 relative z-10">
          <Image
            src={"/emozziona-logo.jpg"}
            alt="Logo de Emozziona"
            width={500}
            height={500}
            className="w-12 md:w-16 rounded-full"
          />
          <Image
            src={"/logo.webp"}
            alt="Logo de Emozziona"
            width={290}
            height={290}
            className="w-24 md:w-auto max-w-[120px] md:max-w-none"
          />
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex flex-row gap-x-3.5 text-white">
          <Link
            href={"/"}
            className={`${montserrat.className} cursor-pointer text-xl hover:text-gray-300 transition-colors`}
          >
            Inicio
          </Link>
          <Link
            href={"/categories"}
            className={`${montserrat.className} cursor-pointer text-xl hover:text-gray-300 transition-colors`}
          >
            Productos
          </Link>
          <Link
            href={"/about"}
            className={`${montserrat.className} cursor-pointer text-xl hover:text-gray-300 transition-colors`}
          >
            Nosotros
          </Link>
          <Link
            href={"/history"}
            className={`${montserrat.className} cursor-pointer text-xl hover:text-gray-300 transition-colors`}
          >
            Historia
          </Link>
        </nav>

        {/* Botón Hamburguesa */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white relative p-2 hover:bg-white/10 rounded-lg transition-colors flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={32} /> : <HiMenu size={32} />}
        </button>

        {/* Menu Mobile */}
        <div
          className={`fixed inset-0 z-[105] bg-black/95 backdrop-blur-sm md:hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-y-8 text-white">
            <Link
              href={"/"}
              className={`${montserrat.className} cursor-pointer text-2xl hover:text-gray-300 transition-all transform hover:scale-110`}
            >
              Inicio
            </Link>
            <Link
              href={"/categories"}
              className={`${montserrat.className} cursor-pointer text-2xl hover:text-gray-300 transition-all transform hover:scale-110`}
            >
              Productos
            </Link>
            <Link
              href={"/about"}
              className={`${montserrat.className} cursor-pointer text-2xl hover:text-gray-300 transition-all transform hover:scale-110`}
            >
              Nosotros
            </Link>
            <Link
              href={"/history"}
              className={`${montserrat.className} cursor-pointer text-2xl hover:text-gray-300 transition-all transform hover:scale-110`}
            >
              Historia
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
