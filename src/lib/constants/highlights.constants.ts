const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const STALE_HOURS_AMOUNT = 6;

export const HIGHLIGHTS_LANGUAGE = {
  ENGLISH: 'en',
  GERMAN: 'de',
  FRENCH: 'fr',
  SWEDISH: 'sv',
  PORTUGUESE: 'pt',
  SPANISH: 'es',
  ARABIC: 'ar',
  BOSNIAN: 'bs',
  UKRAINIAN: 'uk',
  ITALIAN: 'it',
  TURKISH: 'tr',
  CHINESE: 'zh',
} as const;

export const HIGHLIGHTS_STALE_TIME =
  STALE_HOURS_AMOUNT *
  MINUTES_PER_HOUR *
  SECONDS_PER_MINUTE *
  MILLISECONDS_PER_SECOND;
