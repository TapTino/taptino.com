export interface Country {
  iso2: string;
  name: string;
  flag: string;
  code: `+${string}`;
  pattern: number[];
}

export const COUNTRIES: Country[] = [
  {
    iso2: 'us',
    name: 'United States',
    flag: '🇺🇸',
    code: '+1',
    pattern: [3, 3, 4]
  },
  {
    iso2: 'gb',
    name: 'United Kingdom',
    flag: '🇬🇧',
    code: '+44',
    pattern: [4, 3, 4]
  },
  {
    iso2: 'it',
    name: 'Italy',
    flag: '🇮🇹',
    code: '+39',
    pattern: [3, 3, 4]
  },
  {
    iso2: 'fr',
    name: 'France',
    flag: '🇫🇷',
    code: '+33',
    pattern: [
      2,
      2,
      2,
      2,
      2
    ]
  },
  {
    iso2: 'de',
    name: 'Germany',
    flag: '🇩🇪',
    code: '+49',
    pattern: [3, 3, 4]
  }
];
