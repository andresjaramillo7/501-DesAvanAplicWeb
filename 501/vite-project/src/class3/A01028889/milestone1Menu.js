import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Button from "./button";
import Class1 from "../../class1/A01028889/class1";
import Class2 from "../../class2/A01028889/class2";
import Class3 from "./class3";
import "./Styles/menu.css";
function Milestone1Menu() {
    const [selectedClass, setSelectedClass] = useState('');
    if (selectedClass === 'class1')
        return _jsx(Class1, {});
    if (selectedClass === 'class2')
        return _jsx(Class2, {});
    if (selectedClass === 'class3')
        return _jsx(Class3, {});
    return (_jsxs("div", { className: "menu-container", children: [_jsx("h1", { className: "menu-title", children: "Milestone 1" }), _jsxs("ul", { className: "menu-list", children: [_jsx("li", { children: _jsx(Button, { label: "Go Class 1", onClick: () => setSelectedClass('class1') }) }), _jsx("li", { children: _jsx(Button, { label: "Go Class 2", onClick: () => setSelectedClass('class2') }) }), _jsx("li", { children: _jsx(Button, { label: "Go Class 3", onClick: () => setSelectedClass('class3') }) })] }), _jsx("a", { href: "/src/A01028889/home.html", className: "class1-button-link", children: "Go to A01028889's Milestones Menu" })] }));
}
export default Milestone1Menu;
