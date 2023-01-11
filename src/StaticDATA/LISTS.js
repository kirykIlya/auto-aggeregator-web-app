import axios from "axios";

export const REGION = [
  {
    value: 1,
    label: "Беларусь",
  },
  {
    value: 2,
    label: "Москва и Московская область",
  },
  {
    value: 3,
    label: "Санкт-Петербург и Ленинградская область",
  },
  {
    value: 4,
    label: "Краснодар и Краснодарский Край",
  },
  {
    value: 5,
    label: "Екатеринбург и Свердловская Область",
  },
  {
    value: 6,
    label: "Ростов-на-Дону и Ростовская область",
  },
];

export const CHOICECURRENCY = [
  {
    value: 0,
    label: "USD",
  },
  {
    value: 1,
    label: "RUB",
  },
];
export const CHOICETRANSMISSION = [
  {
    value: 0,
    label: "Не важно",
  },
  {
    value: 2,
    label: "Автомат",
  },
  {
    value: 1,
    label: "Механика",
  },
];
export const ENGINETYPE = [
  {
    value: 1,
    label: "Бензин",
  },
  {
    value: 2,
    label: "Дизель",
  },
  {
    value: 3,
    label: "Газ",
  },
  {
    value: 4,
    label: "Бензин(пропан-бутан)",
  },
  {
    value: 5,
    label: "Дизель(гибрид)",
  },
  {
    value: 6,
    label: "Электродвигатель",
  },
];

export const BODYTYPE = [
  {
    value: 1,
    label: "Седан",
  },
  {
    value: 4,
    label: "Хетчбэк",
  },
  {
    value: 3,
    label: "Универсал",
  },
  {
    value: 5,
    label: "Кабриолет",
  },
  {
    value: 2,
    label: "Купе",
  },
  {
    value: 10,
    label: "Внедорожник",
  },
  {
    value: 11,
    label: "Фургон",
  },
  {
    value: 6,
    label: "Минивен",
  },
  {
    value: 7,
    label: "Пикап",
  },
  {
    value: 12,
    label: "Микроавтобус",
  },
  {
    value: 11,
    label: "Лифтбек",
  },
];

export const TYPEOFDRIVE = [
  {
    value: 1,
    label: "Передний",
  },
  {
    value: 2,
    label: "Задний",
  },
  {
    value: 3,
    label: "Полный",
  },
];

export const MILEAGE = setMileage();
function setMileage() {
  let mileage = [];
  for (let i = 10; i <= 300; i += 10) {
    mileage.push({ value: i, label: `до ${i} тыс.` });
  }
  for (let i = 350; i <= 500; i += 50) {
    mileage.push({ value: i, label: `до ${i} тыс.` });
  }
  return mileage;
}

export const SortingOnDate = [
  {
    value: -1,
    label: "Вчера",
  },
  {
    value: 0,
    label: "Сегодня",
  },
  {
    value: 1,
    label: "Завтра",
  },
];

export const SortingOnTime = [
  {
    value: -1,
    label: "За неделю",
  },
  {
    value: 0,
    label: "За месяц",
  },
  {
    value: 1,
    label: "За полгода",
  },
  {
    value: 2,
    label: "За год",
  },
];

export let YEARSBEFORE = [];
export let YEARSAFTER = [];
for (let i = 1970; i < new Date().getFullYear(); i++) {
  YEARSBEFORE.push({ value: Math.random().toFixed(4), label: i });
  YEARSAFTER.push({ value: Math.random().toFixed(4), label: i });
}

export let TRANSMISSION_FROM = [];
export let TRANSMISSION_TO = [];
for (let i = 1; i < 9; i += 0.1) {
  TRANSMISSION_FROM.push({ value: Math.random().toFixed(4), label: i.toFixed(1) });
  TRANSMISSION_TO.push({ value: Math.random().toFixed(4), label: i.toFixed(1) });
}
