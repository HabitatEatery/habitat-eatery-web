import { MenuItem } from '../types';
import { MenuCategory } from '../constants';

// Extended MenuItem type with new categories
type HabitatMenuItem = Omit<MenuItem, 'category'> & { category: MenuCategory };

// WhatsApp number for orders (matching contactData.ts)
export const WHATSAPP_ORDER_NUMBER = '916235488392';

export const MENU_ITEMS: HabitatMenuItem[] = [
  // ==========================================
  // READY TO COOK
  // ==========================================
  {
    id: 1,
    name: "Battura",
    description: "Fluffy deep-fried bread, perfect with chole.",
    price: "",
    image: "https://www.shutterstock.com/image-photo/chole-bhature-north-indian-food-600nw-2238261205.jpg",
    category: "ready-to-cook",
    featured: true
  },
  {
    id: 2,
    name: "Chappathy",
    description: "Soft whole wheat flatbread, a staple delight.",
    price: "",
    image: "https://media.istockphoto.com/id/516359240/photo/bhendi-masala-or-bhindi-masala-ladies-finger-curry-with-chapati.jpg?s=612x612&w=0&k=20&c=0mGnvNM2lxl-dTTJlhAfVJE5WidxYmmvrvNs1NZUKvs=",
    category: "ready-to-cook",
    featured: true
  },
  {
    id: 3,
    name: "Poori",
    description: "Golden puffed bread served with potato curry.",
    price: "",
    image: "https://media.istockphoto.com/id/1158755219/photo/puri-and-potato-curry.jpg?s=612x612&w=0&k=20&c=z1SnAUjKCLBpfcdghxDVdZYRCMkE9Hf5CUhMqr-uq1s=",
    category: "ready-to-cook",
    featured: true
  },

  // ==========================================
  // READY TO EAT
  // ==========================================
  {
    id: 4,
    name: "Chappathy (Hand Made)",
    description: "Artisan hand-rolled chapati with authentic taste.",
    price: "",
    image: "https://media.istockphoto.com/id/1298650125/photo/homemade-roti-chapati-flatbread.jpg?s=612x612&w=0&k=20&c=C7BH_JgNd4u9L-kYWfPUYVIEIecw5A2deVktAPlTL-g=",
    category: "ready-to-eat",
    featured: true
  },
  {
    id: 5,
    name: "Chappathy (Machine)",
    description: "Perfectly round machine-made chapati.",
    price: "",
    image: "https://www.shutterstock.com/image-photo/hand-moving-towards-fluffy-chapati-600nw-2565528133.jpg",
    category: "ready-to-eat",
    featured: false
  },
  {
    id: 6,
    name: "Coin Porotta (Maidha)",
    description: "Crispy mini layered porotta made with maida.",
    price: "",
    image: "https://5.imimg.com/data5/ANDROID/Default/2022/9/EW/BN/RJ/53595356/product-jpeg.jpg",
    category: "ready-to-eat",
    featured: false
  },
  {
    id: 7,
    name: "Coin Porotta (Wheat)",
    description: "Healthy wheat version of coin porotta.",
    price: "",
    image: "https://site.dgtechsoln.com/wp-content/uploads/2023/09/Coin-Parotta-1.jpeg",
    category: "ready-to-eat",
    featured: false
  },
  {
    id: 8,
    name: "Idaly",
    description: "Soft steamed rice cakes with sambar & chutney.",
    price: "",
    image: "https://media.istockphoto.com/id/638506124/photo/idli-with-coconut-chutney-and-sambhar.jpg?s=612x612&w=0&k=20&c=ze1ngBM0LY4w9aqWx_tGe2vTAr4uf36elveTDZ83fgw=",
    category: "ready-to-eat",
    featured: false
  },
  {
    id: 9,
    name: "Kubbuz",
    description: "Freshly baked Arabic flatbread.",
    price: "",
    image: "https://www.shutterstock.com/image-photo/freshly-baked-arabic-pakistani-flat-600nw-2312443677.jpg",
    category: "ready-to-eat",
    featured: false
  },
  {
    id: 10,
    name: "Nool Porotta",
    description: "Layered string porotta, Kerala's favorite.",
    price: "",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Nool_porotta.jpg/2560px-Nool_porotta.jpg",
    category: "ready-to-eat",
    featured: false
  },
  {
    id: 11,
    name: "Pathiri",
    description: "Thin rice flatbread, pairs well with curry.",
    price: "",
    image: "https://t4.ftcdn.net/jpg/04/06/68/33/360_F_406683325_9g0XCQOcfsT4LBkforr7uwuu1jMiPLeO.jpg",
    category: "ready-to-eat",
    featured: false
  },
  {
    id: 12,
    name: "Porotta (Maidha)",
    description: "Classic layered Kerala porotta.",
    price: "",
    image: "https://t4.ftcdn.net/jpg/16/15/87/75/360_F_1615877555_5rbzWgTbEyT7z4pR63afv77DohaAiq14.jpg",
    category: "ready-to-eat",
    featured: false
  },
  {
    id: 13,
    name: "Velleppam",
    description: "Lacy rice hoppers, perfect for breakfast.",
    price: "",
    image: "https://t3.ftcdn.net/jpg/04/10/55/62/360_F_410556294_Slh36tx7V2UHDRRumg5TvgFp7dwlRoRj.jpg",
    category: "ready-to-eat",
    featured: false
  },

  // ==========================================
  // SNACKS
  // ==========================================
  {
    id: 14,
    name: "Uzhunnu Vada",
    description: "Crispy lentil fritters with coconut chutney.",
    price: "",
    image: "https://img.freepik.com/premium-photo/vada-medu-vadai-with-sambar-chutney-popular-south-indian-snack-breakfast_466689-1590.jpg",
    category: "snacks",
    featured: true
  },
  {
    id: 15,
    name: "Samoosa",
    description: "Crispy triangular pastry with spiced filling.",
    price: "",
    image: "https://t4.ftcdn.net/jpg/08/26/64/99/360_F_826649972_Z9OddFqlDGulPDIRTH7ASdALuyLqYfyM.jpg",
    category: "snacks",
    featured: false
  },
  {
    id: 16,
    name: "Banana Bonda",
    description: "Sweet banana fritters, crispy outside soft inside.",
    price: "",
    image: "https://media.istockphoto.com/id/547508294/photo/indian-snack-mangalore-bajji.jpg?s=612x612&w=0&k=20&c=HKow2vX6uZARnsg7DJoTvQor-OPilhFWYf12Kiv9B1k=",
    category: "snacks",
    featured: false
  },
  {
    id: 17,
    name: "Pazhampori",
    description: "Sweet banana fritters, Kerala's beloved snack.",
    price: "",
    image: "https://t4.ftcdn.net/jpg/03/58/52/69/360_F_358526911_C9N0C5zcKjnImXmWHm9ZmulkFnVvVvuY.jpg",
    category: "snacks",
    featured: true
  },
  {
    id: 18,
    name: "Chicken Samoosa",
    description: "Crispy pastry filled with spiced chicken.",
    price: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPHmg0g1iZ3-HqB9O3z9bpYFPl4JuayYTuOw&s",
    category: "snacks",
    featured: false
  },
  {
    id: 19,
    name: "Chicken Cutlet",
    description: "Crispy breaded chicken patties.",
    price: "",
    image: "https://media.istockphoto.com/id/1334489824/photo/chicken-cutlet-with-tomato-sauce.jpg?s=612x612&w=0&k=20&c=QTqv_JAbGbAVQ68q30167qkzXkeEJe7fJqDy3hdBNNI=",
    category: "snacks",
    featured: false
  },
  {
    id: 20,
    name: "Veg Puffs",
    description: "Flaky pastry with spiced vegetable filling.",
    price: "",
    image: "https://www.thesugarandspice.com/cdn/shop/files/CopyofLSD07524.png?v=1741764906",
    category: "snacks",
    featured: false
  },

  // ==========================================
  // PACKED SNACKS
  // ==========================================
  {
    id: 21,
    name: "Unniyappam",
    description: "Sweet rice fritters with banana and jaggery.",
    price: "",
    image: "https://t4.ftcdn.net/jpg/03/49/79/89/360_F_349798935_lajbW8p2hJ1MXOCFWf7kN6Xk7huZISht.jpg",
    category: "packed-snacks",
    featured: true
  },
  {
    id: 22,
    name: "Coconut Laddu",
    description: "Sweet coconut balls with condensed milk.",
    price: "",
    image: "https://media.istockphoto.com/id/1296786466/photo/stack-of-coconut-ladoo-or-nariyal-laddu-in-an-earthen-bowl-and-coconut-piece.jpg?s=612x612&w=0&k=20&c=X5tM2lmKQXWQhUOpClE_nsoDEARwnLOeZxIS-N7TDio=",
    category: "packed-snacks",
    featured: false
  },
  {
    id: 23,
    name: "Boli",
    description: "Sweet stuffed flatbread from Kerala.",
    price: "",
    image: "https://www.shutterstock.com/image-photo/homemade-kerala-trivandrum-boli-served-600nw-2265140479.jpg",
    category: "packed-snacks",
    featured: false
  },
  {
    id: 24,
    name: "Payasam",
    description: "Traditional Kerala rice pudding dessert.",
    price: "",
    image: "https://t3.ftcdn.net/jpg/03/81/27/74/360_F_381277455_4MZhpUHWG6ZoMSjX8yx0q3wpR3Ykmqxh.jpg",
    category: "packed-snacks",
    featured: false
  },

  // ==========================================
  // OTHERS
  // ==========================================
  {
    id: 25,
    name: "Laddu",
    description: "Traditional Indian sweet balls.",
    price: "",
    image: "https://t4.ftcdn.net/jpg/05/95/86/23/360_F_595862367_Mq2DESdDGSeEyDEvY5swpZsDz8lXQ9DX.jpg",
    category: "others",
    featured: false
  },
  {
    id: 26,
    name: "Jilebi",
    description: "Sweet spirals soaked in sugar syrup.",
    price: "",
    image: "https://t4.ftcdn.net/jpg/09/76/94/83/360_F_976948359_rtVBTuf4BroTySr70mvosOlrA5etCO6v.jpg",
    category: "others",
    featured: true
  },
  {
    id: 27,
    name: "Achappam",
    description: "Rose-shaped Kerala fried cookie.",
    price: "",
    image: "https://media.istockphoto.com/id/1265798309/photo/achappam-rose-cookies-kerala-fried-snacks-sweet-food.jpg?s=612x612&w=0&k=20&c=h2IERmRQNHAA-wvrfaYA53Q_7OYu7vQzsnvKOamJX4I=",
    category: "others",
    featured: false
  },
  {
    id: 28,
    name: "Pappadavada",
    description: "Crispy papadum fritters, Kerala style.",
    price: "",
    image: "https://foodgood.in/wp-content/uploads/2025/06/pappadavada-500x375.jpg",
    category: "others",
    featured: false
  }
];

// Configuration for colors based on index in a list or category
export const CARD_COLORS = ["bg-pop-blue", "bg-pop-pink", "bg-pop-yellow", "bg-pop-cream"];
export const TEXT_COLORS = ["text-white", "text-black", "text-black", "text-black"];