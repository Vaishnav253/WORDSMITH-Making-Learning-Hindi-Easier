
import { useState } from "react";
import style from "./Interest.module.css";
import Image from "next/image";

import closeButton from "../../public/close.svg";
import {
    getCookie
} from "cookies-next";
import Router from "next/router";
export default function Interest({ setLogin,details }) {

    const [interest, setInterest] = useState([])


    async function storeTopic() {

        details.topics = interest
        const registerRequest = await fetch("http://localhost:4000/register", {
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: "POST",
            body: JSON.stringify(details),

        })

        const userRegsiter = await registerRequest.json();
        console.log(userRegsiter);

        if(userRegsiter.flag === true){
          
            setLogin(true)
        }

    }

    function addInterest(e) {

        setInterest(() => {
            if (interest.includes(e.target.value)) {
                return (interest)
            }
            return [...interest, e.target.value]
        })


    }


    function removeInterest(e) {

        console.log(e.currentTarget.value)
        setInterest(() => {

            return (
                interest.filter((value) => {
                    return value != e.target.value
                })
            )
        })

    }

    function addUserInputInterest(e) {

        if (e.key == "Enter") {

            setInterest(() => {
                if (interest.includes(e.target.value)) {
                    return (interest)
                }
                return [...interest, e.target.value]
            })
        }

    }


    return (
        <div style={{ height: "100%" }}>

            <div style={{ paddingTop: "200px" }}>


                <div className={style.interest_box}>
                    <div className="my-5">Before we <span style={{ color: "#00C1A2" }}>Continue</span>, Tell us a bit about your interests....</div>

                    <div>
                        <input onKeyUp={addUserInputInterest} placeholder="Search for anything" style={{ width: "100%", height: "40px", padding: "10px" }} />
                    </div>

                    <div className="my-10 px-5 py-10 border-solid border-grey border-2">
                        <div className="flex  text-white justify-start items-start">
                            {interest.map((value, index) => {

                                return (
                                    <button onClick={removeInterest} value={value} className="p-2 mr-5 text-sm " style={{ backgroundColor: "#00C1A2", borderRadius: "10px" }} key={index}>
                                        {value} <Image style={{ display: "inline-block", marginLeft: "2px" }} src={closeButton} alt="close" />
                                    </button>
                                )
                            })}
                        </div>

                        <div className="my-7">
                            Popular Interests:
                        </div>
                        <div className="flex text-white">
                            <button onClick={addInterest} value="politics" className="p-2 mr-5 text-sm " style={{ backgroundColor: "#00C1A2", borderRadius: "10px" }}>Politics</button>
                            <button onClick={addInterest} value="AI" className="p-2 mr-5 text-sm " style={{ backgroundColor: "#00C1A2", borderRadius: "10px" }}>AI</button>
                        </div>

                    </div>
                    <div className="text-right">
                        <button onClick={storeTopic} style={{ color: "#039982", padding: "5px 15px 5px 15px", borderRadius: "10px", border: "2px solid #039982", fontWeight: "bold" }}>Next</button>
                    </div>
                </div>



            </div>

        </div>
    )



}