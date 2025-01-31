import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AuthContext=CreateContext("")
export const AuthProvider=(children)=>{

    const [user, setUser] = useState("")
    const navigacio=useNavigate()

    const csrf = () => myAxios.get("/sanctum/csrf-cookie")
 
    const regisztracio = async({ ...adat}) => {
        await csrf();
        try {
            await myAxios.post("/register", adat)
            console.log("Siker!")
            getUser()
        } catch(error) {
            console.log(error)
        }
    };

    const logout = async() => {
        await csrf();
        try {
            await myAxios.post("/logout", adat)
            console.log("Siker!")
            getUser()
            navigacio("/login")
        } catch(error) {
            console.log(error)
        }
    };

    const getUser = async() => {
        const { data } = await myAxios.get("/api/user")
        console.log(data)
        setUser(data)
    };

    return <AuthContext.Provider value={{regisztracio, user, logout}}>
        {{children}}
    </AuthContext.Provider>
}