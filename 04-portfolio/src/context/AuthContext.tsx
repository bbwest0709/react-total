import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

// context에 저장될 값들의 타입 정의
interface AuthContextType {
    isLoggedIn: boolean;
    userId: string | null;
    login: (email: string) => void;
    logout: () => void;
}

// 자식 컴포넌트에 전달되는 props 타입 선언
interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!cookies.user);
    const [userId, setUserId] = useState<string | null>(cookies.user || null);

    useEffect(() => {
        if (cookies.user) {
            setIsLoggedIn(true);
            setUserId(cookies.user);
        } else {
            setIsLoggedIn(false);
            setUserId(null);
        }
    }, [cookies.user])

    const login = (email: string) => {
        const expireDate = new Date(new Date().getTime() + 2 * 60 * 1000);
        setCookie('user', { id: email }, { path: '/', expires: expireDate })
        setIsLoggedIn(true);
        setUserId(email);
    }

    const logout = () => {
        removeCookie('user', { path: '/' })
        setIsLoggedIn(false);
        setUserId(null);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, userId, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// context가 null인 경우 에러가 발생 -> 구조 분해 할당 전에 먼저 context 값을 가져옴
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("에러");
    return context;
}