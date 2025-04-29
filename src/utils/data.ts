export interface Icard {
  icon: string;
  isFound: boolean;
  isActive: boolean;
}

const UNIQUE_ICONS = [
  "/icons/angularjs.png",
  "/icons/moon-symbol.png",
  "/icons/docker.png",
  "/icons/berserk.png",
  "/icons/google-logo.png",
  "/icons/react.png",
  "/icons/sharingan.png",
  "/icons/naruto-sign.png",
];

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
