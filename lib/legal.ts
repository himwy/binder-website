// Public legal documents for Binder (binderhk.com). Mirrors the in-app copy
// (Binder app lib/legal.ts) in English + Traditional Chinese. Hosted publicly so
// the App Store / Play Console have a reachable Privacy Policy + Terms URL.
//
// Recommended (not required): have HK counsel review the substantive clauses
// (limitation of liability + PDPO handling) before public launch. The TC is a
// convenience translation matching the EN, not a certified one.

export type LegalSection = { heading?: string; text: string };
export type LegalDoc = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};
export type LegalKind = "terms" | "privacy";

const COMPANY = "Near Mint";
const APP = "Binder";
const UPDATED = "28 July 2026";
const PRIVACY_UPDATED = "4 August 2026";
const UPDATED_TC_DOC = "2026年7月28日";
const PRIVACY_UPDATED_TC = "2026年8月4日";

const CONTACT = "contact@nearmint.tech";

const EN: Record<LegalKind, LegalDoc> = {
  terms: {
    title: "Terms of Service",
    updated: UPDATED,
    intro:
      `These Terms of Service ("Terms") govern your use of the ${APP} mobile application and related services (the "Service"), operated by ${COMPANY} ("we", "us", "our"). By creating an account or using the Service, you agree to these Terms. If you do not agree, do not use the Service.`,
    sections: [
      {
        heading: "1. The Service is a platform only",
        text:
          `${APP} is a venue that lets users discover each other and arrange trades of trading cards and related items. ${COMPANY} is NOT a party to any trade, sale, exchange, or other transaction between users. We do not buy, sell, own, store, ship, escrow, authenticate, grade, value, inspect, or guarantee any item, and we do not process payments between users. All transactions are arranged and completed solely between users, at their own risk and discretion.`,
      },
      {
        heading: "2. Eligibility",
        text:
          "You must be at least 13 years old to use the Service. If you are under 18, you may use the Service only with the consent of a parent or legal guardian who accepts these Terms on your behalf, and you agree to complete any in-person trades with a responsible adult present. By using the Service you represent that you meet these requirements. The Service is intended for users in Hong Kong; you are responsible for compliance with any laws that apply to you.",
      },
      {
        heading: "3. Your account",
        text:
          "You are responsible for your account, your login credentials, and all activity under your account. Provide accurate information and keep it up to date. Notify us promptly of any unauthorised use. We may refuse, suspend, or terminate accounts at our discretion, including for breach of these Terms.",
      },
      {
        heading: "4. User conduct",
        text:
          "You agree not to: post false, misleading, or counterfeit listings; sell stolen, illegal, or prohibited items; harass, threaten, defraud, or impersonate others; post unlawful, infringing, or harmful content; circumvent fees or security; scrape, disrupt, or misuse the Service; or use the Service for any unlawful purpose. You are solely responsible for your listings, messages, and conduct.",
      },
      {
        heading: "5. Trades between users",
        text:
          "Any agreement to trade is strictly between the users involved. You are responsible for verifying the identity of the other party, the authenticity, condition, grading, ownership, and value of any item, and for arranging a safe meeting or shipping method. We strongly recommend meeting in safe, public places and inspecting items before completing a trade. We are not responsible for, and disclaim all liability arising from, any trade, dispute, loss, theft, fraud, counterfeit, injury, or damage between users. See also the Trade Disclaimer.",
      },
      {
        heading: "6. User content",
        text:
          "You retain ownership of the content you submit (listings, photos, messages, profile information). You grant us a non-exclusive, worldwide, royalty-free licence to host, store, display, and distribute that content as needed to operate and improve the Service. You represent that you have the rights to the content you submit and that it does not infringe any third party rights. We have zero tolerance for objectionable content and abusive behaviour. You can report content or users in the app and block abusive users; we aim to review reports within 24 hours and will remove violating content and may suspend or terminate the accounts of offending users.",
      },
      {
        heading: "7. Third-party services",
        text:
          "The Service relies on third parties (including authentication, hosting/backend, and card data providers). We are not responsible for third-party services, and your use of them may be subject to their own terms. Card names, images, and data are provided for reference only and may be inaccurate or incomplete.",
      },
      {
        heading: "8. Disclaimers",
        text:
          'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, OR AVAILABILITY. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT ANY USER, LISTING, ITEM, OR TRADE IS GENUINE, SAFE, OR LAWFUL.',
      },
      {
        heading: "9. Limitation of liability",
        text:
          `TO THE MAXIMUM EXTENT PERMITTED BY LAW, ${COMPANY}, ITS DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, DATA, GOODWILL, ITEMS, OR VALUE, ARISING FROM OR RELATING TO YOUR USE OF THE SERVICE OR ANY TRADE OR INTERACTION BETWEEN USERS, WHETHER BASED IN CONTRACT, TORT, OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY. OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIM RELATING TO THE SERVICE WILL NOT EXCEED HKD 100. Some jurisdictions do not allow certain limitations; in that case, our liability is limited to the smallest amount permitted by law.`,
      },
      {
        heading: "10. Indemnification",
        text:
          `You agree to indemnify and hold harmless ${COMPANY} from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Service, your content, your trades or interactions with other users, or your breach of these Terms.`,
      },
      {
        heading: "11. Suspension and termination",
        text:
          "We may modify, suspend, or discontinue the Service (in whole or part) at any time. We may suspend or terminate your access at any time, with or without notice, including for breach of these Terms. You may stop using the Service and delete your account at any time.",
      },
      {
        heading: "12. Changes to these Terms",
        text:
          "We may update these Terms from time to time. Material changes will be notified through the Service or by other reasonable means. Continued use after changes take effect constitutes acceptance.",
      },
      {
        heading: "13. Governing law",
        text:
          "These Terms are governed by the laws of the Hong Kong Special Administrative Region, and you submit to the exclusive jurisdiction of the Hong Kong courts.",
      },
      {
        heading: "14. Contact",
        text: `${COMPANY} — ${CONTACT}`,
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    updated: PRIVACY_UPDATED,
    intro:
      `This Privacy Policy explains how ${COMPANY} ("we", "us") collects, uses, and protects your personal data when you use ${APP} (the "Service"). We handle personal data in accordance with the Hong Kong Personal Data (Privacy) Ordinance (PDPO). By using the Service you consent to this Policy.`,
    sections: [
      {
        heading: "1. Data we collect",
        text:
          "Account data from your sign-in provider (such as your name, email address, and profile photo). Profile data you provide (display name, @handle, bio, avatar). Content you create (listings, card selections, photos, messages, ratings, reports). A push notification token for your device, if you allow notifications. Limited technical data needed to operate the app and keep it reliable, including basic device/log information and crash and performance diagnostics (such as error reports, device model, OS version, and app version). We do not collect payment card details — we do not process payments.",
      },
      {
        heading: "2. How we use your data",
        text:
          "To create and operate your account; to display your profile, listings, and messages to other users as part of the Service; to enable trading, chat, and ratings; to maintain safety and prevent abuse; to respond to reports and support requests; and to improve the Service. We use your data only as needed to provide and protect the Service.",
      },
      {
        heading: "3. What others can see",
        text:
          "Your @handle, display name, avatar, bio, ratings, and active listings are visible to other users. Messages are visible to the participants of a conversation. Do not share sensitive personal information you do not want others to see.",
      },
      {
        heading: "4. Service providers",
        text:
          "We use trusted third-party providers to run the Service. Each one receives only what it needs:\n\n• Cloud backend and hosting (Appwrite Cloud, servers in Singapore) — stores your account, profile, listings, photos, messages, ratings and reports on our behalf.\n\n• Sign-in providers (Google and Apple) — you authenticate with them and they tell us your name and email address. We do not send them your listings or messages.\n\n• Push notifications (Expo, operated by 650 Industries, servers in the United States, and then Apple's Push Notification service) — when another trader messages you or sends you an offer, we send Expo your device's push token, the sender's display name, and a short preview of the notification so it can appear on your lock screen. For a text message that preview contains up to the first 200 characters of the message itself (after our automatic link/contact scrub); for a photo or an offer it is only a placeholder such as \"Photo\" or \"offer\". Message content sent this way therefore leaves Hong Kong. If you do not want this, turn Binder notifications off in your device settings — the Service works without them and no preview is sent.\n\n• Trading-card data (Scrydex, servers outside Hong Kong) — receives only the search text and card identifiers used to look up card information. It never receives your account, name, listings or messages.\n\n• Crash reporting and performance monitoring (Sentry, servers in the United States) — receives diagnostic data such as error reports, device model, OS version and app version when something goes wrong. We keep personal identifiers out of these reports.\n\nThese providers process data on our instructions and/or under their own privacy terms. We do not sell your personal data.",
      },
      {
        heading: "5. Data retention",
        text:
          "We keep your personal data for as long as your account is active or as needed to provide the Service, comply with legal obligations, resolve disputes, and enforce our agreements. When you delete your account, we delete or anonymise your personal data within a reasonable period, except where retention is required by law.",
      },
      {
        heading: "6. Your rights",
        text:
          "Under the PDPO you may request access to, and correction of, your personal data, and you may withdraw consent or ask us to delete your data. You can edit your profile in-app, delete your account in Settings, or contact us to exercise your rights. We may need to verify your identity before acting on a request.",
      },
      {
        heading: "7. Security",
        text:
          "We use reasonable technical and organisational measures to protect your data, including access controls on stored records. No system is perfectly secure; we cannot guarantee absolute security, and you use the Service at your own risk.",
      },
      {
        heading: "8. Children",
        text:
          "The Service is for users 13 and older; users under 18 require the consent of a parent or legal guardian. We do not knowingly collect data from anyone under 13. If you believe a child under 13 has provided us data, contact us and we will remove it.",
      },
      {
        heading: "9. International transfers",
        text:
          "Your data is stored and processed on servers located outside Hong Kong by the service providers named in section 4. In particular: your account and content (including messages) are stored in Singapore; notification previews — which can include the first part of a message you send or receive — and crash diagnostics are processed in the United States; and card-search terms are sent outside Hong Kong. Where this happens, we take reasonable steps so your data remains protected consistent with this Policy.",
      },
      {
        heading: "10. Changes",
        text:
          "We may update this Policy from time to time. Material changes will be notified through the Service or by other reasonable means.",
      },
      {
        heading: "11. Contact",
        text: `${COMPANY} — ${CONTACT}`,
      },
    ],
  },
};

const ZH: Record<LegalKind, LegalDoc> = {
  terms: {
    title: "服務條款",
    updated: UPDATED_TC_DOC,
    intro:
      `本《服務條款》（「本條款」）規管閣下使用由${COMPANY}（「我們」）營運的${APP}手機應用程式及相關服務（「本服務」）。閣下建立帳戶或使用本服務，即表示同意本條款。如不同意，請勿使用本服務。`,
    sections: [
      {
        heading: "1. 本服務僅為平台",
        text:
          `${APP}是一個讓用戶互相發現並自行安排交易卡牌及相關物品的平台。${COMPANY}並非用戶之間任何交易、買賣、交換或其他交易的一方。我們不會購買、出售、擁有、儲存、運送、代管、鑑定、評級、估值、檢查或保證任何物品，亦不會處理用戶之間的付款。所有交易均由用戶自行安排及完成，一切風險及後果由用戶自行承擔。`,
      },
      {
        heading: "2. 使用資格",
        text:
          "閣下必須年滿13歲方可使用本服務。如閣下未滿18歲，只可在父母或法定監護人代表閣下同意本條款的情況下使用本服務，並須在有負責任的成年人在場下完成任何實體交易。使用本服務即表示閣下聲明符合上述條件。本服務主要供香港用戶使用；閣下須自行遵守適用於閣下的所有法律。",
      },
      {
        heading: "3. 閣下的帳戶",
        text:
          "閣下須對其帳戶、登入憑證及帳戶下的所有活動負責。請提供準確資料並保持更新，並在發現未經授權使用時盡快通知我們。我們可自行決定拒絕、暫停或終止帳戶，包括因違反本條款而作出的處理。",
      },
      {
        heading: "4. 用戶行為",
        text:
          "閣下同意不會：發布虛假、誤導或偽冒的刊登資訊；出售偷竊、非法或違禁物品；騷擾、威嚇、欺詐或冒充他人；發布違法、侵權或有害內容；規避收費或安全措施；擷取資料、干擾或濫用本服務；或將本服務用於任何非法用途。閣下須對其刊登內容、訊息及行為負全部責任。",
      },
      {
        heading: "5. 用戶之間的交易",
        text:
          "任何交易協議純屬相關用戶之間的事宜。閣下須自行核實對方身分、物品的真偽、狀況、評級、擁有權及價值，並自行安排安全的會面或運送方式。我們強烈建議在安全、公開的地點會面，並在完成交易前親自檢查物品。對於用戶之間發生的任何交易、糾紛、損失、盜竊、欺詐、偽冒、傷害或損害，我們概不負責，亦不承擔任何法律責任。另請參閱《交易免責聲明》。",
      },
      {
        heading: "6. 用戶內容",
        text:
          "閣下提交的內容（刊登資訊、相片、訊息、個人資料）的擁有權仍歸閣下所有。閣下授予我們一項非獨家、全球性、免版稅的許可，讓我們可為營運及改善本服務之需要，寄存、儲存、展示及發佈該等內容。閣下聲明其對所提交的內容擁有相關權利，且該等內容不會侵犯任何第三方權利。我們對令人反感的內容及濫用行為採取零容忍政策。閣下可於應用程式內舉報內容或用戶，並封鎖濫用的用戶；我們的目標是在24小時內審核舉報，移除違規內容，並可暫停或終止違規用戶的帳戶。",
      },
      {
        heading: "7. 第三方服務",
        text:
          "本服務依賴第三方服務（包括身分驗證、主機/後台及卡牌資料供應商）。我們對第三方服務概不負責，閣下使用該等服務須受其自身條款約束。卡牌名稱、圖片及資料僅供參考，可能有誤或不完整。",
      },
      {
        heading: "8. 免責聲明",
        text:
          '本服務按「現狀」及「現有」基礎提供，不附帶任何明示或默示的保證，包括對適銷性、特定用途適用性、不侵權、準確性或可用性的保證。我們不保證本服務不會中斷、絕對安全或沒有錯誤，亦不保證任何用戶、刊登資訊、物品或交易是真實、安全或合法的。',
      },
      {
        heading: "9. 責任限制",
        text:
          `在法律允許的最大範圍內，${COMPANY}及其董事、僱員及代理人概不對因閣下使用本服務或用戶之間任何交易或互動而引致或有關的任何間接、附帶、特別、後果性或懲罰性損害，或任何利潤、資料、商譽、物品或價值的損失負責，不論其法律基礎為合約、侵權或其他，即使我們已被告知有關可能性亦然。我們就任何與本服務有關的申索所承擔的總累計責任，不會超過港幣100元。若若干司法管轄區不容許上述限制，則我們的責任將限於法律所容許的最低限額。`,
      },
      {
        heading: "10. 彌償",
        text:
          `閣下同意就因閣下使用本服務、閣下的內容、閣下與其他用戶的交易或互動，或閣下違反本條款而引致的任何申索、損害、損失、責任及開支（包括律師費），彌償及使${COMPANY}免受損害。`,
      },
      {
        heading: "11. 暫停及終止",
        text:
          "我們可隨時修改、暫停或終止本服務（全部或部分）。我們可隨時暫停或終止閣下的使用權限，不論有否事先通知，包括因違反本條款而作出的處理。閣下可隨時停止使用本服務並刪除帳戶。",
      },
      {
        heading: "12. 本條款的修改",
        text:
          "我們可不時更新本條款。重大變更將透過本服務或其他合理方式通知。有關變更生效後，閣下繼續使用本服務即視為接受該等變更。",
      },
      {
        heading: "13. 適用法律",
        text:
          "本條款受香港特別行政區法律管轄，閣下同意接受香港法院的專屬管轄權。",
      },
      {
        heading: "14. 聯絡我們",
        text: `${COMPANY} — ${CONTACT}`,
      },
    ],
  },
  privacy: {
    title: "私隱政策",
    updated: PRIVACY_UPDATED_TC,
    intro:
      `本《私隱政策》說明${COMPANY}（「我們」）在閣下使用${APP}（「本服務」）時，如何收集、使用及保護閣下的個人資料。我們按照香港《個人資料（私隱）條例》（PDPO）處理個人資料。閣下使用本服務即表示同意本政策。`,
    sections: [
      {
        heading: "1. 我們收集的資料",
        text:
          "來自閣下登入服務供應商的帳戶資料（例如姓名、電郵地址及個人頭像）。閣下提供的個人資料（顯示名稱、@帳號、簡介、頭像）。閣下建立的內容（刊登資訊、卡牌選擇、相片、訊息、評分、舉報）。如閣下允許通知，則包括閣下裝置的推播通知權杖。營運應用程式及維持其穩定所需的有限技術資料，包括基本裝置/日誌資訊，以及崩潰及效能診斷資料（例如錯誤報告、裝置型號、系統版本及應用程式版本）。我們不會收集付款卡資料——我們不處理付款。",
      },
      {
        heading: "2. 我們如何使用閣下的資料",
        text:
          "用以建立及營運閣下的帳戶；向其他用戶展示閣下的個人資料、刊登資訊及訊息，作為本服務的一部分；促成交易、聊天及評分功能；維護安全及防止濫用；回應舉報及支援請求；以及改善本服務。我們只會在提供及保護本服務所需的範圍內使用閣下的資料。",
      },
      {
        heading: "3. 其他人可看到的資料",
        text:
          "閣下的@帳號、顯示名稱、頭像、簡介、評分及有效刊登資訊，其他用戶均可看到。訊息只有對話參與者可看到。請勿分享閣下不希望他人看到的敏感個人資料。",
      },
      {
        heading: "4. 服務供應商",
        text:
          "我們使用值得信賴的第三方供應商營運本服務。每個供應商只會取得其所需的資料：\n\n• 雲端後台及主機（Appwrite Cloud，伺服器位於新加坡）——代我們儲存閣下的帳戶、個人資料、刊登資訊、相片、訊息、評分及舉報。\n\n• 登入服務供應商（Google 及 Apple）——閣下透過它們驗證身分，它們會向我們提供閣下的姓名及電郵地址。我們不會向它們傳送閣下的刊登資訊或訊息。\n\n• 推播通知（Expo，由 650 Industries 營運，伺服器位於美國，其後經 Apple 推播通知服務送達）——當其他交易者向閣下發送訊息或出價時，我們會將閣下裝置的推播權杖、發送者的顯示名稱，以及一段簡短的通知預覽傳送給 Expo，以便在閣下的鎖定畫面顯示。文字訊息的預覽會包含該訊息本身的首 200 個字元（已經過我們自動移除連結／聯絡方式的處理）；相片或出價的預覽則只是「相片」或「出價」等替代文字。因此，以此方式傳送的訊息內容會離開香港。如閣下不希望如此，可在裝置設定中關閉 Binder 的通知——本服務在沒有通知的情況下仍可使用，屆時亦不會傳送任何預覽。\n\n• 交易卡資料（Scrydex，伺服器位於香港境外）——只會接收用於查詢卡牌資料的搜尋文字及卡牌編號，絕不會接收閣下的帳戶、姓名、刊登資訊或訊息。\n\n• 崩潰報告及效能監測（Sentry，伺服器位於美國）——在應用程式發生錯誤時接收診斷資料，例如錯誤報告、裝置型號、系統版本及應用程式版本。我們會避免在該等報告中加入個人身分識別資料。\n\n該等供應商按我們的指示及/或其自身的私隱條款處理資料。我們不會出售閣下的個人資料。",
      },
      {
        heading: "5. 資料保留",
        text:
          "只要閣下的帳戶維持有效，或基於提供本服務、遵守法律義務、解決爭議及執行協議所需，我們便會保留閣下的個人資料。當閣下刪除帳戶後，我們會在合理期間內刪除或匿名化閣下的個人資料，惟法律另有規定須保留的除外。",
      },
      {
        heading: "6. 閣下的權利",
        text:
          "根據PDPO，閣下可要求查閱及更正閣下的個人資料，亦可撤回同意或要求我們刪除閣下的資料。閣下可在應用程式內編輯個人資料、在「設定」中刪除帳戶，或聯絡我們行使有關權利。我們或需在處理請求前核實閣下的身分。",
      },
      {
        heading: "7. 保安",
        text:
          "我們採取合理的技術及組織措施保護閣下的資料，包括對已儲存記錄的存取控制。沒有任何系統是絕對安全的；我們不能保證絕對的保安，閣下使用本服務須自行承擔風險。",
      },
      {
        heading: "8. 兒童",
        text:
          "本服務供13歲或以上人士使用；未滿18歲的用戶須取得父母或法定監護人的同意。我們不會在知情下收集13歲以下人士的資料。如閣下認為未滿13歲的兒童曾向我們提供資料，請聯絡我們，我們將會刪除該等資料。",
      },
      {
        heading: "9. 跨境資料轉移",
        text:
          "閣下的資料會由第4節所列的服務供應商儲存及處理於香港以外的伺服器。具體而言：閣下的帳戶及內容（包括訊息）儲存於新加坡；通知預覽（可能包含閣下發送或收到的訊息的開首部分）及崩潰診斷資料於美國處理；卡牌搜尋文字亦會傳送至香港境外。在此情況下，我們會採取合理措施，確保閣下的資料獲得與本政策一致的保護。",
      },
      {
        heading: "10. 變更",
        text:
          "我們可不時更新本政策。重大變更將透過本服務或其他合理方式通知。",
      },
      {
        heading: "11. 聯絡我們",
        text: `${COMPANY} — ${CONTACT}`,
      },
    ],
  },
};

/** Return the legal doc for the requested kind + locale (falls back to English). */
export function getLegal(kind: LegalKind, locale: string): LegalDoc {
  return locale === "zh" ? ZH[kind] : EN[kind];
}
