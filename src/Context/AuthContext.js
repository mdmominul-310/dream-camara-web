import { createContext } from 'react';
import UseFirebase from '../hooks/Usefirebase';

export const AllAuth = createContext()
const AuthContext = ({ children }) => {
    const allContext = UseFirebase();

    return (
        <AllAuth.Provider value={allContext}>
            {children}
        </AllAuth.Provider>
    );
};

export default AuthContext;