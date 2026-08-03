export type Lang = 'ja' | 'en';

export interface Dictionary {
  nav: {
    services: string;
    why: string;
    company: string;
    contact: string;
  };
  mobNav: {
    services: string;
    why: string;
    company: string;
    contact: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleEm: string;
    sub: string;
    cta: string;
    viewServices: string;
    pills: string[];
    cards: {
      recruitment: { title: string; body: string };
      english: { title: string; body: string };
      japanese: { title: string; body: string };
      ict: { title: string; body: string };
    };
  };
  stats: {
    noFee: string;
    noFeeSup: string;
    businesses: string;
    businessesSup: string;
    countries: string;
    countriesSup: string;
    schools: string;
    schoolsSup: string;
  };
  problems: {
    label: string;
    title1: string;
    title2: string;
    title3: string;
    body: string;
    cta: string;
    items: { icon: string; text: string }[];
  };
  services: {
    sectionLabel: string;
    title: string;
    titleEm: string;
    sub: string;
    recruitment: {
      title: string;
      body: string;
      tags: string[];
      link: string;
    };
    english: {
      title: string;
      body: string;
      tags: string[];
      link: string;
    };
    japanese: {
      title: string;
      body: string;
      tags: string[];
      link: string;
    };
    ict: {
      title: string;
      body: string;
      tags: string[];
      link: string;
    };
  };
  philosophy: {
    sectionLabel: string;
    title: string;
    sub: string;
    pillars: {
      icon: string;
      title: string;
      body: string;
    }[];
  };
  why: {
    sectionLabel: string;
    title: string;
    titleEm: string;
    sub: string;
    cards: {
      num: string;
      heading: string;
      body: string;
    }[];
  };
  blog: {
    sectionLabel: string;
    title: string;
    titleEm: string;
    sub: string;
    viewAll: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    btn: string;
  };
  footer: {
    desc: string;
    license: string;
    services: string;
    recruitment: string;
    english: string;
    japanese: string;
    ict: string;
    company: string;
    overview: string;
    contact: string;
    copyright: string;
  };
}
