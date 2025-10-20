import type { Metadata } from "next";
import "./globals.css";
import { Footer, NavBar } from "@/components";
import { WhastApp } from "@/components/ui/whatsApp/WhastApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://emozziona.com"),
  title: {
    default: "Emozziona | Regalos Corporativos Personalizados y Memorables",
    template: "%s | Emozziona",
  },
  description:
    "Transformamos regalos corporativos en experiencias memorables. Diseño personalizado, packaging premium y atención al detalle para empresas que valoran las conexiones auténticas.",
  keywords: [
    "regalos corporativos",
    "merchandising personalizado",
    "regalos empresariales",
    "branding",
    "packaging premium",
    "regalos personalizados",
    "merchandising de marca",
    "regalos ejecutivos",
  ],
  authors: [{ name: "Emozziona" }],
  creator: "Emozziona",
  publisher: "Emozziona",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://emozziona.com",
    siteName: "Emozziona",
    title: "Emozziona | Regalos Corporativos Personalizados y Memorables",
    description:
      "Transformamos regalos corporativos en experiencias memorables. Diseño personalizado, packaging premium y atención al detalle.",
    images: [
      {
        url: "/emozziona-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Emozziona - Regalos Corporativos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emozziona | Regalos Corporativos Personalizados",
    description:
      "Transformamos regalos corporativos en experiencias memorables.",
    images: ["/emozziona-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: 'tu-codigo-de-verificacion-aqui',
    // yandex: 'tu-codigo-yandex-aqui',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`antialiased`}>
        <NavBar />
        {children}

        <Footer />
        <WhastApp />
      </body>
    </html>
  );
}
