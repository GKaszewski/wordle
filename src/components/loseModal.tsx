import Modal from "./modal.tsx";
import useAppStore from "../state/appStore.ts";

const LoseModal = () => {
    const {setShowModal, nextGame} = useAppStore();
    const handleButtonClick = () => {
        setShowModal(false);
        nextGame();
    }

    return <Modal>
        <div className="p-4 flex flex-col items-center justify-center space-y-2">
            <p className="text-lg font-semibold">You've lost!</p>
            <button type="button"
                    onClick={handleButtonClick}
                    className="px-4 py-2 bg-gray-700 md:hover:bg-gray-600 rounded-lg shadow-lg text-white">Try again?
            </button>
        </div>
    </Modal>
}

export default LoseModal;
