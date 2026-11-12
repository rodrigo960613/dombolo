export const CONFIG = {
  phoneIntl: "5585991648313",
  phoneDisplay: "(85) 9 9164-8313",
  instagram: "dombolofortal",
  mapsUrl: "https://maps.app.goo.gl/Eeb6cUWELNmvjFbC7",
  addressLine: "Av. Lineu Machado, 768 · Jóquei Clube, Fortaleza – CE · CEP 60520-102",
  hours: ["Segunda a sexta, 08:00 às 18:00", "Sábado, 08:00 às 17:00"],
};

export const DEFAULT_MESSAGE = "Olá! Quero encomendar um bolo!";

export const waLink = (msg = DEFAULT_MESSAGE) =>
  `https://wa.me/${CONFIG.phoneIntl}?text=${encodeURIComponent(msg)}`;

export const NAV = [
  ["#topo", "Início"],
  ["#diferenciais", "Diferenciais"],
  ["#sabores", "Sabores"],
  ["#loja", "A loja"],
  ["#como-pedir", "Como pedir"],
  ["#local", "Onde estamos"],
];

export const TABS = ["Todos", "Clássicos", "Frutas", "Chocolate"];

export const FLAVORS = [
  {
    "cat": "Clássicos",
    "name": "Bolo de Cenoura",
    "desc": "Massa fofinha e douradinha, daquelas que lembram o café da tarde em casa.",
    "msg": "Olá! Quero encomendar um bolo de cenoura."
  },
  {
    "cat": "Clássicos",
    "name": "Bolo de Fubá",
    "desc": "Textura macia, cheirinho de forno e sabor de interior.",
    "msg": "Olá! Quero encomendar um bolo de fubá."
  },
  {
    "cat": "Clássicos",
    "name": "Bolo de Milho",
    "desc": "Doce na medida, úmido e perfeito com um cafezinho.",
    "msg": "Olá! Quero encomendar um bolo de milho."
  },
  {
    "cat": "Clássicos",
    "name": "Bolo de Macaxeira",
    "desc": "Um sabor bem nordestino, cremoso e cheio de memória afetiva.",
    "msg": "Olá! Quero encomendar um bolo de macaxeira."
  },
  {
    "cat": "Frutas",
    "name": "Bolo de Laranja",
    "desc": "Aroma cítrico e massa leve, ótima para qualquer hora.",
    "msg": "Olá! Quero encomendar um bolo de laranja."
  },
  {
    "cat": "Frutas",
    "name": "Bolo de Coco",
    "desc": "Úmido e macio, com o sabor inconfundível do coco.",
    "msg": "Olá! Quero encomendar um bolo de coco."
  },
  {
    "cat": "Chocolate",
    "name": "Bolo de Chocolate",
    "desc": "Para quem não resiste: intenso, macio e bem chocolatudo.",
    "msg": "Olá! Quero encomendar um bolo de chocolate."
  },
  {
    "cat": "Chocolate",
    "name": "Bolo de Mesclado",
    "desc": "O melhor de dois mundos: baunilha e chocolate em cada fatia.",
    "msg": "Olá! Quero encomendar um bolo de mesclado."
  }
];
