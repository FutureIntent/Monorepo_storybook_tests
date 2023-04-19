import { createContext, useContext } from 'react';

interface AuthContextProps {
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextProps>({
    isAuthenticated: false,
});

export const useAuthContext = (): AuthContextProps => useContext(AuthContext);

export default AuthContext;
