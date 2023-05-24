import {useCallback, useEffect} from "react";
import useAppStore from "../state/appStore.ts";

const Keyboard = () => {
    const letters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o',
        'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k',
        'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'].map((letter) => letter.toUpperCase());

    const {
        addLetter,
        guessWord,
        existingLetters,
        addLetterToCurrentWord,
        currentWord,
        addGuessedLetter,
        addExistingLetter,
        addMissedLetter,
        guessedLetters,
        missedLetters
    } = useAppStore();

    const validateLetter = useCallback((letter: string) => {
        const guessLetters = guessWord.split('');
        const currentLettersTypedNumber = currentWord.length;
        if (guessWord[currentLettersTypedNumber] === letter) {
            addGuessedLetter(letter);
        } else if (guessLetters.includes(letter)) {
            addExistingLetter(letter);
        } else {
            addMissedLetter(letter);
        }
    }, [addExistingLetter, addGuessedLetter, addMissedLetter, currentWord, guessWord])

    const handleLetterClick = (letter: string) => {
        addLetter(letter);
        addLetterToCurrentWord(letter);
        validateLetter(letter);
    }

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if (!letters.includes(event.key.toUpperCase())) return;

        addLetter(event.key.toUpperCase());
        addLetterToCurrentWord(event.key.toUpperCase());
        validateLetter(event.key.toUpperCase());
    }, [addLetter, addLetterToCurrentWord, letters, validateLetter])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        }
    }, [handleKeyPress])

    const defaultStyle = "bg-gray-700"
    const guessedStyle = "bg-green-700"
    const wrongStyle = "bg-gray-500"
    const existingStyle = "bg-yellow-700"

    const getColor = (letter: string) => {
        if (guessedLetters.has(letter)) {
            return guessedStyle;
        } else if (existingLetters.has(letter)) {
            return existingStyle;
        } else if (missedLetters.has(letter)) {
            return wrongStyle;
        } else {
            return defaultStyle;
        }
    }

    return <div className="grid grid-cols-9 gap-1 md:gap-2">
        {letters.map((letter) => (
            <button
                type="button"
                key={letter}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-sm shrink-0 flex items-center justify-center text-white md:hover:bg-gray-600 ${getColor(letter)}`}
                onClick={() => handleLetterClick(letter)}
            >
                {letter}
            </button>)
        )}
    </div>
}

export default Keyboard;
