import { useEffect, useState } from "react";
import ignoredKeys from "../data/ignoredKeys";
import { TypeStats } from "../interface/TypeStats";

export interface TyperInterface {
  text: string;
  onComplete: (numberOfMistakes: number) => void;
  onStart: () => void;
}

export default function Typer({ text, onStart, onComplete }: TyperInterface) {
  const [activeLetter, setActiveLetter] = useState<number>(0);
  const [incorrectLetters, setIncorrectLetters] = useState<string>("");
  const [numberOfMistakes, setNumberOfMistakes] = useState(0);

  function handleMistake(key: string) {
    setIncorrectLetters(incorrectLetters + key.replaceAll(" ", " "));
    setNumberOfMistakes(numberOfMistakes + 1);
  }

  function handleKeyUp(event: KeyboardEvent) {
    if (ignoredKeys.includes(event.key)) {
      return;
    }
    if (activeLetter === 0) {
      onStart();
    }

    if (incorrectLetters.length > 0) {
      if (event.key === "Backspace") {
        setIncorrectLetters(
          incorrectLetters.slice(0, incorrectLetters.length - 1)
        );
      } else {
        handleMistake(event.key);
      }
    } else {
      if (event.key === "Backspace") {
        setActiveLetter(Math.max(activeLetter - 1, 0));
      } else if (event.key === text[activeLetter]) {
        setActiveLetter(activeLetter + 1);
      } else {
        handleMistake(event.key);
      }
    }

    if (activeLetter === text.length - 1) {
      onComplete(numberOfMistakes);
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);

    return () => document.removeEventListener("keyup", handleKeyUp);
  });

  return (
    <code className="caret-transparent">
      <span className="text-white">{text.slice(0, activeLetter)}</span>
      <span className="text-orange-900 bg-orange-500">{incorrectLetters}</span>
      <span className="text-amber-400 animate-pulse relative w-0 inline-block -left-[4px]">
        |
      </span>
      <span className="text-gray-600">
        {text.slice(activeLetter, text.length)}
      </span>
    </code>
  );
}
