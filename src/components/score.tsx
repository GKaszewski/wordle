import useAppStore from "../state/appStore.ts";

const Score = () => {
    const { score } = useAppStore();
    return <p className="font-semibold text-2xl">Score: {score}</p>
}

export default Score;
