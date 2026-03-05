import AuthContext from "./AuthContext";
const AuthProvider = ({children})=>{
    const user = {
        id : 1,
        name : "Vampire",
        email : "vampire@gmail.com"
    }
    return (
        <AuthContext.Provider value={user}>
            {children}

        </AuthContext.Provider>
    )
};

export default AuthProvider;