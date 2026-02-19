import es from './es';
import en from './en';

const translations: Record<string, Record<string, string | string[]>> = { es, en };

export function t(locale: string, key: string): string | string[] {
  return translations[locale]?.[key] ?? translations['es']?.[key] ?? key;
}

export function ts(locale: string, key: string): string {
  const val = t(locale, key);
  return Array.isArray(val) ? val.join(', ') : val;
}

export function ta(locale: string, key: string): string[] {
  const val = t(locale, key);
  return Array.isArray(val) ? val : [val];
}
