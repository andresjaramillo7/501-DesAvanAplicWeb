import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Class4 from "../../class4/A01028889/class4";
import Class5 from "../../class5/A01028889/class5";
import Class6 from "../../class6/A01028889/class6";
import Button from "../../class2/A01028889/button";
import './Styles/class.css';
import "./Styles/menu.css";
function Milestone2Menu() {
    const [selectedClass, setSelectedClass] = useState('');
    if (selectedClass === 'class4')
        return _jsx(Class4, {});
    if (selectedClass === 'class5')
        return _jsx(Class5, {});
    if (selectedClass === 'class6')
        return _jsx(Class6, {});
    return (_jsxs("div", { className: "menu-container", children: [_jsx("h1", { className: "menu-title", children: "Milestone 2" }), _jsx("h3", { className: "Participants", children: "A01028889 - A01029079" }), _jsxs("ul", { className: "menu-list", children: [_jsx("li", { children: _jsx(Button, { label: "Go Class 4", onClick: () => setSelectedClass('class4') }) }), _jsx("li", { children: _jsx(Button, { label: "Go Class 5", onClick: () => setSelectedClass('class5') }) }), _jsx("li", { children: _jsx(Button, { label: "Go Class 6", onClick: () => setSelectedClass('class6') }) })] }), _jsx("a", { href: "/src/A01028889/home.html", className: "class-button-link", children: "Go to A01028889's Milestones Menu" })] }));
}
export default Milestone2Menu;
