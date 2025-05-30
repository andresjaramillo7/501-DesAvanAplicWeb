import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useReducer } from "react";
import InputField from "./inputField";
import Button from "./button";
import "./Styles/login.css";
import WelcomeMessage from "./welcomeMessage";
// Set up initial state
const initialState = {
    name: "",
    password: "",
    isLoggedIn: false,
    error: "", // Added error state
};
// Reducer
function reducer(state, action) {
    switch (action.type) {
        case "SET_NAME":
            return { ...state, name: action.payload, error: "" }; // Clear error on input change
        case "SET_PASSWORD":
            return { ...state, password: action.payload, error: "" }; // Clear error on input change
        case "LOGIN":
            if (state.name === "admin" && state.password === "password") {
                return { ...state, isLoggedIn: true, error: "" }; // Successful login
            }
            else {
                return { ...state, error: "Invalid username or password" }; // Set error message
            }
        default:
            return state;
    }
}
function Login() {
    const [state, dispatch] = useReducer(reducer, initialState);
    if (state.isLoggedIn) {
        return _jsx(WelcomeMessage, { name: state.name });
    }
    return (_jsxs("div", { className: "login-container", children: [_jsx("h1", { children: "Login" }), _jsx(InputField, { type: "text", placeholder: "Name", value: state.name, onChange: (e) => dispatch({ type: "SET_NAME", payload: e.target.value }) }), _jsx(InputField, { type: "password", placeholder: "Password", value: state.password, onChange: (e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value }) }), _jsx(Button, { label: "Login", onClick: () => dispatch({ type: "LOGIN" }) }), state.error && _jsx("p", { className: "error-message", children: state.error }), " "] }));
}
export default Login;
