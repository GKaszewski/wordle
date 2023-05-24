import {FC, PropsWithChildren, useEffect} from "react";
import useAppStore from "../state/appStore.ts";

const Modal: FC<PropsWithChildren> = ({children}) => {
    const {showModal, setShowModal} = useAppStore();

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setShowModal(false);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    if (!showModal) return <></>;

    return <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full m-4">
                {children}
            </div>
        </div>
    </div>
}

export default Modal;
