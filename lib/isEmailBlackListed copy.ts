// utils/emailValidation.ts

const blacklistedDomains = [
  "mailinator.com",
  "tempmail.com",
  "throwawaymail.com",
  "guerrillamail.com",
  "10minutemail.com",
  "yopmail.com",
  "temp-mail.org",
  "fakeinbox.com",
  "mailnesia.com",
  "temporarymail.com",
  "sharklasers.com",
  "spam4.me",
  "trashmail.com",
  "dispostable.com",
  "maildrop.cc",
];

export function isEmailBlacklisted(email: string): boolean {
  const domain = email.split("@")[1].toLowerCase();
  return blacklistedDomains.includes(domain);
}
