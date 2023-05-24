import {useEffect, useMemo} from "react";
import {getWords} from "../utils.ts";
import useAppStore from "../state/appStore.ts";

const WordsLoader = () => {
    const {setWordsList, setGuessWord, setFetchingWords, wordsList: wordsDb, getRandomWord} = useAppStore();

    const cachedWords = useMemo(async () => {
        setFetchingWords(true);
        const _words = await getWords();
        setWordsList(_words);
        setFetchingWords(false);
    }, [setFetchingWords, setWordsList]);

    useEffect(() => {
        if (!wordsDb.length) return;
        setGuessWord(getRandomWord());
    }, [cachedWords, setGuessWord, wordsDb, getRandomWord]);

    return <></>
}

export default WordsLoader;
