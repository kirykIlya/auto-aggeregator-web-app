import axios from "axios";

export const REGION = [
  {
    id: 1,
    value: "Беларусь",
  },
  {
    id: 2,
    value: "Москва и Московская область",
  },
  {
    id: 3,
    value: "Санкт-Петербург и Ленинградская область",
  },
  {
    id: 4,
    value: "Краснодар и Краснодарский Край",
  },
  {
    id: 5,
    value: "Екатеринбург и Свердловская Область",
  },
  {
    id: 6,
    value: "Ростов-на-Дону и Ростовская область",
  },
];

export const CHOICECURRENCY = [
  {
    id: 0,
    value: "USD",
  },
  {
    id: 1,
    value: "RUB",
  },
];
export const CHOICETRANSMISSION = [
  {
    id: 0,
    value: "Не важно",
  },
  {
    id: 2,
    value: "Автомат",
  },
  {
    id: 1,
    value: "Механика",
  },
];
export const ENGINETYPE = [
  {
    id: 1,
    value: "Бензин",
  },
  {
    id: 2,
    value: "Дизель",
  },
  {
    id: 3,
    value: "Газ",
  },
  {
    id: 4,
    value: "Бензин(пропан-бутан)",
  },
  {
    id: 5,
    value: "Дизель(гибрид)",
  },
  {
    id: 6,
    value: "Электродвигатель",
  },
];

export const BODYTYPE = [
  {
    id: 1,
    value: "Седан",
  },
  {
    id: 4,
    value: "Хетчбэк",
  },
  {
    id: 3,
    value: "Универсал",
  },
  {
    id: 5,
    value: "Кабриолет",
  },
  {
    id: 2,
    value: "Купе",
  },
  {
    id: 10,
    value: "Внедорожник",
  },
  {
    id: 11,
    value: "Фургон",
  },
  {
    id: 6,
    value: "Минивен",
  },
  {
    id: 7,
    value: "Пикап",
  },
  {
    id: 12,
    value: "Микроавтобус",
  },
  {
    id: 11,
    value: "Лифтбек",
  },
];

export const TYPEOFDRIVE = [
  {
    id: 1,
    value: "Передний",
  },
  {
    id: 2,
    value: "Задний",
  },
  {
    id: 3,
    value: "Полный",
  },
];

export const MILEAGE = setMileage();
function setMileage() {
  let mileage = [];
  for (let i = 10; i <= 300; i += 10) {
    mileage.push({ id: i, value: `до ${i} тыс.` });
  }
  for (let i = 350; i <= 500; i += 50) {
    mileage.push({ id: i, value: `до ${i} тыс.` });
  }
  return mileage;
}

export const SortingOnDate = [
  {
    id: -1,
    value: "Вчера",
  },
  {
    id: 0,
    value: "Сегодня",
  },
  {
    id: 1,
    value: "Завтра",
  },
];

export const SortingOnTime = [
  {
    id: -1,
    value: "За неделю",
  },
  {
    id: 0,
    value: "За месяц",
  },
  {
    id: 1,
    value: "За полгода",
  },
  {
    id: 2,
    value: "За год",
  },
];

export let YEARSBEFORE = [];
export let YEARSAFTER = [];
for (let i = 1970; i < new Date().getFullYear(); i++) {
  YEARSBEFORE.push({ id: Math.random().toFixed(4), value: i });
  YEARSAFTER.push({ id: Math.random().toFixed(4), value: i });
}

export let TRANSMISSION_FROM = [];
export let TRANSMISSION_TO = [];
for (let i = 1; i < 9; i += 0.1) {
  TRANSMISSION_FROM.push({ id: Math.random().toFixed(4), value: i.toFixed(1) });
  TRANSMISSION_TO.push({ id: Math.random().toFixed(4), value: i.toFixed(1) });
}
