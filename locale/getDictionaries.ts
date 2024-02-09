import 'server-only';
import type { Locale } from './i18n-config';

const dictionaries: any = {
  en: () => import('@/locale/dictionaries/en.json').then((module) => module.default),
  fa: () => import('@/locale/dictionaries/fa.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
