import {useCallback, useEffect} from "react";
import useAppStore from "../state/appStore.ts";

const WordsHandler = () => {
    const {
        addWord,
        clearCurrentWord,
        currentWord,
        wordsList,
        revertLastWordFromLetters
    } = useAppStore();

    const validateWord = useCallback(() => {
        if (!wordsList.includes(currentWord)) {
            revertLastWordFromLetters();
            return false;
        }

        return true;
    }, [currentWord, wordsList, revertLastWordFromLetters])

    useEffect(() => {
        if (currentWord.length === 0) return;
        if (currentWord.length === 5) {
            if (!validateWord()) return;
            addWord(currentWord);
            clearCurrentWord();
        }
    }, [currentWord, addWord, clearCurrentWord, validateWord]);

    return <></>
}

export default WordsHandler;
