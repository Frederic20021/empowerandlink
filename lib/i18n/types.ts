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
  company: {
    hero: {
      badge: string;
      title: string;
    };
    video: {
      sectionLabel: string;
      title: string;
      subtitle: string;
    };
    ceo: {
      sectionLabel: string;
      title: string;
      role: string;
      name: string;
      paragraphs: string[];
    };
    companyInfo: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      labels: {
        companyName: string;
        ceo: string;
        address: string;
        phone: string;
        capital: string;
        established: string;
        business: string;
        banks: string;
      };
      values: {
        companyName: string;
        ceo: string;
        address: string;
        phone: string;
        capital: string;
        established: string;
        business: string;
        banks: string;
      };
    };
    access: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      cards: {
        location: { title: string; content: string };
        transport: { title: string; content: string };
        parking: { title: string; content: string };
      };
    };
    cta: {
      eyebrow: string;
      title: string;
      body: string;
      button: string;
    };
  };
  contact: {
    intro: string;
    labels: {
      name: string;
      company: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    };
    submit: {
      idle: string;
      submitting: string;
    };
    alerts: {
      success: string;
      error: string;
    };
  };
  blogPage: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    emptyState: string;
    adminLink: string;
    backLink: string;
  };
  notion: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      footnote: string;
    };
    problems: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      items: { icon: string; title: string; desc: string }[];
    };
    reasons: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      items: { icon: string; num: string; title: string; desc: string }[];
    };
    basicPlan: {
      sectionLabel: string;
      title: string;
      price: string;
      priceSub: string;
      includesNote: string;
      includesLabel: string;
      includes: string[];
      footnote: string;
    };
    pricingFactors: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      factors: {
        point: string;
        icon: string;
        title: string;
        analogy: string;
        desc: string;
        tableHeaders: string[];
        tableRows: { cols: string[] }[];
        footnote?: string;
      }[];
    };
    industryExamples: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      tableHeaders: string[];
      tableRows: {
        industry: string;
        dbCount: string;
        price: string;
        themes: string;
      }[];
      cards: {
        title: string;
        pain: string;
        dbNote: string;
        rows: { label: string; val: string }[];
        total: string;
      }[];
    };
    contractTerms: {
      sectionLabel: string;
      title: string;
      contracts: {
        term: string;
        dbNote: string;
        add: string;
        addSub: string;
        reason: string;
        recommended: boolean;
      }[];
    };
    process: {
      sectionLabel: string;
      title: string;
      steps: {
        icon: string;
        label: string;
        title: string;
        desc: string;
      }[];
    };
    faq: {
      sectionLabel: string;
      title: string;
      items: { question: string; answer: string }[];
    };
    cta: {
      eyebrow: string;
      title: string;
      subtitle: string;
      contactPerson: string;
      contactRole: string;
      button: string;
    };
  };
  ict: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
    };
    flowBar: {
      steps: { num: string; label: string; sub: string }[];
    };
    notionSection: {
      badge: string;
      title: string;
      description: string;
      features: string[];
      cta: string;
    };
    aiInterviewSection: {
      badge: string;
      title: string;
      description: string;
      features: string[];
      cta: string;
    };
    offshoreSection: {
      badge: string;
      title: string;
      description: string;
      features: string[];
      cta: string;
    };
    ctaSection: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
  recruitment: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      pills: string[];
      serviceList: {
        title: string;
        items: { icon: string; text: string }[];
        cta: string;
        ctaSub: string;
      };
    };
    problems: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      cta: string;
      items: { icon: string; text: string }[];
    };
    services: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      items: {
        title: string;
        description: string;
        tags: string[];
      }[];
    };
    stats: {
      items: { num: string; unit: string; label: string }[];
    };
    visas: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      items: {
        title: string;
        subtitle: string;
        description: string;
        checks: string[];
      }[];
    };
    process: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      steps: { num: string; title: string; desc: string }[];
      footnote: string;
    };
    countries: {
      sectionLabel: string;
      title: string;
      subtitle: string;
      items: {
        flag: string;
        name: string;
        meta: string;
        points: { num: string; title: string; desc: string }[];
      }[];
    };
    cta: {
      eyebrow: string;
      title: string;
      subtitle: string;
      button: string;
      secondaryButton: string;
      footnote: string;
    };
  };
  japanesePage: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      infoCards: {
        audience: { label: string; value: string };
        format: { label: string; value: string };
        content: { label: string; value: string };
      };
    };
    challenges: {
      title: string;
      items: string[];
    };
    recommended: {
      title: string;
      description: string;
      items: string[];
      ctaTitle: string;
      button: string;
    };
    professors: {
      title: string;
      instructorLabel: string;
      profiles: {
        id: number;
        name: string;
        kana: string;
        sections: {
          title: string;
          items: string[];
        }[];
        image: string;
      }[];
    };
    serviceListing: {
      title: string;
      estimateLabel: string;
      feeLabel: string;
      bookingButton: string;
      courses: {
        id: number;
        prof: string;
        tags: string[];
        payType: string;
        title: string;
        image: string;
        description: string;
        features: {
          language: string;
          important: string[];
        };
        duration: string;
        pricing: {
          type: string;
          price: string;
        }[];
      }[];
      modals: {
        calendar: {
          title: string;
          instruction: string;
          closeLabel: string;
        };
        timeSlots: {
          title: string;
          closeLabel: string;
          backLabel: string;
          contentLabel: string;
        };
        userForm: {
          title: string;
          closeLabel: string;
          backLabel: string;
          reservationLabel: string;
          labels: {
            name: string;
            email: string;
            phone: string;
            message: string;
          };
          placeholders: {
            name: string;
            email: string;
            phone: string;
            message: string;
          };
          submitIdle: string;
          submitting: string;
        };
      };
      alerts: {
        validationError: string;
        confirmTitle: string;
        confirmService: string;
        confirmDateTime: string;
        confirmName: string;
        confirmEmail: string;
        confirmPhone: string;
        confirmMessage: string;
        confirmSend: string;
        success: string;
        error: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      webButton: string;
      phoneButton: string;
      phoneNote: string;
    };
  };
}
