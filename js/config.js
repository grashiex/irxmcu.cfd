/**
 * Public site config — NO Apps Script URL here (stays in Cloudflare Worker only).
 */
window.APP_CONFIG = {
  brandTitle: "irxmcu.cfd",
  brandLogo: "",
  domains: ["irxmcu.cfd"],
  defaultPrefix: "",
  defaultPassword: "keke123!",

  // OWNER ONLY — never give to Person 1/2/3. Required to change unlock password.
  ownerPin: "priveir143!",

  contactAdminLabel: "Contact Admin",
  contactAdminLink: "https://t.me/grashiex",

  footerName: "GRASHIEX",
  footerLink: "https://t.me/grashiex",
  footerYear: 2026,

  // Same-origin Worker route (Cloudflare: irxmcu.cfd/api* → Worker)
  apiUrl: "/api",

  // Leave empty on public sites — use Worker GAS_WEBAPP_URL instead
  googleScriptUrl: "",
  demoMode: false,

  sessionKey: "webmail_session_irxmcu",
  settingsKey: "webmail_settings_irxmcu",
  themeKey: "webmail_theme_irxmcu",
  customPaletteKey: "webmail_custom_palette_irxmcu",
};
