
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import Router from "next/router";

export default function SignUp({ setLogin, popUpHandler, lang,details }) {

    const [wordArr, setWordArr] = useState(["Create an Account", "Already have an account?", "Login",])


    useEffect(() => {

        const token = getCookie("token");
        console.log(token)
        if (token) {
            fetch("http://localhost:4000/verify", {
                headers: {
                    "Content-Type": "application/json",

                },
                method: "POST",
                body: JSON.stringify({
                    token
                })
            }).then((res) => {
                return res.json();
            }).then((data) => {

                if (data.flag === true) {
                    Router.push("/landing")
                }
            })
        }


        // fetch("http://localhost:4000/translate", {
        //     headers: {
        //         "Content-Type": "application/json",

        //     },
        //     method: "POST",
        //     body: JSON.stringify({
        //         words:wordArr,
        //         lang:"hi"
        //     })
        // }).then((res) => {
        //     return res.json();
        // }).then((data) => {

        //     setWordArr(data)
        // })




    }, [])


    return (

        <div style={{ padding: "0px 250px 100px 250px " }}>

            <div className="py-8">
                <div>
                    <h1 style={{ fontSize: "30px", fontWeight: "bold", padding: "2px 2px 2px 0px" }}>{wordArr[0]}</h1>
                </div>
                <div>
                    {wordArr[1]} <span style={{ cursor: "pointer" }} onClick={setLogin}>{wordArr[2]}</span>
                </div>
                <div style={{ padding: "10px 0px 10px 0px" }}>
                    Social Login
                </div>
                <div className="mb-4">
                    <span style={{ display: "inline-block", width: "200px", height: "2px", backgroundColor: "grey" }}></span> <span style={{ paddingTop: "10px", display: "inline-block" }}>Or</span> <span style={{ display: "inline-block", width: "220px", height: "2px", backgroundColor: "grey" }}></span>
                </div>
                <div style={{ width: "100%" }}>

                    <form onSubmit={popUpHandler}>

                        <div className="flex">
                            <div style={{ paddingRight: "10px" }}>
                                <input style={{ backgroundColor: "#F3F6F8", padding: "10px", width: "100%", borderRadius: "6px", width: "100%" }} placeholder="First name" />
                            </div>

                            <div>
                                <input style={{ backgroundColor: "#F3F6F8", padding: "10px", width: "100%", borderRadius: "6px", width: "100%" }} placeholder="First name" />
                            </div>
                        </div>

                        <div className="py-5">
                            <input placeholder="Email" style={{ backgroundColor: "#F3F6F8", padding: "10px", width: "100%", borderRadius: "6px" }} />

                        </div>

                        <div>

                            <input placeholder="Passowrd" style={{ backgroundColor: "#F3F6F8", padding: "10px", width: "100%", borderRadius: "6px" }} />

                        </div>

                        <div className="py-5">

                            <button style={{ backgroundColor: "#00C1A2", padding: "10px", width: "100%", color: "white" }}>Create Account</button>

                        </div>

                        <div>
                            By continuing,you agree to Terms of Service and Privacy Policy
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )



}