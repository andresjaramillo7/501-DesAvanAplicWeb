import { jsx as _jsx } from "react/jsx-runtime";
const InputField = ({ type, placeholder, value, onChange }) => {
    return (_jsx("input", { type: type, placeholder: placeholder, value: value, onChange: onChange, style: { padding: '10px', margin: '10px 0' } }));
};
export default InputField;
