import type { Locale } from "@/i18n";

type Localized = Record<Locale, string>;

/** The four real app screens, shipped in both languages (see public/screens). */
export type ScreenName = "browse" | "listing" | "offer" | "chat";

export type Step = {
  num: string;
  title: Localized;
  body: Localized;
  screen: ScreenName;
  alt: Localized;
};

export const HOW_IT_WORKS_STEPS: Step[] = [
  {
    num: "01",
    title: { en: "Find a pair", zh: "搵配對" },
    body: {
      en: "Every listing shows a have and a want, so you see the whole trade at a glance.",
      zh: "每個帖都有「我有」同「我想要」，成單交易一眼睇晒。",
    },
    screen: "browse",
    alt: {
      en: "The Bindy browse feed, each listing pairing a card offered with a card wanted",
      zh: "Bindy 瀏覽頁，每個帖都配對「我有」同「我想要」嘅卡",
    },
  },
  {
    num: "02",
    title: { en: "Open the listing", zh: "打開帖文" },
    body: {
      en: "Condition, grade, language and any cash to balance — all on one screen.",
      zh: "品相、評級、語言、補幾多現金，全部喺同一頁。",
    },
    screen: "listing",
    alt: {
      en: "A Bindy listing showing the card offered, the card wanted and the cash to balance",
      zh: "Bindy 帖文詳情，顯示提供嘅卡、想要嘅卡同補水金額",
    },
  },
  {
    num: "03",
    title: { en: "Send an offer", zh: "出 offer" },
    body: {
      en: "Pre-filled from the listing. Swap a card in or out, add cash, send.",
      zh: "由帖文預先填好。換張卡、加現金，撳一下就send出去。",
    },
    screen: "offer",
    alt: {
      en: "The Bindy offer screen, pre-filled with both sides of the trade",
      zh: "Bindy 出 offer 畫面，已經預先填好交易雙方嘅卡",
    },
  },
  {
    num: "04",
    title: { en: "Chat, meet, rate", zh: "傾偈、見面、評分" },
    body: {
      en: "Agree in chat, meet face to face in Hong Kong, then rate each other.",
      zh: "喺對話傾掂，喺香港面交，完成之後互相評分。",
    },
    screen: "chat",
    alt: {
      en: "A Bindy chat where the two traders agree the meet-up",
      zh: "Bindy 對話，兩位玩家傾掂面交安排",
    },
  },
];

export type Feature = {
  key: string;
  title: Localized;
  body: Localized;
  scene: string;
  alt: Localized;
};

export const FEATURES: Feature[] = [
  {
    key: "pairs",
    title: { en: "Every post is a pair", zh: "每個帖都係一對" },
    body: {
      en: "Forcing a want surfaces trades a one-sided feed never shows.",
      zh: "要求填「我想要」，就會撈出單向貼文永遠見唔到嘅交易。",
    },
    scene: "/scenes/binder.webp",
    alt: {
      en: "A miniature binder of sleeved cards open on a shop counter, stock shelves behind it",
      zh: "微縮場景：卡簿喺舖頭櫃枱上打開，後面係一排排貨架",
    },
  },
  {
    key: "offers",
    title: { en: "Offers, not haggling", zh: "出 offer，唔使講價" },
    body: {
      en: "Structured offers inside chat: cards on both sides, cash to balance, one tap to accept.",
      zh: "喺對話入面出結構化 offer：雙方嘅卡、補水金額，一撳就接受。",
    },
    scene: "/scenes/table.webp",
    alt: {
      en: "Two miniature traders comparing cards over milk tea at a cha chaan teng table",
      zh: "微縮場景：兩個人喺茶餐廳枱前一邊飲奶茶一邊對卡",
    },
  },
  {
    key: "meet",
    title: { en: "Meet in person", zh: "面對面交收" },
    body: {
      en: "Trades finish face to face, the way Hong Kong collectors already do it.",
      zh: "交易最後面對面完成，就好似香港玩家一直以嚟咁做。",
    },
    scene: "/scenes/meet.webp",
    alt: {
      en: "Two miniature traders shaking hands over a card beside a Hong Kong tram",
      zh: "微縮場景：兩個人喺電車旁邊握手交卡",
    },
  },
];

export type FaqItem = { q: Localized; a: Localized };

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: { en: "Is Bindy out?", zh: "Bindy 推出咗未？" },
    a: {
      en: "Yes — Bindy is free on the App Store now. Android is coming soon; this page turns into a Play Store button the day it lands.",
      zh: "推出咗。而家可以喺 App Store 免費下載。Android 版快將推出，一上架呢度就會變成 Google Play 按鈕。",
    },
  },
  {
    q: { en: "Is it free?", zh: "要收費嗎？" },
    a: {
      en: "Yes. Posting, matching, offers and chat are all free.",
      zh: "免費。發帖、配對、出 offer 同傾偈都唔收錢。",
    },
  },
  {
    q: { en: "Does Bindy support shipping?", zh: "可唔可以寄卡？" },
    a: {
      en: "No — Bindy is in-person only by design. Shipping creates scam surface we don't want.",
      zh: "唔可以。Bindy 設計上只限面交，寄卡會帶嚟我哋唔想要嘅詐騙風險。",
    },
  },
  {
    q: { en: "How do I stay safe at a meet-up?", zh: "面交點先安全？" },
    a: {
      en: "Meet somewhere public and busy — a mall, a card shop, an MTR concourse. Check condition before you hand anything over, and rate each other afterwards so the next trader knows.",
      zh: "約喺人多嘅公眾地方：商場、卡舖、港鐵大堂。交收前檢查清楚品相，完成後記得互相評分，等下一位玩家知道你嘅紀錄。",
    },
  },
  {
    q: { en: "What languages is the app in?", zh: "App 有咩語言？" },
    a: {
      en: "English and 繁體中文 from day one. Every string flips — including the tab bar.",
      zh: "由第一日起支援英文同繁體中文。每個字都會轉，連底部導航列都係。",
    },
  },
  {
    q: { en: "Who makes Bindy?", zh: "邊個做 Bindy？" },
    a: {
      en: "Near Mint, a Hong Kong team building digital products. Bindy is the first one out.",
      zh: "Near Mint，一隊喺香港做數碼產品嘅團隊。Bindy 係我哋第一個推出嘅產品。",
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

/** Screens ship as -en / -tc files; zh maps to the Traditional Chinese set. */
export function screenSrc(screen: ScreenName, locale: Locale) {
  return `/screens/${screen}-${locale === "zh" ? "tc" : "en"}.webp`;
}

export type { Localized };
