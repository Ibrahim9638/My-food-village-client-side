import React, { createContext } from 'react';

const AuthProvider = ({children}) => {
    const authInfo = {}
    const AuthContext = createContext(null)
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;