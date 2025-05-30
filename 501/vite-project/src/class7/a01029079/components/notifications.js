import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
const RealTimeNotifications = () => {
    const [notifications, setNotifications] = useState([]);
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8080');
        ws.onmessage = (event) => {
            const message = event.data;
            setNotifications((prev) => [...prev, message]);
        };
        return () => {
            ws.close();
        };
    }, []);
    return (_jsxs("div", { children: [_jsx("h2", { children: "Real-Time Notifications" }), _jsx("a", { href: "../../../../../src/class3/a01029079/public/menu3.html", className: "class-button-link", children: "Go to Menu" }), _jsx("ul", { children: notifications.map((note, index) => (_jsx("li", { children: note }, index))) })] }));
};
export default RealTimeNotifications;
