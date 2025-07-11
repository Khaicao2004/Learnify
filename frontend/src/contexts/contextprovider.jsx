import { createContext, useContext, useState } from "react";

const stateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider = ({children}) => {
    const [user, _setUser] = useState(() => {
        const userData = localStorage.getItem("USER");
        return userData ? JSON.parse(userData) : null;
    });
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        }else{
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    const setUser = (user) => {
        _setUser(user);
        if (user) {
            localStorage.setItem('USER', JSON.stringify(user));
        }else{
            localStorage.removeItem('USER');
        }
    }
    return (
        <stateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext);