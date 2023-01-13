import { TypeStats } from "../interface/TypeStats";
import { numberFormat } from "../utils/numberFormat";
import StatBlock from "./StatBlock";

interface StatsProps extends TypeStats {
  onNewGame: () => void;
}

function sectostr(time: number) {
  return ~~(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + (time % 60);
}

export default function Stats({
  completeTime,
  startTime,
  numberOfChars,
  numberOfMistakes,
  numberOfWords,
  onNewGame: handleNewGame,
}: StatsProps) {
  const secondsToComplete = completeTime - startTime;
  const timeToComplete = sectostr(secondsToComplete);
  const charsPerMinute = (numberOfChars / secondsToComplete) * 60;
  const wordsPerMinute = (numberOfWords / secondsToComplete) * 60;
  const accuracy =
    100 * (1 - numberOfMistakes / (numberOfMistakes + numberOfChars));

  return (
    <div>
      <h1 className="text-xl my-4 text-amber-400">Game complete!</h1>
      <div className="flex space-x-2 my-4">
        <StatBlock label="Time to complete" text={timeToComplete} />
        <StatBlock
          label="Chars Per Minute"
          text={numberFormat(charsPerMinute, 0)}
        />
        <StatBlock
          label="Words Per Minute"
          text={numberFormat(wordsPerMinute, 0)}
        />
        <StatBlock label="Accuracy" text={numberFormat(accuracy) + "%"} />
      </div>
      <button
        className="bg-amber-400 px-4 py-2 rounded-md text-gray-800 hover:bg-amber-500 transition-all"
        onClick={handleNewGame}
      >
        New game
      </button>
    </div>
  );
}
