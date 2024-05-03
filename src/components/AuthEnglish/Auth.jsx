
import Image from "next/image";
import pic from "../../../public/pic.svg"
import logo from "../../../public/logo.svg";
import { useState } from "react";
import styles from "./SigIn.module.css";
import Router from "next/router";
import Interest from "../Interest.jsx";
import Login from "@/components/AuthEnglish/Login.jsx";
import SignUp from "@/components/AuthEnglish/SignUp.jsx"
import { setCookie } from 'cookies-next';

export default function SignIn({ lang }) {

    const [details, setDetails] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })





    const [toLogin, setToLoginIn] = useState(false);
    const [popUp, setPopUp] = useState(false);


    function setLogin() {

        setToLoginIn(true)
        setPopUp(false)
    }

    function setLoginOff() {

        setToLoginIn(false);
    }


    async function loginHandler(e) {

        e.preventDefault()
        //Check credential is correct
        const email = e.target["0"].value;
        const password = e.target["1"].value;


        const loginRequest = await fetch("http://localhost:4000/login", {
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: "POST",
            body: JSON.stringify({
                email,
                password
            }),

        })

        const userLogin = await loginRequest.json();
        console.log(userLogin)
        if (userLogin.flag == true) {
            setCookie("token", userLogin.token)
            Router.push("/landing")
        }
        else {
            console.log("invalid")
        }



    }

    async function popUpHandler(e) {

        e.preventDefault()
        //Check credentials are correct
        // setPopUp(true)
        const firstName = e.target["0"].value;
        const lastName = e.target["1"].value;
        const email = e.target["2"].value;
        const password = e.target["3"].value;


        setDetails({
            firstName,
            lastName,
            email,
            password
        })

        console.log("Wokrs")
        // const registerRequest = await fetch("http://localhost:4000/register", {
        //     headers: {
        //         "Content-Type": "application/json",
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     method: "POST",
        //     body: JSON.stringify({
        //         firstName,
        //         lastName,
        //         email,
        //         password
        //     }),

        // })

        // const userRegsiter = await registerRequest.json();

        // if (userRegsiter.flag === true) {
        //     setPopUp(true);
        // }

        setPopUp(true);
    }

    return (
        <>

            {popUp && <div className={styles.modal}></div>}

            {
                popUp && <div style={{ position: "absolute", left: "700px", zIndex: 2 }}>

                    <Interest setLogin={setLogin} details={details}></Interest>
                </div>
            }

            <div className="flex" style={{ height: "100%", overflow: "hidden" }}>

                <div style={{ backgroundColor: "#FFFFFF", width: "50%", boxShadow: "0px 10px 37px -1px #00000040" }}>

                    <div style={{ padding: "90px 0px 50px 90px" }}>
                        <Image src={logo} width={70} height={70} />
                        <div style={{ fontSize: "10px", position: "relative", left: "10px" }}>Wordsmith</div>
                    </div>

                    {!toLogin && <SignUp  setLogin={setLogin} popUpHandler={popUpHandler} lang={lang}></SignUp>

                    }

                    {toLogin && <div > <Login setLoginOff={setLoginOff} loginHandler={loginHandler}></Login></div>}



                </div>

                <div style={{ width: "50%" }}>
                    <Image alt="logo" style={{ width: "1000px", zIndex: "-1", position: "absolute", objectFit: "cover", backgroundRepeat: "no-repeat", overflow: "hidden", height: "100%" }} src={pic} />

                </div>
            </div>


        </>

    )



}