import {FC} from "react";
import useAppStore from "../state/appStore.ts";

interface Props {
    rows: number;
    columns: number;
}

const CrosswordGrid: FC<Props> = ({rows, columns}) => {
    const {letters, guessWord} = useAppStore();

    const guessedStyle = "bg-green-700"
    const existsStyle = "bg-yellow-700"
    const notGuessedStyle = "bg-gray-700"
    const wrongStyle = "bg-red-700"

    const getColor = (row: number, column: number) => {
        const guessedLetter = letters[row * columns + column]?.toUpperCase();
        const actualLetter = guessWord[column]?.toUpperCase();

        if (guessedLetter === actualLetter) {
            return guessedStyle;
        } else if (guessedLetter && actualLetter && guessWord.toUpperCase().includes(guessedLetter)) {
            return existsStyle;
        } else if (guessedLetter && actualLetter && !guessWord.toUpperCase().includes(guessedLetter)) {
            return wrongStyle;
        }
        else {
            return notGuessedStyle;
        }
    };

    return <div className="grid grid-cols-5 w-fit gap-2">
        {Array.from(Array(rows), (_, row) => (
            Array.from(Array(columns), (_, col) => (
                <div
                    key={`${row}-${col}`}
                    className={`w-10 h-10 shadow-lg rounded-sm shrink-0 flex items-center justify-center text-white ${getColor(row, col)}`}
                >
                    {letters[row * columns + col]}
                </div>
            ))
        ))}
    </div>
}

export default CrosswordGrid
