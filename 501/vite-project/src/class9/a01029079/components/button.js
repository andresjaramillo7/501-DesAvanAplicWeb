import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ text, onClick, type = "button" }) => {
    return (_jsx("button", { onClick: onClick, type: type, className: "btn", children: text }));
};
export default Button;
