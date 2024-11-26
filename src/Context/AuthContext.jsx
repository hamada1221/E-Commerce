import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState } from "react";


export let Auth = createContext(null)

export default function AuthContextProvider({ children }) {

    let [isLogin, setLogin] = useState(null)

    //handle fresh
    useEffect(() => {
        if (localStorage.getItem('userToken'))
            setLogin(jwtDecode(localStorage.getItem('userToken')))
    }, [])



    return <Auth.Provider value={{ isLogin, setLogin }}>
        {children}
    </Auth.Provider>
}
