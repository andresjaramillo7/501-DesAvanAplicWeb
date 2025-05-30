import { jsx as _jsx } from "react/jsx-runtime";
import './Styles/button.css'; // Import the CSS file
const Button = ({ label, onClick }) => {
    return (_jsx("button", { className: "custom-button", onClick: onClick, children: label }));
};
export default Button;
