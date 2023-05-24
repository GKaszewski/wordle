import {useEffect} from "react";
import useAppStore from "../state/appStore.ts";

const WordsHandler = () => {
    const {addWord, clearCurrentWord, currentWord} = useAppStore();

    useEffect(()=>{
        if (currentWord.length === 0) return;
        if (currentWord.length === 5) {
            addWord(currentWord);
            clearCurrentWord();
        }
    }, [currentWord]);

    return <></>
}

export default WordsHandler;
