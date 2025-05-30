import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useReducer } from 'react';
const initialState = { count: 0 };
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
}
const Clase3 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (_jsxs("div", { className: "clase3-container", children: [_jsx("h1", { className: "clase3-title", children: "Clase 3" }), _jsx("p", { className: "clase3-text", children: " Usando useReducer para hacer una aplicaci\u00F3n de contador" }), _jsxs("div", { className: "counter-box", children: [_jsxs("h2", { className: "counter-value", children: ["Contador: ", state.count] }), _jsxs("div", { className: "counter-buttons", children: [_jsx("button", { onClick: () => dispatch({ type: 'increment' }), children: "Incrementar" }), _jsx("button", { onClick: () => dispatch({ type: 'decrement' }), children: "Decrementar" }), _jsx("button", { onClick: () => dispatch({ type: 'reset' }), children: "Limpiar" })] })] }), _jsx("ul", { className: "menu-list", children: _jsx("li", { children: _jsx("a", { href: "/src/class3/A01029143/pages/Menu.html", children: "Menu" }) }) })] }));
};
export default Clase3;
