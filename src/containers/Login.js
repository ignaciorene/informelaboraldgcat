import LoginView from "../components/Login"
import axios from "axios"
import { useState } from "react"

const Login = ({history}) => {
    const [cuit, cuitFunc] = useState("")

    const onLogin = () => {
        axios.post("/api/login", {
            cuit: cuit
        })
            .then(_=>{
                console.log("info ok")
                console.info(history)
                history.push('/options')
            })
            .catch(_=>{
                console.log("info error")
            })
        console.log("onLogin")
    }

    const onChangeCuit = (e) => {
        cuitFunc(e.target.value)
    }

    return (
        <LoginView
            onChangeCuit={onChangeCuit}
            cuit={cuit}
            onLogin={onLogin}
        />
    )
}

export default Login