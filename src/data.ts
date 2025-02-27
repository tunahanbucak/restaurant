type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

type Products = Product[];

export const featuredProducts: Products = [
  {
    id: 1,
    title: "SİCİLYA",
    desc: "Her lokmada baharatlı pepperoni, jalapeño, kırmızı pul biber ve erimiş mozzarella peyniriyle ateşli bir tat patlaması yaşayın.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Küçük",
        additionalPrice: 0,
      },
      {
        title: "Orta",
        additionalPrice: 4,
      },
      {
        title: "Büyük",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Bacon Deluxe",
    desc: "Dumanlı lezzetleri, ateşte pişirilmiş et köftesi, çıtır bacon, erimiş cheddar peyniri, karamelize soğanlar ve lezzetli BBQ sosuyla keşfedin.",
    img: "/temporary/p2.png",
    price: 29.9,
    options: [
      {
        title: "Küçük",
        additionalPrice: 0,
      },
      {
        title: "Orta",
        additionalPrice: 4,
      },
      {
        title: "Büyük",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "İtalyan usulü ince ve çıtır hamur, ekşi domates sosu, taze mozzarella ve aromatik otlarla zenginleştirilmiş, marullarla, domateslerle ve mayonezle tatlandırılmış bir pizza.",
    img: "/temporary/p3.png",
    price: 24.9,
    options: [
      {
        title: "Küçük",
        additionalPrice: 0,
      },
      {
        title: "Orta",
        additionalPrice: 4,
      },
      {
        title: "Büyük",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Spicy Arrabbiata",
    desc: "Penne makarnası, sarımsak, kırmızı pul biber ve taze fesleğenle hazırlanan ateşli domates sosu ile damağınızda harika bir tat bırakacak bu makarna yemeği.",
    img: "/temporary/p4.png",
    price: 26.9,
    options: [
      {
        title: "Küçük",
        additionalPrice: 0,
      },
      {
        title: "Orta",
        additionalPrice: 4,
      },
      {
        title: "Büyük",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Jalapeño Fiesta",
    desc: "Ateşli bir tat için jalapeño biberi, pepper jack peyniri, baharatlı chipotle mayonez sosu ve tüm klasik malzemelerle lezzetli bir et köftesi sunuyor.",
    img: "/temporary/p5.png",
    price: 29.9,
    options: [
      {
        title: "Küçük",
        additionalPrice: 0,
      },
      {
        title: "Orta",
        additionalPrice: 4,
      },
      {
        title: "Büyük",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Margherita Magic",
    desc: "İnce hamur, tatlı domatesler, taze fesleğen, kremsi mozzarella peyniri ve zeytinyağıyla zenginleştirilmiş klasik bir favori.",
    img: "/temporary/p6.png",
    price: 24.9,
    options: [
      {
        title: "Küçük",
        additionalPrice: 0,
      },
      {
        title: "Orta",
        additionalPrice: 4,
      },
      {
        title: "Büyük",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Garlic Parmesan Linguine",
    desc: "Sarımsak severler için mükemmel bir seçenek, kremalı parmesan sosunda sarımsakla karıştırılmış linguine, doğranmış maydanoz, dolmalık biber ve cherry domateslerle süslenmiş.",
    img: "/temporary/p7.png",
    price: 28.9,
    options: [
      {
        title: "Küçük",
        additionalPrice: 0,
      },
      {
        title: "Orta",
        additionalPrice: 4,
      },
      {
        title: "Büyük",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Mediterranean Delight",
    desc: "Bu Akdeniz esintili yaratımla, zesty feta peyniri, Kalamata zeytinleri, kurutulmuş domatesler ve kekikle damağınızı şenlendirin.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Küçük",
        additionalPrice: 0,
      },
      {
        title: "Orta",
        additionalPrice: 4,
      },
      {
        title: "Büyük",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Hawaiian Teriyaki",
    desc: "Tropik tatları keşfedin: Etli köfte, teriyaki sosuyla tatlandırılmış, ızgara ananas, çıtır bacon, taze marullarla ve tüm klasik malzemelerle hazırlanmış.",
    img: "/temporary/p9.png",
    price: 29.9,
    options: [
      {
        title: "Küçük",
        additionalPrice: 0,
      },
      {
        title: "Orta",
        additionalPrice: 4,
      },
      {
        title: "Büyük",
        additionalPrice: 6,
      },
    ],
  },
];

export const pizzas: Products = [
  {
    id: 1,
    title: "SİCİLYA",
    desc: "Her lokmada baharatlı pepperoni, jalapeño, kırmızı pul biber ve erimiş mozzarella peyniriyle ateşli bir tat patlaması yaşayın.",
    img: "/temporary/p1.png",
    price: 24.9,
    options: [
      {
        title: "Küçük",
        additionalPrice: 0,
      },
      {
        title: "Orta",
        additionalPrice: 4,
      },
      {
        title: "Büyük",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "AKDENİZ LEZZETİ",
    desc: "Akdeniz esintili bu yaratımla, zesty feta peyniri, Kalamata zeytinleri, kurutulmuş domatesler ve kekikle damağınızı şenlendirin.",
    img: "/temporary/p8.png",
    price: 32.9,
    options: [
      {
        title: "Küçük",
        additionalPrice: 0,
      },
      {
        title: "Orta",
        additionalPrice: 4,
      },
      {
        title: "Büyük",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "İtalyan usulü ince ve çıtır hamur, ekşi domates sosu, taze mozzarella ve aromatik otlarla zenginleştirilmiş, marullarla, domateslerle ve mayonezle tatlandırılmış bir pizza.",
    img: "/temporary/p3.png",
    price: 26.9,
    options: [
      {
        title: "Küçük",
        additionalPrice: 0,
      },
      {
        title: "Orta",
        additionalPrice: 4,
      },
      {
        title: "Büyük",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "Taze mozzarella ve aromatik otlarla hazırlanan, ince ve çıtır hamurlu İtalyan usulü pizza.",
    img: "/temporary/p10.png",
    price: 28.9,
    options: [
      {
        title: "Küçük",
        additionalPrice: 0,
      },
      {
        title: "Orta",
        additionalPrice: 4,
      },
      {
        title: "Büyük",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Veggie Supreme",
    desc: "İnce ve çıtır hamur, ekşi domates sosu, taze mozzarella ve aromatik otlarla zenginleştirilmiş, marullarla, domateslerle ve mayonezle tatlandırılmış bir pizza.",
    img: "/temporary/p11.png",
    price: 24.9,
    options: [
      {
        title: "Küçük",
        additionalPrice: 0,
      },
      {
        title: "Orta",
        additionalPrice: 4,
      },
      {
        title: "Büyük",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "DÖRT PEYNİR FANTEZİSİ",
    desc: "Mozzarella, cheddar, provolone ve Parmesan peynirlerinin erimiş karışımıyla saf peynirli bir mutluluk deneyimi yaşayın, zengin ve tatmin edici bir pizza deneyimi sunar.",
    img: "/temporary/p12.png",
    price: 22.9,
    options: [
      {
        title: "Küçük",
        additionalPrice: 0,
      },
      {
        title: "Orta",
        additionalPrice: 4,
      },
      {
        title: "Büyük",
        additionalPrice: 6,
      },
    ],
  },
];
export const singleProduct: Product = {
  id: 1,
  title: "DÖRT PEYNİR FANTEZİSİ",
  desc: "Mozzarella, cheddar, provolone ve Parmesan peynirlerinin erimiş karışımıyla saf peynirli bir mutluluk deneyimi yaşayın, zengin ve tatmin edici bir pizza deneyimi sunar.",
  img: "/temporary/p12.png",
  price: 22.9,
  options: [
    {
      title: "Küçük",
      additionalPrice: 0,
    },
    {
      title: "Orta",
      additionalPrice: 4,
    },
    {
      title: "Büyük",
      additionalPrice: 6,
    },
  ],
};

type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "İTALYAN MAKARNA",
    desc: "Efsanevi İtalyan el yapımı makarna menümüzle mükemmelin tadını çıkarın.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "SULU HAMBURGER",
    desc: "Burger Cenneti: Sulu et köfteleri, cesur tatlar ve bol garnitürlerle dolu.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "PEYNİRLİ PİZZA",
    desc: "Pizza Cenneti: Dayanılmaz dilimler, ağzınızı sulandıran garnitürler ve peynirli mükemmellik.",
    img: "/temporary/m3.png",
    color: "white",
  },
];
