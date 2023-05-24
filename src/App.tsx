import CrosswordGrid from "./components/crosswordGrid.tsx";
import Footbar from "./components/footbar.tsx";
import Keyboard from "./components/keyboard.tsx";
import Score from "./components/score.tsx";
import WordsHandler from "./components/wordsHandler.tsx";
import GameplayLogic from "./components/gameplayLogic.tsx";
import useAppStore from "./state/appStore.ts";
import WinModal from "./components/winModal.tsx";
import LoseModal from "./components/loseModal.tsx";
import Spinner from "./components/spinner.tsx";
import WordsLoader from "./components/wordsLoader.tsx";

function App() {
    const {won, showModal, fetchingWords, guessWord} = useAppStore();

    return (
        <div className="flex gr flex-col justify-center items-center min-h-screen">
            <WordsHandler />
            <GameplayLogic />
            <WordsLoader />
            <h1 className="text-2xl font-bold">WORDLE</h1>
            <Score />
            <span className="mt-8" />
            <CrosswordGrid rows={6} columns={5}/>
            <span className="mt-8" />
            {!showModal && guessWord && <Keyboard />}
            {fetchingWords && <Spinner />}
            <span className="flex-1" />
            {won && <WinModal />}
            {!won && <LoseModal />}
            <Footbar />
        </div>
    )
}

export default App
