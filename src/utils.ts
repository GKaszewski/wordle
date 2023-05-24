import wordsFile from './assets/words.txt';

export const getWords = async () => {
    const response = await fetch(wordsFile);
    const text = await response.text();
    const words = text.split('\n');
    return words.map(word => word.trim().toUpperCase());
}
