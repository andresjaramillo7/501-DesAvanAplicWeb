import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import './Styles/slotmachine.css';
const symbolsList = ['🍒', '💎', '🍀'];
const getSymbols = (symbols) => {
    const randomSymbols = [...symbols, ...symbols, ...symbols].sort(() => Math.random() - 0.5);
    return randomSymbols.slice(0, 3);
};
const SlotMachine = () => {
    const [currentSymbols, setCurrentSymbols] = useState([]);
    const [win, setWin] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const fetchDogImage = async () => {
        try {
            const res = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await res.json();
            setImageUrl(data.message);
        }
        catch (error) {
            console.error('Error: ', error);
            setImageUrl(null);
        }
    };
    const spin = async () => {
        setLoading(true);
        const newSymbols = getSymbols(symbolsList);
        setCurrentSymbols(newSymbols);
        const isWin = newSymbols[0] === newSymbols[1] && newSymbols[1] === newSymbols[2];
        setWin(isWin);
        await fetchDogImage();
        setLoading(false);
    };
    return (_jsxs("div", { className: "slot-machine", children: [_jsx("h1", { className: "slot-machine-title", children: "Slot Machine" }), _jsx("div", { className: "slot-machine-symbols", children: currentSymbols.length > 0 ? (currentSymbols.map((symbol, index) => (_jsx("span", { className: "slot-machine-symbol", children: symbol }, index)))) : (_jsx("p", { className: "slot-machine-message", children: "Press \"Spin\" to start!" })) }), _jsx("button", { className: "slot-machine-button", onClick: spin, disabled: loading, children: loading ? 'Spinning...' : 'Spin' }), imageUrl && (_jsxs("div", { className: "slot-machine-image", children: [_jsx("p", { className: `slot-machine-result ${win ? 'win' : 'lose'}`, children: win ? '🎉 You won!' : '😢 Didn`t win, but you got a doggy photo:' }), _jsx("img", { src: imageUrl, alt: "Random dog", className: "dog-image" })] }))] }));
};
export default SlotMachine;
