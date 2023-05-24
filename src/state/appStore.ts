import {create} from "zustand";
import {
    addExistingLetter,
    addGuessedLetter, addMissedLetter, deleteExistingLetter, deleteGuessedLetter, deleteMissedLetter,
    getRandomWord,
    nextGame,
    removeWordFromLetters,
    revertLastWordFromLetters
} from "./actions.tsx";

type AppStore = {
    words: string[];
    addWord: (word: string) => void;
    removeWord: (word: string) => void;
    clearWords: () => void;
    letters: string[];
    currentWord: string;
    setCurrentWord: (word: string) => void;
    addLetterToCurrentWord: (letter: string) => void;
    clearCurrentWord: () => void;
    addLetter: (letter: string) => void;
    removeLetter: (letter: string) => void;
    removeWordFromLetters: () => void;
    clearLetters: () => void;
    score: number;
    addScore: (score: number) => void;
    clearScore: () => void;
    guessWord: string;
    setGuessWord: (word: string) => void;
    clearGuessWord: () => void;
    wordsList: string[];
    setWordsList: (words: string[]) => void;
    won: boolean | undefined;
    setWon: (won: boolean | undefined) => void;
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
    fetchingWords: boolean;
    setFetchingWords: (fetchingWords: boolean) => void;
    getRandomWord: () => string;
    previousWords: string[];
    setPreviousWords: (words: string[]) => void;
    addPreviousWord: (word: string) => void;
    nextGame: () => void;
    revertLastWordFromLetters: () => void;
    guessedLetters: Map<string, number>;
    missedLetters: Map<string, number>;
    existingLetters: Map<string, number>;
    setGuessedLetters: (guessedLetters: Map<string, number>) => void;
    setMissedLetters: (missedLetters: Map<string, number>) => void;
    setExistingLetters: (existingLetters: Map<string, number>) => void;
    addGuessedLetter: (letter: string) => void;
    addMissedLetter: (letter: string) => void;
    addExistingLetter: (letter: string) => void;
    deleteGuessedLetter: (letter: string) => void;
    deleteMissedLetter: (letter: string) => void;
    deleteExistingLetter: (letter: string) => void;
    clearGuessedLetters: () => void;
    clearMissedLetters: () => void;
    clearExistingLetters: () => void;
    clearAllLetters: () => void;
}

const useAppStore = create<AppStore>((set, get) => ({
    words: [],
    addWord: (word: string) => set({words: [...get().words, word]}),
    removeWord: (word: string) => set({words: get().words.filter(w => w !== word)}),
    clearWords: () => set({words: []}),
    letters: [],
    currentWord: '',
    setCurrentWord: (word: string) => set({currentWord: word}),
    addLetterToCurrentWord: (letter: string) => set({currentWord: get().currentWord + letter}),
    clearCurrentWord: () => set({currentWord: ''}),
    addLetter: (letter: string) => set({letters: [...get().letters, letter]}),
    removeLetter: (letter: string) => set({letters: get().letters.filter(l => l !== letter)}),
    clearLetters: () => set({letters: []}),
    score: 0,
    addScore: (score: number) => set({score: get().score + score}),
    clearScore: () => set({score: 0}),
    guessWord: '',
    setGuessWord: (word: string) => set({guessWord: word}),
    clearGuessWord: () => set({guessWord: ''}),
    wordsList: [],
    setWordsList: (words: string[]) => set({wordsList: words}),
    won: undefined,
    setWon: (won: boolean | undefined) => set({won: won}),
    showModal: false,
    setShowModal: (showModal: boolean) => set({showModal: showModal}),
    fetchingWords: false,
    setFetchingWords: (fetchingWords: boolean) => set({fetchingWords: fetchingWords}),
    previousWords: [],
    setPreviousWords: (words: string[]) => set({previousWords: words}),
    getRandomWord: () => getRandomWord(set, get),
    addPreviousWord: (word: string) => set({previousWords: [...get().previousWords, word]}),
    nextGame: () => nextGame(set, get),
    removeWordFromLetters: () => removeWordFromLetters(set, get),
    revertLastWordFromLetters: () => revertLastWordFromLetters(set, get),
    guessedLetters: new Map<string, number>(),
    missedLetters: new Map<string, number>(),
    existingLetters: new Map<string, number>(),
    setGuessedLetters: (guessedLetters: Map<string, number>) => set({guessedLetters: guessedLetters}),
    setMissedLetters: (missedLetters: Map<string, number>) => set({missedLetters: missedLetters}),
    setExistingLetters: (existingLetters: Map<string, number>) => set({existingLetters: existingLetters}),
    addGuessedLetter: (letter: string) => addGuessedLetter(set, get, letter),
    addMissedLetter: (letter: string) => addMissedLetter(set, get, letter),
    addExistingLetter: (letter: string) => addExistingLetter(set, get, letter),
    deleteGuessedLetter: (letter: string) => deleteGuessedLetter(set, get, letter),
    deleteMissedLetter: (letter: string) => deleteMissedLetter(set, get, letter),
    deleteExistingLetter: (letter: string) => deleteExistingLetter(set, get, letter),
    clearGuessedLetters: () => set({guessedLetters: new Map<string, number>()}),
    clearMissedLetters: () => set({missedLetters: new Map<string, number>()}),
    clearExistingLetters: () => set({existingLetters: new Map<string, number>()}),
    clearAllLetters: () => set({guessedLetters: new Map<string, number>(), missedLetters: new Map<string, number>(), existingLetters: new Map<string, number>()}),
}));

export default useAppStore;
