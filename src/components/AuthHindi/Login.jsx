import { useEffect } from "react"
import { getCookie } from "cookies-next"
import Router from "next/router";



export default function Login({ loginHandler, setLoginOff }) {


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
                    Router.push("/dashboard")
                }
            })
        }




    }, [])


    return (
        <div style={{ padding: "0px 250px 100px 250px " }}>

            <div className="py-8">
                <div>
                    <h1 style={{ fontSize: "30px", fontWeight: "bold", padding: "2px 2px 2px 0px" }}>लॉग इन करें</h1>
                </div>
                <div>
                    अब यहां? <span style={{ cursor: "pointer" }} onClick={() => { setLoginOff() }}>साइन अप करें</span>
                </div>
                <div style={{ padding: "10px 0px 10px 0px" }}>
                    सामाजिक लॉगिन
                </div>
                <div className="mb-4">
                    <span style={{ display: "inline-block", width: "200px", height: "2px", backgroundColor: "grey" }}></span> <span style={{ paddingTop: "10px", display: "inline-block" }}>या</span> <span style={{ display: "inline-block", width: "220px", height: "2px", backgroundColor: "grey" }}></span>
                </div>
                <div style={{ width: "100%" }}>
                    <form onSubmit={loginHandler}>

                        <div className="py-5">
                            <input placeholder="ईमेल" style={{ backgroundColor: "#F3F6F8", padding: "10px", width: "100%", borderRadius: "6px" }} />

                        </div>

                        <div>

                            <input placeholder="पासवर्ड" style={{ backgroundColor: "#F3F6F8", padding: "10px", width: "100%", borderRadius: "6px" }} />

                        </div>

                        <div className="py-5">

                            <button style={{ backgroundColor: "#00C1A2", padding: "10px", width: "100%", color: "white" }}>लॉग इन करें</button>

                        </div>

                        <div>
                            जारी रखकर, आप सेवा की शर्तों और गोपनीयता नीति से सहमत होते हैं
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )



}