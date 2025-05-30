import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Datos simulados para mostrar destructuring y map
const topics = [
    { title: "Arrow Functions", link: "#arrow-functions" },
    { title: "Destructuring", link: "#destructuring" },
    { title: "Template Literals", link: "#template-literals" },
    { title: "Modules", link: "#modules" },
];
// Componente funcional con arrow function (ES6+)
const Clase1 = () => {
    // Función para saludar usando destructuring + template literals
    const greet = ({ name, age }) => `Hola, ${name}! Tienes ${age} años.`;
    const user = { name: "Estudiante", age: 21 };
    return (_jsxs("div", { children: [_jsx("h1", { children: "Clase 1: Repaso de ES6+" }), _jsx("p", { children: greet(user) }), _jsx("h2", { children: "Temas cubiertos" }), _jsx("ul", { children: topics.map(({ title, link }) => (_jsx("li", { children: _jsx("a", { href: link, children: title }) }, title))) }), _jsx("p", { children: _jsx("a", { href: "/src/class3/A01029143/pages/Menu.html", children: "Volver al men\u00FA" }) })] }));
};
export default Clase1;
