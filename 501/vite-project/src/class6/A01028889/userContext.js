import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from 'react';
export const UserContext = createContext({
    user: { role: 'employee' },
    login: () => { },
});
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ role: 'employee' });
    const login = (role) => {
        setUser({ role });
    };
    return (_jsx(UserContext.Provider, { value: { user, login }, children: children }));
};
