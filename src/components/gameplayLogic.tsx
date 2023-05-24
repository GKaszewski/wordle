import {useEffect} from "react";
import useAppStore from "../state/appStore.ts";

const GameplayLogic = () => {
    const {words, setWon, guessWord, clearWords, clearLetters, addScore, setShowModal, clearScore, addPreviousWord} = useAppStore();

    useEffect(() => {
        words.forEach((word) => {
            if (word.toUpperCase() === guessWord.toUpperCase()) {
                clearWords();
                clearLetters();
                addScore(1);
                setWon(true);
                setShowModal(true);
                addPreviousWord(guessWord);
                return;
            }
        })

        if (words.length === 6) {
            clearWords();
            clearLetters();
            clearScore();
            setWon(false);
            setShowModal(true);
            addPreviousWord(guessWord);
            return;
        }

    }, [words, addScore, clearLetters, clearScore, clearWords, guessWord, setShowModal, setWon, addPreviousWord])

    return <></>
}

export default GameplayLogic
