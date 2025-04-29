export interface Icard {
  icon: string;
  isFound: boolean;
  isActive: boolean;
}

const ICON_NAMES = [
  "angularjs",
  "moon-symbol",
  "docker",
  "berserk",
  "google-logo",
  "react",
  "sharingan",
  "naruto-sign",
];

const UNIQUE_ICONS = ICON_NAMES.map(
  (name) => `${import.meta.env.BASE_URL}icons/${name}.png`
);

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export const CARDS: Icard[] = shuffle([...UNIQUE_ICONS, ...UNIQUE_ICONS]).map(
  (icon) => ({
    icon,
    isActive: false,
    isFound: false,
  })
);
