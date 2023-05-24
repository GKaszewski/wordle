import {create} from "zustand";

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
    guessWord: 'dupas',
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
    getRandomWord: () => {
        const {wordsList, previousWords} = get();
        const words = wordsList.filter(word => !previousWords.includes(word));
        const randomIndex = Math.floor(Math.random() * words.length);
        const randomWord = words[randomIndex];
        set({previousWords: [...previousWords, randomWord]});
        return randomWord;
    },
    addPreviousWord: (word: string) => set({previousWords: [...get().previousWords, word]}),
    nextGame: () => {
        const {clearLetters, clearCurrentWord, clearWords} = get();
        clearLetters();
        clearCurrentWord();
        clearWords();
        const randomWord = get().getRandomWord();
        set({guessWord: randomWord});
    }
}));

export default useAppStore;
