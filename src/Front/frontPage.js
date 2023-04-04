import "./frontPage.css"
import netflix from "../image/Logonetflix.png"
import { useState } from "react"
import Login from "./login"


const FrontPage = () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://149695847.v2.pressablecdn.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg")`,
                backgroundPosition: "center center",
                height: "100vh"
            }}>

                <div id="nav_bar">
                    <img src={netflix} alt="logo" id="netflix_logo" />
                    <button id={show ? "none" : "signin_btn"} onClick={() => setShow(true)}>Sign In</button>
                </div>

                <div id="div_Center">
                    {show ?
                        <Login /> :
                        <><h1>Unlimited films,TV programmes and more.</h1>

                            <h3>Watch anywhere. Cancel at any time.</h3>

                            <h4>Ready to watch?Enter your email to create or restart your membership.</h4>

                            <div id="email_box">
                                <input type="email" placeholder="Email Address" />
                                <button onClick={() => setShow(true)}>GET STARTED</button>
                            </div></>}

                </div>

            </div>
        </>
    )
}

export default FrontPage;