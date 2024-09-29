const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const STALE_HOURS_AMOUNT = 6;

const HIGHLIGHTS_REQUEST_ERROR_ENDING =
  'Please refer to the development team or try to reload the page.';

export const HIGHLIGHTS_FEED_QUERY_KEY = 'highlights-on-this-day';

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

export const HIGHLIGHTS_REQUEST_ERROR = {
  BAD_REQUEST: `Request URL is invalid. ${HIGHLIGHTS_REQUEST_ERROR_ENDING}`,
  NO_DATA_FOUND: `There is no available data for the selected date. ${HIGHLIGHTS_REQUEST_ERROR_ENDING}`,
  UNSUPPORTED_LANGUAGE: `The selected language is not supported. ${HIGHLIGHTS_REQUEST_ERROR_ENDING}`,
} as const;

export const HIGHLIGHTS_STALE_TIME =
  STALE_HOURS_AMOUNT *
  MINUTES_PER_HOUR *
  SECONDS_PER_MINUTE *
  MILLISECONDS_PER_SECOND;
