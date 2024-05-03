import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"
import axios from "axios";
import { Button } from "@mui/material";
import { getCookie } from "cookies-next";
import SidebarHindi from "../../components/HindiComponents/SidebarHindi";
import NavbarHindi from "../../components/HindiComponents/NavbarHindi";
function grammar() {

  const [question, setQuestion] = useState("Tell us a bit about yourself");
  const [count, setCount] = useState(0)
  const [userInput, setUserInput] = useState("")
  const [error, setErrors] = useState([])
  const [language,setLanguage] = useState("English")
  const handleChange = (event) => {
    setUserInput(event.target.value);
  };


  useEffect(()=>{
    const lang = getCookie("language")
    setLanguage(lang)

  },[])
  const questionlist = ["Tell us a bit about your favourite sport", "Tell us a bit about your favourite pet animal", "How did you celebrate your last Birthday ?", "Tell us a bit about your Hometown", "Tell us a bit about your favourite tourist destination", "Tell us a bit about your favourite Food"]

  function questionHandler() {
    setCount((count % 5) + 1)
    setQuestion(questionlist[count])
  }

  async function CheckErrors() {
    const token = getCookie("token");
    const errorReq = await fetch("http://localhost:4000/grammarCorrection", {
      headers: {
        "Content-Type": "application/json",

      },
      method: "POST",
      body: JSON.stringify({
        token,
        data: userInput
      })
    })

    const errorRes = await errorReq.json();
    console.log(errorRes)
    setErrors(errorRes.uniqueArray);

  }

  console.log(error)

  return (
    <div>
     {language === "Hindi"? <NavbarHindi />: <Navbar/>}
      <div className='flex'>
      {language === "Hindi"? <SidebarHindi />: <Sidebar/>}
        <div
          style={{
            backgroundImage: "url('/texture.png')",
            backgroundRepeat: "repeat",
            flex: 1,
            padding: 40,
          }}
        >
          <div className="flex items-center justify-between mb-10"><p className="text-2xl font-bold mr-10">{question}</p><Button variant="contained" style={{ backgroundColor: "#00A58A", padding: 10, color: "white", borderRadius: 10, }} onClick={questionHandler}>Change Question</Button></div>
          <div style={{ padding: 20, border: "solid 1px #D9E0E6", backgroundColor: "white", borderRadius: 10, }}><textarea value={userInput} onChange={handleChange} placeholder="Enter your Answer here" style={{ border: 0, outline: 0, width: "100%", height: 600 }}></textarea>
            <button style={{ backgroundColor: "#00A58A", padding: 10, color: "white", borderRadius: 10, }} onClick={CheckErrors}>Check for errors</button>
            <div style={{fontWeight:"bold",fontSize:"20px",paddingTop:"40px"}}>Suggestions</div>
            <p className="mt-5">
              {

                error.map((value, index) => {

                  return (
                    <div>
                      <div style={{fontSize:"15px"}}>{index + 1}. {value.message}</div>
                    </div>
                  )

                })
              }
            </p>
          </div>
        </div></div></div>
  )
}

export default grammar