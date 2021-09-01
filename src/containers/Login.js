import LoginView from "../components/Login"
import axios from "axios"

const Login = ()=>{

    const onLogin = ()=>{
        axios.post("/api/login")
            .then(_=>{
                console.log("info ok")
            })
            .catch(_=>{
                console.log("info error")
            })
        console.log("onLogin")
    }

    return <LoginView onLogin={onLogin}/>
}

export default Login