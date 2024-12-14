import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      freeShipping: "Free shipping on all orders over $50",
      faqs: "FAQs",
      needHelp: "Need Help?",
      categories: "All Categories",
      home: "Home",
      shop: "Shop",
      product: "Product",
      pages: "Pages",
      about: "About",
      contact: "Contact",
      searchPlaceholder: "Search here...",
      wingChair: "Wing Chair",
      woodenChair: "Wooden Chair",
      deskChair: "Desk Chair",
      parkChair: "Park Chair",
      devanChair: "Devan Chair",
      bed: "Bed",
    },
  },
  uz: {
    translation: {
      freeShipping: "Barcha buyurtmalar uchun bepul yetkazib berish",
      faqs: "Savollar",
      needHelp: "Yordam kerakmi?",
      categories: "Barcha Kategoriyalar",
      home: "Bosh sahifa",
      shop: "Do'kon",
      product: "Mahsulot",
      pages: "Sahifalar",
      about: "Biz haqimizda",
      contact: "Bog'lanish",
      searchPlaceholder: "Qidirish...",
      wingChair: "Kreslo",
      woodenChair: "Yog'och Kreslo",
      deskChair: "Ish stoli kreslosi",
      parkChair: "Bog' kreslosi",
      devanChair: "Devan",
      bed: "Krovat",
    },
  },
  ru: {
    translation: {
      freeShipping: "Бесплатная доставка на все заказы свыше $50",
      faqs: "Часто задаваемые вопросы",
      needHelp: "Нужна помощь?",
      categories: "Все категории",
      home: "Главная",
      shop: "Магазин",
      product: "Продукт",
      pages: "Страницы",
      about: "О нас",
      contact: "Контакт",
      searchPlaceholder: "Поиск...",
      wingChair: "Кресло с крыльями",
      woodenChair: "Деревянное кресло",
      deskChair: "Кресло для стола",
      parkChair: "Парковое кресло",
      devanChair: "Диван",
      bed: "Кровать",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
