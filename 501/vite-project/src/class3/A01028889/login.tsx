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
function reducer(state: typeof initialState, action: any) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload, error: "" }; // Clear error on input change
    case "SET_PASSWORD":
      return { ...state, password: action.payload, error: "" }; // Clear error on input change
    case "LOGIN":
      if (state.name === "admin" && state.password === "password") {
        return { ...state, isLoggedIn: true, error: "" }; // Successful login
      } else {
        return { ...state, error: "Invalid username or password" }; // Set error message
      }
    default:
      return state;
  }
}

function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (state.isLoggedIn) {
    return <WelcomeMessage name={state.name} />;
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <InputField
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={(e) => dispatch({ type: "SET_NAME", payload: e.target.value })}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })}
      />
      <Button label="Login" onClick={() => dispatch({ type: "LOGIN" })} />
      {state.error && <p className="error-message">{state.error}</p>} {/* Display error */}
    </div>
  );
}

export default Login;
