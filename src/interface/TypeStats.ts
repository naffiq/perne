export interface TypeStats {
  startTime: number;
  completeTime: number;
  numberOfChars: number;
  numberOfWords: number;
  numberOfMistakes: number;
}

export const initialStats: TypeStats = {
  startTime: 0,
  completeTime: 0,
  numberOfChars: 0,
  numberOfWords: 0,
  numberOfMistakes: 0,
};
