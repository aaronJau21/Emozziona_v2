interface IImages {
  name: string;
  category: ICategory[];
}

interface ICategory {
  nombre: string;
  img: string;
  reconocimiento: string;
  presentacion?: string;
}

export const allImages: IImages[] = [
  {
    name: "Corporativos",
    category: [
      {
        nombre: "Reconocimiento",
        img: "/categories/2.png",
        reconocimiento:
          "Vaso térmico de 350 ml. con nombre o logo grabado a láser. ",
        presentacion:
          "Caja Kraft decorada con viruta, lazo y tarjeta personalizada",
      },
      {
        nombre: "Día del trabajador",
        img: "/categories/3.png",
        reconocimiento:
          "Este box contiene un Vaso térmico de 400 ml. personalizado con nombre del colaborador o logo a grabado láser. Una libreta de notas de medida 14 x 9cm. de 80 hojas. Personalizado.",
        presentacion:
          " Caja Kraft decorada con viruta, lazo y tarjeta personalizada",
      },
      {
        nombre: "Kit de bienvenida",
        img: "/categories/4.png",
        reconocimiento:
          "Un notebook personalizado. Un vaso térmico de 300 ml. personalizado a grabado láser. Bombones ferrero Rocher (3 unidades).",
        presentacion:
          "Caja Kraft decorada con viruta, lazo y tarjeta empresarial",
      },
      {
        nombre: "Regalo de cumpleaños",
        img: "/categories/6.png",
        reconocimiento:
          "Vaso térmico de 300 ml. personalizado con nombre de colaborador o logo empresarial. Un llavero de cuero.",
        presentacion:
          "Caja de pino decorado con viruta, lazo y tarjeta personalizada.",
      },
      {
        nombre: "Día del padre",
        img: "/categories/7.png",
        reconocimiento:
          "“Contamos con alternativas para cada ocasión y presupuesto sin perder la calidad y el estilo”. Llavero de cuero con nombre o logo empresarial grabado a láser",
      },
      {
        nombre: "Aniversario",
        img: "/categories/8.png",
        reconocimiento:
          "Una botella de vino Finca las moras de 375ml. Una copa de vino metálico de color dorado. Bombones ferrero Rocher (3 unidades).",
        presentacion:
          "Caja Kraft decorada con viruta, lazo y tarjeta empresarial.",
      },
      {
        nombre: "Cumpleaños",
        img: "/categories/9.png",
        reconocimiento:
          "Un vaso térmico de 350 ml., Un tarjetero de cuero genuino de dos compartimientos. Una barra de chocolate al 40% de cacao de La ibérica.",
        presentacion:
          "Caja Kraft decorada con viruta, lazo y tarjeta personalizada.",
      },
      {
        nombre: "Día internacional de la Mujer",
        img: "/categories/10.png",
        reconocimiento:
          "Un cepillo de cabello de bambú. Un abanico de bambú. un jabón artesanal de marca Kallma. Una toalla de rostro de medida 30x30cm. Bombones ferrero Rocher por 3 unidades.",
        presentacion:
          "Canasta de paja decorada con flores secas, lazo y tarjeta.",
      },
      {
        nombre: "Día de la madre",
        img: "/categories/11.png",
        reconocimiento:
          "Una taza personalizada que contiene una crema de manos cerezos en flor de la marca Kallma. Un scrunchie de seda. Un bombon ferrero Rocher. Un mini bouquet de flores secas. Una tarjeta personalizada.",
        presentacion: "Taza envuelta en celofán y Bolsa Kraft.",
      },
      {
        nombre: "Kit de bienvenida",
        img: "/categories/13.png",
        reconocimiento:
          "Regalo corporativo/Kit de bienvenida: Un vaso térmico de 400 ml personalizado. Lapicero con logo empresarial en cajita de metal.",
        presentacion:
          "Caja de pino decorada con viruta, lazo y tarjeta personalizada.",
      },
      {
        nombre: "Día del padre",
        img: "/categories/14.png",
        reconocimiento:
          "Set de accesorios para vino con lazo y tarjeta personalizada.",
      },
      {
        nombre: "Cumpleaños",
        img: "/categories/16.png",
        reconocimiento: "llavero de cuero con frase grabada a láser.",
        presentacion: "Cajita decorada con lazo y tarjeta.",
      },
      {
        nombre: "Kit de bienvenida",
        img: "/categories/17.png",
        reconocimiento:
          "Cuaderno de notas personalizado. Set de sorbetes de acero inoxidable en bolsa de tocuyo. Tomatodo de 500ml. Una tableta de chocolate cacaosuyo al 80% de cacao.",
        presentacion:
          "Caja Kraft decorada con viruta, lazo y tarjeta personalizada.",
      },
      {
        nombre: "Día del padre",
        img: "/categories/18.png",
        reconocimiento:
          "Vaso whiskero personalizado. Un mini whisky Jack Daniels. Barra de chocolate de la Ibérica. Un bombón ferrero Rocher. Un ramillete de flores secas.",
        presentacion: "Vaso envuelto en tul negro con tarjeta personalizada.",
      },
      {
        nombre: "Día del padre",
        img: "/categories/19.png",
        reconocimiento:
          "Navaja multiusos personalizada con nombre del colaborador y logo empresarial. ",
        presentacion: "Cajita negra con lazo y tarjeta personalizada.",
      },
      {
        nombre: "Reconocimiento",
        img: "/categories/21.png",
        reconocimiento:
          "Neceser de biocuero para varón. Tomatodo con sensor de temperatura.",
        presentacion:
          "Caja de pino decorada con lazo y tarjeta empresarial personalizada.",
      },
      {
        nombre: "Día de la amistad",
        img: "/categories/23.png",
        reconocimiento:
          "Una cerveza artesanal candelaria de 330 ml. dentro de una bolsa de yute con lazo y tarjeta personalizada.",
      },
    ],
  },
  {
    name: "Merchandising",
    category: [
      {
        nombre: "Lonchera",
        img: "/categories/24.png",
        reconocimiento:
          "Una lonchera de material lona labrada de medida 22x22x17cm, forro interno térmico, asa ajustable y logo bordado. ",
        presentacion: "Bolsa celofán.",
      },
      {
        nombre: "Mochila Mini",
        img: "/categories/25.png",
        reconocimiento:
          "Mochila Mini campera de material lona labrada hecho a medida especial con compartimientos internos y externos y logo bordado.",
      },
      {
        nombre: "Vaso térmico de 400 ml ",
        img: "/categories/26.png",
        reconocimiento: " Vaso térmico de 400 ml con logo grabado a láser.",
        presentacion: "Cajita blanca con tarjeta personalizada.",
      },
      {
        nombre: "Cuy de peluche BCP",
        img: "/categories/27.png",
        reconocimiento:
          "Cuy de peluche con camiseta de terciopelo y logo bordado elaborado de forma muy especial para BCP. ",
      },
    ],
  },
  {
    name: "Regalos personales",
    category: [
      {
        nombre: "Box Cafetero",
        img: "/categories/12.png",
        reconocimiento:
          "Regalos personales/ Box Cafetero: Una cafetera italiana de color negro para dos tazas. Una taza con la frase “Coffee makes everything possible”.  Una bolsa de café tostado molido gourmet Altomayo de 200 gr.  Un alfajor de chocolate Havanna contenido en una bolsita de yute.",
        presentacion:
          "Caja de pino decorada con viruta, lazo y tarjeta con dedicatoria.",
      },
      {
        nombre: "Aniversario",
        img: "/categories/20.png",
        reconocimiento:
          "Regalos personales/ Box cumpleañero: Cafetera italiana para dos tazas en color negro. Vaso térmico de 300 ml. personalizado.",
        presentacion:
          "Caja de pino decorado con viruta, una hoja de eucalipto de accesorio, lazo satinado y una tarjeta con dedicatoria.",
      },
      {
        nombre: "Día del padre",
        img: "/categories/22.png",
        reconocimiento:
          "Un vaso térmico de 300 ml personalizado. Un lapicero de metal en cajita transparente. Una libreta de notas de medida 14x9cm personalizado. Bombones ferrero Rocher (3 unidades). Un bouquet de flores secas.",
        presentacion:
          "Una caja de regalo redonda decorada con viruta, lazo y tarjeta personalizada.",
      },
      {
        nombre: "Cumpleaños",
        img: "/categories/30.png",
        reconocimiento:
          "Llavero de cuero con frase personalizada grabado a láser. Presentación: cajita negra con tarjeta dedicatoria y lazo.",
      },
      {
        nombre: "Box ejecutivo",
        img: "/categories/31.png",
        reconocimiento:
          " Cuaderno de notas. Una taza personalizada con cucharita dorada. Un tarjetero de cuero genuino de un compartimiento. Set de sorbetes de acero inoxidable. Una barra de chocolate premium Cacaosuyo al 40% de cacao.",
        presentacion:
          "Una caja Kraft decorada con viruta y lazo y tarjeta con dedicatoria.",
      },
      {
        nombre: "Momentos especiales",
        img: "/categories/32.png",
        reconocimiento:
          "Un mini espumante Freixenet con un sorbete decorado. Una barra de chocolate premium Cacaosuyo al 40% de cacao. Una vela artesanal en forma de concha de mar.",
        presentacion:
          "Caja Kraft decorada con viruta y lazo y tarjeta con dedicatoria.",
      },
      {
        nombre: "Box cumpleaños",
        img: "/categories/33.png",
        reconocimiento:
          "Un mini espumante Freixenet. Una vela artesanal (ver galería de velas). Un joyero de metal en forma de corazón. Bombones ferrero Rocher por 4 unidades.",
        presentacion:
          "Caja Kraft decorada con viruta y lazo y tarjeta con dedicatoria.",
      },
      {
        nombre: "Kit de cuidado personal",
        img: "/categories/34.png",
        reconocimiento:
          "Un roller de cuarzo. Una vela artesanal (ver galería de velas). Una tabla de chocolate premium cacaosuyo al 40% de cacao. Una lima de uñas de 4 funciones.",
        presentacion:
          "Una caja de regalo Kraft decorada con viruta, lazo y tarjeta con dedicatoria.",
      },
      {
        nombre: "Cartera de punto",
        img: "/categories/36.png",
        reconocimiento:
          "Cartera tejida a mano de asa redonda en color caqui, ideal para viajes de verano, vacaciones y paseos en la playa. Medida 26x40x8cm.",
        presentacion:
          "Caja Kraft decorada con viruta, lazo y tarjeta con dedicatoria.",
      },
      {
        nombre: "Momentos especiales",
        img: "/categories/37.png",
        reconocimiento:
          "Cafetera italiana para dos tazas en color negro con mango de madera. Una taza con diseño temático.",
        presentacion:
          "Una caja de regalo Kraft decorada con viruta, lazo y tarjeta con dedicatoria.",
      },
    ],
  },
  {
    name: "Regalos artesanales",
    category: [
      {
        nombre: " Concha de mar",
        img: "/categories/28.png",
        reconocimiento:
          "Vela artesanal hecho a base de cera de soya, 100% de origen vegetal, ideal para crear regalos especiales. Medida: 8x8cm.",
        presentacion:
          "Cajita Kraft decorado con viruta, lazo y tarjeta personalizada",
      },
      {
        nombre: "Cubo de burbujas",
        img: "/categories/38.png",
        reconocimiento:
          "Vela artesanal hecho a base de cera de soya, 100% de origen vegetal, ideal para crear regalos especiales. Medida: 6x6cm.",
        presentacion:
          "Cajita Kraft decorado con viruta, lazo y tarjeta personalizada.",
      },
      {
        nombre: "Mini cubo de burbujas",
        img: "/categories/39.png",
        reconocimiento:
          " Vela artesanal hecho a base de cera de soya. Perfecto para regalos de agradecimiento en eventos como: bautizo, matrimonio, cumpleaños, …etc. Medida: 3.8x3.8cm.",
        presentacion:
          "Cajita Kraft decorado con viruta, lazo y tarjeta personalizada.",
      },
      {
        nombre: "Peonia",
        img: "/categories/40.png",
        reconocimiento:
          "Peonia: Vela artesanal en forma de peonia hecho a base de cera de soya, ideal para elaborar regalos personalizados. Medida: 8.3cm de diámetro.",
        presentacion:
          "Cajita Kraft decorado con viruta, lazo y tarjeta personalizada. ",
      },
    ],
  },
];
