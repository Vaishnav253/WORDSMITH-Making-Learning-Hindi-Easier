
import AuthHindi from "@/components/AuthHindi/Auth.jsx"
import AuthEnglish from "@/components/AuthEnglish/Auth.jsx"
import Entry from '@/components/Entry.jsx';
import Interest from "@/components/Interest.jsx"
import { useState } from "react";
import { setCookie } from "cookies-next";

export default function Home() {

  const [language, setLanguage] = useState("");
  const [gotLang, setGotLang] = useState(false);

  function languageHandler(lang) {

    setLanguage(lang)
    setGotLang(true)

  }
  console.log(language)
  return (

  
    <div style={{ height: "100%", overflow: "hidden" }}>
        {language.length > 0 ? setCookie("language",language):""}
      {!gotLang && <Entry lang={languageHandler}></Entry>}
      {gotLang && language==="English"?<AuthEnglish lang={language} ></AuthEnglish>:<AuthHindi lang={language} ></AuthHindi>}


    </div>


  )
}

