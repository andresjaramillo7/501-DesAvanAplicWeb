import { jsx as _jsx } from "react/jsx-runtime";
const Input = ({ type = 'text', placeholder, value, onChange }) => {
    return (_jsx("input", { type: type, placeholder: placeholder, value: value, onChange: onChange, className: "input" }));
};
export default Input;
