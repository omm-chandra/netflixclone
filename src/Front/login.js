import "./login.css"
import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const register = async (e) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            navigate("/home")
        } catch (error) {
            alert(error.message)
        }
        setRegisterEmail("")
        setRegisterPassword("")
    };

    return (
        <>
            {
                    <div id="box">
                        <h2>Sign In</h2>
                        <input type="email" placeholder="Email" onChange={(event) => { setRegisterEmail(event.target.value) }} value={registerEmail} />
                        <input type="password" placeholder="Password" onChange={(event) => { setRegisterPassword(event.target.value) }} value={registerPassword} />
                        <button onClick={register}>Sign In</button>
                        <div className="children">
                            <p>New to Netflix?</p>
                            <span onClick={register}>Sign Up now.</span>
                        </div>
                    </div> 
            }
        </>
    )
}

export default Login;