import { loadMessageBundle, resolveRequestLocale } from "@/src/i18n/locale";
import { toAbsoluteUrl } from "@/src/site";

type FAQQuestion = {
  question: string;
  answer?: string;
  video?: string;
};

type HelpSection = {
  title: string;
  questions: FAQQuestion[];
};

type ThirdPartyLink = {
  name: string;
  href: string;
};

const privacyLinks: ThirdPartyLink[] = [
  {
    name: "Google Play Services",
    href: "https://www.google.com/policies/privacy/",
  },
  {
    name: "Google Analytics for Firebase",
    href: "https://firebase.google.com/support/privacy",
  },
  {
    name: "Google Firebase Crashlytics",
    href: "https://firebase.google.com/support/privacy/",
  },
  {
    name: "Google Apps Gemini",
    href: "https://support.google.com/gemini/answer/13594961",
  },
  {
    name: "CloudFlare R2",
    href: "https://www.cloudflare.com/privacypolicy/",
  },
  {
    name: "Supabase",
    href: "https://supabase.com/privacy",
  },
];

const helpSectionOrder = [
  "about",
  "ai",
  "workouts",
  "goals",
  "groups",
  "challenges",
  "gamification",
  "sharing",
  "data",
  "trainers",
] as const;

function section(title: string, lines: string[]) {
  return [`## ${title}`, "", ...lines].join("\n");
}

function estimateMarkdownTokens(markdown: string) {
  return Math.max(1, Math.ceil(markdown.length / 4));
}

async function renderHomeMarkdown() {
  const locale = await resolveRequestLocale();
  const { baseMessages } = await loadMessageBundle(locale);

  return [
    "---",
    `title: ${baseMessages.metadata.title}`,
    `url: ${toAbsoluteUrl("/")}`,
    `lang: ${locale}`,
    "---",
    "",
    `# ${baseMessages.banner.title}`,
    "",
    baseMessages.metadata.description,
    "",
    "## Overview",
    "",
    baseMessages.banner.description,
    "",
    "## Highlights",
    "",
    `- ${baseMessages.amazing.challenges}`,
    `- ${baseMessages.amazing.offline}`,
    `- ${baseMessages.amazing.library}`,
    `- ${baseMessages.amazing.ai}`,
    `- ${baseMessages.amazing.privacy}`,
    "",
    "## Public Resources",
    "",
    `- Help: ${toAbsoluteUrl("/help")}`,
    `- Privacy Policy: ${toAbsoluteUrl("/privacy")}`,
    `- Account Deletion: ${toAbsoluteUrl("/account/delete-account")}`,
  ].join("\n");
}

async function renderHelpMarkdown() {
  const locale = await resolveRequestLocale();
  const { helpMessages } = await loadMessageBundle(locale);
  const sections = helpMessages.sections as Record<string, HelpSection>;

  const content = helpSectionOrder.flatMap((sectionKey) => {
    const currentSection = sections[sectionKey];

    if (!currentSection) {
      return [];
    }

    const lines = currentSection.questions.flatMap((question) => {
      const questionLines = [`### ${question.question}`, ""];

      if (question.answer) {
        questionLines.push(question.answer, "");
      }

      if (question.video) {
        questionLines.push(`Video: ${question.video}`, "");
      }

      return questionLines;
    });

    return [section(currentSection.title, lines), ""];
  });

  return [
    "---",
    `title: ${helpMessages.title}`,
    `url: ${toAbsoluteUrl("/help")}`,
    `lang: ${locale}`,
    "---",
    "",
    `# ${helpMessages.header.title}`,
    "",
    helpMessages.header.description,
    "",
    ...content,
  ].join("\n");
}

async function renderPrivacyMarkdown() {
  const locale = await resolveRequestLocale();
  const { privacyMessages } = await loadMessageBundle(locale);
  const sections = privacyMessages.sections;

  return [
    "---",
    `title: ${privacyMessages.title}`,
    `url: ${toAbsoluteUrl("/privacy")}`,
    `lang: ${locale}`,
    "---",
    "",
    `# ${privacyMessages.header.title}`,
    "",
    privacyMessages.header.description,
    "",
    section(sections.general.title, [sections.general.content]),
    "",
    section(sections.informationCollection.title, [
      sections.informationCollection.intro,
      "",
      ...(sections.informationCollection.list as string[]).map((item) => `- ${item}`),
      "",
      sections.informationCollection.note,
      "",
      sections.informationCollection.contact,
    ]),
    "",
    section(sections.thirdPartyAccess.title, [
      sections.thirdPartyAccess.content,
      "",
      sections.thirdPartyAccess.note,
      "",
      ...privacyLinks.map((item) => `- ${item.name}: ${item.href}`),
      "",
      sections.thirdPartyAccess.disclosure,
      "",
      ...(sections.thirdPartyAccess.reasons as string[]).map((reason) => `- ${reason}`),
    ]),
    "",
    section(sections.dataRetention.title, [sections.dataRetention.content]),
    "",
    section(sections.security.title, [sections.security.content]),
    "",
    section(sections.changes.title, [
      sections.changes.content,
      "",
      sections.changes.effective,
    ]),
    "",
    section(sections.consent.title, [sections.consent.content]),
  ].join("\n");
}

function renderDeleteAccountMarkdown() {
  return [
    "---",
    "title: Delete Account",
    `url: ${toAbsoluteUrl("/account/delete-account")}`,
    "---",
    "",
    "# Delete Account",
    "",
    "## Delete with app",
    "",
    'In the menu at the top right, log in and then click on "Delete Account".',
    "",
    "## Request deletion without the app",
    "",
    "Send an email to compliance@mobifit.app using the email address you used to create the account. All data will be permanently deleted.",
  ].join("\n");
}

function renderUpdatePasswordMarkdown() {
  return [
    "---",
    "title: Trocar Senha",
    `url: ${toAbsoluteUrl("/account/update-password")}`,
    "---",
    "",
    "# Trocar Senha",
    "",
    "Você deve acessar esse link em um dispositivo com o MobiFit instalado.",
  ].join("\n");
}

export async function renderMarkdownForPath(pathname: string) {
  switch (pathname) {
    case "/":
      return renderHomeMarkdown();
    case "/help":
      return renderHelpMarkdown();
    case "/privacy":
      return renderPrivacyMarkdown();
    case "/account/delete-account":
      return renderDeleteAccountMarkdown();
    case "/account/update-password":
      return renderUpdatePasswordMarkdown();
    default:
      return null;
  }
}

export { estimateMarkdownTokens };
