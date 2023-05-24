import {useEffect} from "react";
import useAppStore from "../state/appStore.ts";

const Keyboard = () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].map((letter) => letter.toUpperCase());

    const {addLetter, addLetterToCurrentWord} = useAppStore();

    const handleLetterClick = (letter: string) => {
        addLetter(letter);
        addLetterToCurrentWord(letter);
    }

    const handleKeyPress = (event: KeyboardEvent) => {
        if (!letters.includes(event.key.toUpperCase())) return;

        addLetter(event.key.toUpperCase());
        addLetterToCurrentWord(event.key.toUpperCase());
    }

    useEffect(()=>{
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        }
    }, [])

    return <div className="grid grid-cols-6 md:grid-cols-9 gap-2">
        {letters.map((letter) => (
            <button
                type="button"
                key={letter}
                className="w-10 h-10 bg-gray-700 rounded-sm shrink-0 flex items-center justify-center text-white md:hover:bg-gray-600"
                onClick={() => handleLetterClick(letter)}
            >
                {letter}
            </button>)
        )}
    </div>
}

export default Keyboard;
