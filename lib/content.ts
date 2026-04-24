import type { Locale } from "@/i18n";

type Localized = Record<Locale, string>;

export type Step = {
  num: string;
  title: Localized;
  body: Localized;
  why: Localized;
  screen: "onboarding" | "new-listing" | "chat-offer" | "rating";
};

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    num: "01",
    title: { en: "Sign in", zh: "登入" },
    body: {
      en: "One tap with Google or Apple. Pick a handle. Pick a home district.",
      zh: "Google 或 Apple 一鍵登入。揀個名,揀個常去嘅區。",
    },
    why: { en: "Bilingual from the welcome screen.", zh: "由歡迎頁開始就雙語。" },
    screen: "onboarding",
  },
  {
    num: "02",
    title: { en: "Post a trade", zh: "發佈交易" },
    body: {
      en: "Pair what you have with what you want. Add cash to balance. Prices auto-pull in HKD.",
      zh: "配對你有嘅卡同想要嘅卡。可以加現金補差價。價錢自動用港幣顯示。",
    },
    why: { en: "Pairs beat posts.", zh: "配對勝於貼文。" },
    screen: "new-listing",
  },
  {
    num: "03",
    title: { en: "Match & chat", zh: "配對傾偈" },
    body: {
      en: "Send structured offers inside chat. Accept, counter, or decline — one tap.",
      zh: "喺傾偈入面發出結構化 offer。接受、還價或拒絕,一鍵搞掂。",
    },
    why: { en: "Trust compounds.", zh: "信任會累積。" },
    screen: "chat-offer",
  },
  {
    num: "04",
    title: { en: "Meet & rate", zh: "見面評分" },
    body: {
      en: "Pick a district, meet in person, trade. Rate the other trader.",
      zh: "揀個區,面對面交收。之後互相評分。",
    },
    why: { en: "Reputation compounds.", zh: "聲譽會累積。" },
    screen: "rating",
  },
];

export type FaqItem = { q: Localized; a: Localized };

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: { en: "When does Binder launch?", zh: "Binder 幾時推出?" },
    a: {
      en: "Beta opens Summer 2026 for Hong Kong collectors. Public launch follows.",
      zh: "2026 年夏季會開放測試版俾香港收藏家。之後會正式公開推出。",
    },
  },
  {
    q: { en: "Is it free?", zh: "要收費嗎?" },
    a: {
      en: "Yes, free at launch. Premium features are on the v2 roadmap.",
      zh: "係,推出時係免費。付費功能喺 v2 路線圖入面。",
    },
  },
  {
    q: { en: "iPhone or Android?", zh: "iPhone 定 Android?" },
    a: {
      en: "iPhone first. Android follows shortly after.",
      zh: "iPhone 先行。Android 緊隨其後。",
    },
  },
  {
    q: { en: "Does Binder support shipping?", zh: "可唔可以寄卡?" },
    a: {
      en: "No — Binder is in-person only by design. Shipping creates scam surface we don't want.",
      zh: "唔可以。Binder 設計上只限面對面交收。寄卡會產生我哋唔想要嘅詐騙風險。",
    },
  },
  {
    q: { en: "What languages is the app in?", zh: "App 有咩語言?" },
    a: {
      en: "English and 繁體中文 from day one. Every string flips — including the tab bar.",
      zh: "由第一天起支援英文同繁體中文。每個字都雙語,連導航列都翻譯。",
    },
  },
];

export const DISTRICTS = [
  "Central",
  "Mong Kok",
  "Sha Tin",
  "Wan Chai",
  "Tsim Sha Tsui",
  "Kwun Tong",
  "Tuen Mun",
  "Tai Po",
];
