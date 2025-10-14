"use client";
import { montserrat, trajan } from "@/lib/fonts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const NavBar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return; // Solo escuchar el scroll en la ruta raíz

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const headerClasses = isHome
    ? `fixed top-0 z-50 w-full transition-all duration-300 ease-in-out  ${
        scrolled ? "bg-black/50 py-5" : "bg-transparent py-3"
      }`
    : "relative bg-black/50 py-5";

  return (
    <header className={`${headerClasses}`}>
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center px-5">
        <Link href={"/"} className="flex flex-row items-center gap-x-3 ">
          <Image
            src={"/emozziona-logo.jpg"}
            alt="Logo de Emozziona"
            width={500}
            height={500}
            className="w-16 rounded-full"
          />
          {/* <h2
            className={`text-white text-3xl ${trajan.className} font-semibold`}
          >
            Emozziona
          </h2> */}
          <Image
            src={"/logo.webp"}
            alt="Logo de Emozziona"
            width={200}
            height={200}
          />
        </Link>

        <nav className="flex flex-row gap-x-3.5 text-white">
          <Link
            href={"/"}
            className={`${montserrat.className} cursor-pointer text-xl`}
          >
            Inicio
          </Link>
          <Link
            href={"/categories"}
            className={`${montserrat.className} cursor-pointer text-xl`}
          >
            Productos
          </Link>
          <Link
            href={"/about"}
            className={`${montserrat.className} cursor-pointer text-xl`}
          >
            Nosotros
          </Link>
          <Link
            href={"/history"}
            className={`${montserrat.className} cursor-pointer text-xl`}
          >
            Historia
          </Link>
        </nav>
      </div>
    </header>
  );
};
