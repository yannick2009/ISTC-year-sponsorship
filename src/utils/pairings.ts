import type { Person } from "../types";

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function generatePairings(parrains: Person[], filleuls: Person[]) {
  const shuffledFilleuls = shuffleArray([...filleuls]);
  const shuffledParrains = shuffleArray([...parrains]);

  if (shuffledParrains.length > shuffledFilleuls.length) {
    const diff = shuffledParrains.length - shuffledFilleuls.length;
    for (let i = 0; i < diff; i++) {
      shuffledFilleuls.push(shuffledFilleuls[i]);
    }
  }

  if (shuffledFilleuls.length > shuffledParrains.length) {
    const diff = shuffledFilleuls.length - shuffledParrains.length;
    for (let i = 0; i < diff; i++) {
      shuffledParrains.push(shuffledParrains[i]);
    }
  }

  return shuffledFilleuls.map((filleul, index) => ({
    parrain: shuffledParrains[index],
    filleul,
  }));
}
