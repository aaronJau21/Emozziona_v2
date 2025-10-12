import { Montserrat, Cinzel, Arimo, Poppins } from "next/font/google";

export const montserrat = Montserrat({
  variable: "--font-geist-montserrat",
  subsets: ["latin"],
});

export const trajan = Cinzel({
  variable: "--font-geist-cinzel",
  subsets: ["latin"],
  weight: ["600", "800"],
});

export const arimo = Arimo({
  variable: "--font-geist-arimo",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const popping = Poppins({
  variable: "--font-geist-poppins",
  subsets: ["latin"],
  weight: ["200", "500", "800"],
});
