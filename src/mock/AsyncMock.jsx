const products = [
  {
    id: "01",
    name: "LimaLimon Pie",
    description:
      "Tarta cítrica con crema de limón natural y base crocante. Refrescante e intensa.",
    stock: 10,
    price: 17000,
    category: "tartas",
    img: "/tartaLemonPie.jpeg",
  },
  {
    id: "02",
    name: "Brownie",
    description: "Masa brownie semi amarga, dulce de leche y merengue",
    stock: 8,
    price: 20000,
    category: "tartas",
    img: "/tartaBrownie.jpeg",
  },
  {
    id: "03",
    name: "Tarta Coco",
    description: "Coco y dulce de leche",
    stock: 8,
    price: 17000,
    category: "tartas",
    img: "/tartaCoco.jpeg",
  },
  {
    id: "04",
    name: "Pastafrola",
    description: "Clásico infaltable",
    stock: 8,
    price: 17000,
    category: "tartas",
    img: "/tartaPastafrola.jpeg",
  },
  {
    id: "05",
    name: "Torta Cumpleaños",
    description: "Clasica torta 3 capas con dulce de leche",
    stock: 12,
    price: 22000,
    category: "tortas",
    img: "/tortaCumpleaños.jpeg",
  },
  {
    id: "06",
    name: "Torta Crema",
    description:
      "Bizcochuelo suave relleno y cubierto con crema fresca. Delicada y liviana",
    stock: 12,
    price: 22000,
    category: "tortas",
    img: "/tortaCrema.jpeg",
  },
  {
    id: "07",
    name: "Torta Selva Negra",
    description:
      "Bizcochuelo de chocolate, crema chantilly y virutas de chocolate semiamargo.",
    stock: 12,
    price: 22000,
    category: "tortas",
    img: "/tortaSelvaNegra.jpeg",
  },
  {
    id: "08",
    name: "Sinfonia de Moras",
    description:
      "Base de bizcocho ligero, mousse de frutos rojos acompañado de arandanos, frutillas y  glaseado",
    stock: 12,
    price: 24000,
    category: "nuevos",
    img: "/novedadesMoras.jpeg",
  },
  {
    id: "09",
    name: "Brisas del Tropico",
    description:
      "Base de bizcocho ligero, mousse de lima y rodajas de mango, arandonos y frambuesas",
    stock: 12,
    price: 24000,
    category: "nuevos",
    img: "/novedadesTropico.jpeg",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(products), 1000);
  });
};

export const getOneProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const prod = products.find((p) => p.id === id);
      resolve(prod);
    }, 1000);
  });
};
