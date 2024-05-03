import { useState } from "react"
import Navbar from "../../components/Navbar"
import { Button } from "@mui/material"
import Sidebar from "../../components/Sidebar"
import { getCookie } from "cookies-next";
import SidebarHindi from "../../components/HindiComponents/SidebarHindi";
import NavbarHindi from "../../components/HindiComponents/NavbarHindi";
import { useEffect } from "react";

function dictionary() {

  const [data, setData] = useState(null);
  const [inputvalue, setInputValue] = useState("");
  const [clicked, setClicked] = useState(false);
  const [audio, setAudio] = useState("");

  const [language,setLanguage] = useState("English")
  useEffect(()=>{
    const lang = getCookie("language")
    setLanguage(lang)
  })

  const handleSubmit = async (event) => {
    console.log("im here")
    event.preventDefault();
    await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputvalue}`).then(response => response.json()).then(d => {
      // const da=d[0].meanings[0].definitions[1].definition;
      // console.log(d[0])
      // console.log(d[0]);
      setData(d);
      setAudio(d[0].phonetics[0].audio)
      setClicked(true);
    });

  };

  // function playAudio(){
  // await fetch(`http://voicecup.com/api?key=ZKQ9KBmK8J&q=father`).then(response=>response.json()).then(d=>{
  //   setAudioData(d);
  // })
  // }
  // console.log(audioData);


  function handlePlay() {
    const a = new Audio(audio);
    a.play();
  }


  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      {language === "Hindi" ? <NavbarHindi /> : <Navbar />}
      <div className='flex'>
      {language=== "Hindi"? <SidebarHindi />: <Sidebar/>}
        <div
          style={{
            backgroundImage: "url('/texture.png')",
            backgroundRepeat: "repeat",
            flex: 1, padding: 40
          }}
        >
          <form onSubmit={handleSubmit} ><div style={{ display: "flex", backgroundColor: "white", display: 'relative', padding: 10, border: "solid 1px #D9E0E6", borderRadius: 10, width: "100%" }}>        <input value={inputvalue} onChange={handleChange} type='text' placeholder="Enter your word here" style={{ outline: 0, border: 0, width: "93%" }}></input>
            <Button type="submit" variant="contained" style={{ backgroundColor: '#00A58A', flex: 0.1 }}>Submit</Button></div> </form>
          {data &&
            <div className="mt-20 bg-white rounded-xl p-20 shadow-xl ">

              <div className="flex items-center"> <p className="text-4xl font-bold mb-5">{data[0].word}</p><img src="/sound.png" style={{ height: 30, marginLeft: 30 }} onClick={handlePlay} ></img></div>

              <div><p className="font-bold mt-5">Meaning</p><p>{data[0].meanings[0].definitions[0].definition}</p></div>
              <div><p className="font-bold mt-5">Part of Speech :</p> <p>{data[0].meanings[0].partOfSpeech}</p></div>
              <div><p className="font-bold mt-5">Synonym :</p><p>{data[0].meanings[0].synonyms[0]}</p></div>


              {/* <button >Play</button> */}
              {/* <audio controls="true" preload="none" controlsList="nodownload">
<source src="https://voicecup.com/play?key=YOUR_API_KEY&filename=snL4Nqla_2_esp&filetype=mp4&start=3909.125&duration=5.125&subs_id=55a8c5ec312f9108fc57731c" type="audio/mp4">
<source src="https://voicecup.com/play?key=YOUR_API_KEY&filename=snL4Nqla_2_esp&filetype=webm&start=3909.125&duration=5.125&subs_id=55a8c5ec312f9108fc57731c" type="audio/webm">
</audio> */}
            </div>}
        </div></div>
    </div>
  )
}

export default dictionary