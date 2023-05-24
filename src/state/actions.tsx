export const nextGame = (set: any, get: any) => {
    const {clearLetters, clearCurrentWord, clearWords, clearAllLetters} = get();
    clearLetters();
    clearCurrentWord();
    clearWords();
    clearAllLetters();
    const randomWord = get().getRandomWord();
    set({guessWord: randomWord});
}

export const removeWordFromLetters = (set: any, get: any) => {
    const {letters} = get();
    const newLetters = letters.slice(0, letters.length - 5);
    set({letters: newLetters});
}

export const revertLastWordFromLetters = (get: any) => {
    const { currentWord, clearCurrentWord, removeWordFromLetters, deleteMissedLetter, deleteGuessedLetter, deleteExistingLetter} = get();
    const letters = currentWord.split('');
    letters.forEach((letter: string) => {
        deleteMissedLetter(letter);
        deleteGuessedLetter(letter);
        deleteExistingLetter(letter);
    });
    clearCurrentWord();
    removeWordFromLetters();
}

export const getRandomWord = (set: any, get: any) => {
    const {wordsList, previousWords} = get();
    const words = wordsList.filter((word: string) => !previousWords.includes(word));
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    set({previousWords: [...previousWords, randomWord]});
    return randomWord;
}

export const addGuessedLetter = (set: any, get: any, letter: string) => {
    const guessedLetters = get().guessedLetters;
    guessedLetters.set(letter, guessedLetters.get(letter) ? guessedLetters.get(letter) + 1 : 1);
    set({guessedLetters: guessedLetters});
}

export const addMissedLetter = (set: any, get: any, letter: string) => {
    const missedLetters = get().missedLetters;
    missedLetters.set(letter, missedLetters.get(letter) ? missedLetters.get(letter) + 1 : 1);
    set({missedLetters: missedLetters});
}

export const addExistingLetter = (set: any, get: any, letter: string) => {
    const existingLetters = get().existingLetters;
    existingLetters.set(letter, existingLetters.get(letter) ? existingLetters.get(letter) + 1 : 1);
    set({existingLetters: existingLetters});
}

export const deleteGuessedLetter = (set: any, get: any, letter: string) => {
    const guessedLetters = get().guessedLetters;
    if (!guessedLetters.has(letter)) return
    if (guessedLetters.get(letter) <= 1) {
        guessedLetters.delete(letter);
    } else {
        guessedLetters.set(letter, guessedLetters.get(letter) - 1);
    }
    set({guessedLetters: guessedLetters});
}

export const deleteMissedLetter = (set: any, get: any, letter: string) => {
    const missedLetters = get().missedLetters;

    if (!missedLetters.has(letter)) return

    if (missedLetters.get(letter) <= 1) {
        missedLetters.delete(letter);
    } else {
        missedLetters.set(letter, missedLetters.get(letter) - 1);
    }
    set({missedLetters: missedLetters});
}

export const deleteExistingLetter = (set: any, get: any, letter: string) => {
    const existingLetters = get().existingLetters;

    if (!existingLetters.has(letter)) return

    if (existingLetters.get(letter) <= 1) {
        existingLetters.delete(letter);
    } else {
        existingLetters.set(letter, existingLetters.get(letter) - 1);
    }
    set({existingLetters: existingLetters});
}
