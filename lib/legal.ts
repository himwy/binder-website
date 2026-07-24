// Public legal documents for Binder (binderhk.com). Mirrors the in-app copy
// (Binder app lib/legal.ts, English source). Hosted publicly so the App Store /
// Play Console have a reachable Privacy Policy + Terms URL (required for
// submission — a reviewer must reach these without installing or logging in).
//
// Recommended (not required): have HK counsel review the substantive clauses
// (limitation of liability + PDPO handling) before public launch.

export type LegalSection = { heading?: string; text: string };
export type LegalDoc = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

const COMPANY = "Near Mint";
const APP = "Binder";
const UPDATED = "29 May 2026";
const CONTACT = "contact@nearmint.tech";

export const TERMS: LegalDoc = {
  title: "Terms of Service",
  updated: UPDATED,
  intro: `These Terms of Service ("Terms") govern your use of the ${APP} mobile application and related services (the "Service"), operated by ${COMPANY} ("we", "us", "our"). By creating an account or using the Service, you agree to these Terms. If you do not agree, do not use the Service.`,
  sections: [
    { heading: "1. The Service is a platform only", text: `${APP} is a venue that lets users discover each other and arrange trades of trading cards and related items. ${COMPANY} is NOT a party to any trade, sale, exchange, or other transaction between users. We do not buy, sell, own, store, ship, escrow, authenticate, grade, value, inspect, or guarantee any item, and we do not process payments between users. All transactions are arranged and completed solely between users, at their own risk and discretion.` },
    { heading: "2. Eligibility", text: "You must be at least 13 years old to use the Service. If you are under 18, you may use the Service only with the consent of a parent or legal guardian who accepts these Terms on your behalf, and you agree to complete any in-person trades with a responsible adult present. By using the Service you represent that you meet these requirements. The Service is intended for users in Hong Kong; you are responsible for compliance with any laws that apply to you." },
    { heading: "3. Your account", text: "You are responsible for your account, your login credentials, and all activity under your account. Provide accurate information and keep it up to date. Notify us promptly of any unauthorised use. We may refuse, suspend, or terminate accounts at our discretion, including for breach of these Terms." },
    { heading: "4. User conduct", text: "You agree not to: post false, misleading, or counterfeit listings; sell stolen, illegal, or prohibited items; harass, threaten, defraud, or impersonate others; post unlawful, infringing, or harmful content; circumvent fees or security; scrape, disrupt, or misuse the Service; or use the Service for any unlawful purpose. You are solely responsible for your listings, messages, and conduct." },
    { heading: "5. Trades between users", text: "Any agreement to trade is strictly between the users involved. You are responsible for verifying the identity of the other party, the authenticity, condition, grading, ownership, and value of any item, and for arranging a safe meeting or shipping method. We strongly recommend meeting in safe, public places and inspecting items before completing a trade. We are not responsible for, and disclaim all liability arising from, any trade, dispute, loss, theft, fraud, counterfeit, injury, or damage between users." },
    { heading: "6. User content", text: "You retain ownership of the content you submit (listings, photos, messages, profile information). You grant us a non-exclusive, worldwide, royalty-free licence to host, store, display, and distribute that content as needed to operate and improve the Service. You represent that you have the rights to the content you submit and that it does not infringe any third party rights. We have zero tolerance for objectionable content and abusive behaviour. You can report content or users in the app and block abusive users; we aim to review reports within 24 hours and will remove violating content and may suspend or terminate the accounts of offending users." },
    { heading: "7. Third-party services", text: "The Service relies on third parties (including authentication, hosting/backend, and card data providers). We are not responsible for third-party services, and your use of them may be subject to their own terms. Card names, images, and data are provided for reference only and may be inaccurate or incomplete." },
    { heading: "8. Disclaimers", text: 'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, OR AVAILABILITY. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT ANY USER, LISTING, ITEM, OR TRADE IS GENUINE, SAFE, OR LAWFUL.' },
    { heading: "9. Limitation of liability", text: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, ${COMPANY}, ITS DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, DATA, GOODWILL, ITEMS, OR VALUE, ARISING FROM OR RELATING TO YOUR USE OF THE SERVICE OR ANY TRADE OR INTERACTION BETWEEN USERS, WHETHER BASED IN CONTRACT, TORT, OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY. OUR TOTAL AGGREGATE LIABILITY FOR ANY CLAIM RELATING TO THE SERVICE WILL NOT EXCEED HKD 100. Some jurisdictions do not allow certain limitations; in that case, our liability is limited to the smallest amount permitted by law.` },
    { heading: "10. Indemnification", text: `You agree to indemnify and hold harmless ${COMPANY} from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Service, your content, your trades or interactions with other users, or your breach of these Terms.` },
    { heading: "11. Suspension and termination", text: "We may modify, suspend, or discontinue the Service (in whole or part) at any time. We may suspend or terminate your access at any time, with or without notice, including for breach of these Terms. You may stop using the Service and delete your account at any time." },
    { heading: "12. Changes to these Terms", text: "We may update these Terms from time to time. Material changes will be notified through the Service or by other reasonable means. Continued use after changes take effect constitutes acceptance." },
    { heading: "13. Governing law", text: "These Terms are governed by the laws of the Hong Kong Special Administrative Region, and you submit to the exclusive jurisdiction of the Hong Kong courts." },
    { heading: "14. Contact", text: `${COMPANY} — ${CONTACT}` },
  ],
};

export const PRIVACY: LegalDoc = {
  title: "Privacy Policy",
  updated: UPDATED,
  intro: `This Privacy Policy explains how ${COMPANY} ("we", "us") collects, uses, and protects your personal data when you use ${APP} (the "Service"). We handle personal data in accordance with the Hong Kong Personal Data (Privacy) Ordinance (PDPO). By using the Service you consent to this Policy.`,
  sections: [
    { heading: "1. Data we collect", text: "Account data from your sign-in provider (such as your name, email address, and profile photo). Profile data you provide (display name, @handle, bio, district, avatar). Content you create (listings, card selections, photos, messages, ratings, reports). Limited technical data needed to operate the app (such as basic device/log information). We do not collect payment card details — we do not process payments." },
    { heading: "2. How we use your data", text: "To create and operate your account; to display your profile, listings, and messages to other users as part of the Service; to enable trading, chat, and ratings; to maintain safety and prevent abuse; to respond to reports and support requests; and to improve the Service. We use your data only as needed to provide and protect the Service." },
    { heading: "3. What others can see", text: "Your @handle, display name, avatar, bio, district, ratings, and active listings are visible to other users. Messages are visible to the participants of a conversation. Do not share sensitive personal information you do not want others to see." },
    { heading: "4. Service providers", text: "We use trusted third-party providers to run the Service, including: a cloud backend/hosting provider that stores your data on our behalf; an authentication provider for sign-in; and a trading-card data provider for card information. These providers process data on our instructions and/or under their own privacy terms. We do not sell your personal data." },
    { heading: "5. Data retention", text: "We keep your personal data for as long as your account is active or as needed to provide the Service, comply with legal obligations, resolve disputes, and enforce our agreements. When you delete your account, we delete or anonymise your personal data within a reasonable period, except where retention is required by law." },
    { heading: "6. Your rights", text: "Under the PDPO you may request access to, and correction of, your personal data, and you may withdraw consent or ask us to delete your data. You can edit your profile in-app, delete your account in Settings, or contact us to exercise your rights. We may need to verify your identity before acting on a request." },
    { heading: "7. Security", text: "We use reasonable technical and organisational measures to protect your data, including access controls on stored records. No system is perfectly secure; we cannot guarantee absolute security, and you use the Service at your own risk." },
    { heading: "8. Children", text: "The Service is for users 13 and older; users under 18 require the consent of a parent or legal guardian. We do not knowingly collect data from anyone under 13. If you believe a child under 13 has provided us data, contact us and we will remove it." },
    { heading: "9. International transfers", text: "Your data may be stored or processed on servers located outside Hong Kong by our service providers. Where this happens, we take reasonable steps so your data remains protected consistent with this Policy." },
    { heading: "10. Changes", text: "We may update this Policy from time to time. Material changes will be notified through the Service or by other reasonable means." },
    { heading: "11. Contact", text: `${COMPANY} — ${CONTACT}` },
  ],
};
