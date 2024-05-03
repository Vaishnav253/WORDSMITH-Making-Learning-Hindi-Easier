import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"
import { getCookie } from "cookies-next"
import SidebarHindi from "../../components/HindiComponents/SidebarHindi"
import NavbarHindi from "../../components/HindiComponents/NavbarHindi"
import { useEffect } from "react";
import { Button } from "@mui/material"
import { useState } from "react";

function translation() {

  const [translatedWord,setTranslatedWord]=useState('')


  async function translate(e) {
  
    // console.log(e.currentTarget.innerHTML)

    try {
   
      const reqs = await fetch("http://localhost:5000/translate", {
        headers: {
          "Content-Type": "application/json",

        },
        method: "POST",
        body: JSON.stringify({
          data: e
        })
      })

      const translatedWord = await reqs.json();
      console.log(translatedWord)
      setTranslatedWord(translatedWord.data)
    }
    catch (e) {
      console.log(e)
    }



  }

  const [inputvalue,setInputValue]= useState('')

  const [language,setLanguage] = useState("English")
  useEffect(()=>{
    const lang = getCookie("language")
    setLanguage(lang);
  })

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // function submit()
  // {
  //   translate(inputvalue);
  // }




  return (
    <div>
      {language === "Hindi" ? <NavbarHindi /> : <Navbar />}
      <div className='flex'>
        {language === "Hindi" ? <SidebarHindi /> : <Sidebar />}
        <div
          style={{
            backgroundImage: "url('/texture.png')",
            backgroundRepeat: "repeat",
            flex: 1,
          }}
        > <div style={{ display: "flex", backgroundColor: "white", display: 'relative', padding: 10, margin:20, border: "solid 1px #D9E0E6", borderRadius: 10, width: "100%" }}>        <input value={inputvalue} onChange={handleChange} type='text' placeholder="Enter your word here" style={{ outline: 0, border: 0, width: "93%" }}></input>
        <Button onClick={(e)=>{e.preventDefault();
        translate(inputvalue)}}  variant="contained" style={{ backgroundColor: '#00A58A', flex: 0.1 }}>Submit</Button></div>
                    <div className="mt-20 bg-white rounded-xl p-20 shadow-xl " style={{margin:20, width:'90%'}}>
                    <div ><p className="font-bold mt-5 "style={{color:"black"}}>Translation : </p><p style={{paddingTop:30}}>{translatedWord}</p></div>
                    </div>
                    </div>
                  </div>
                  </div>
  )
}

export default translation