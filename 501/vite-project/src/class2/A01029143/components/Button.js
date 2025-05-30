import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ label, onClick }) => {
    return (_jsx("button", { onClick: onClick, style: { padding: '10px 20px', backgroundColor: 'blue', color: 'white' }, children: label }));
};
export default Button;
