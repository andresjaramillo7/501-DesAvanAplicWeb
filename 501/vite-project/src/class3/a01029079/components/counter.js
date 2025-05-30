import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useReducer } from 'react';
const initialState = {
    count: 0,
    history: []
};
function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT': {
            const newCount = state.count + 1;
            return {
                count: newCount,
                history: [...state.history, newCount]
            };
        }
        case 'DECREMENT': {
            const newCount = state.count - 1;
            return {
                count: newCount,
                history: [...state.history, newCount]
            };
        }
        case 'RESET': {
            return {
                count: 0,
                history: [...state.history, 0]
            };
        }
        case 'CLEAR_HISTORY': {
            return { ...state, history: [] };
        }
        default:
            throw new Error('Unknown action type');
    }
}
const AdvancedCounter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return (_jsxs("div", { className: "counter-container", children: [_jsx("h2", { className: "counter-title", children: "Contador con Historial" }), _jsxs("p", { className: "counter-value", children: ["Count: ", state.count] }), _jsxs("div", { className: "counter-buttons", children: [_jsx("button", { className: "btn", onClick: () => dispatch({ type: 'INCREMENT' }), children: "Increment" }), _jsx("button", { className: "btn", onClick: () => dispatch({ type: 'DECREMENT' }), children: "Decrement" }), _jsx("button", { className: "btn", onClick: () => dispatch({ type: 'RESET' }), children: "Reset" }), _jsx("button", { className: "btn", onClick: () => dispatch({ type: 'CLEAR_HISTORY' }), children: "Clear History" }), _jsx("a", { href: "../../../../../src/class3/a01029079/public/menu1.html", className: 'btn', children: " Return " })] }), _jsx("h3", { className: "history-title", children: "Historial" }), state.history.length === 0 ? (_jsx("p", { children: "No hay historial." })) : (_jsx("ul", { className: "history-list", children: state.history.map((val, index) => (_jsxs("li", { className: "history-item", children: ["#", index + 1, ": ", val] }, index))) }))] }));
};
export default AdvancedCounter;
