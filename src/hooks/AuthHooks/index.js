import 
    React, 
    {
        useState,
        useContext,
        createContext,
    }
from 'react';

export const AuthContext = createContext({})

function AuthContextProvider({children}){
    const [user,setUser] = useState({})

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}


function useAuth(){
    const context = useContext(AuthContext)
    return context;
}

export {
    AuthContextProvider,
    useAuth,
}