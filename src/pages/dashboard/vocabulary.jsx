import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { use, useEffect, useState } from "react";
import closeButton from "../../../public/close.svg";
import Image from "next/image";
import axios from "axios";
import { getCookie } from "cookies-next";
import Router from "next/router";

import SidebarHindi from "../../components/HindiComponents/SidebarHindi";
import NavbarHindi from "../../components/HindiComponents/NavbarHindi";





function vocabulary() {


  async function translate(e) {

    console.log(e.currentTarget.innerHTML)

    try {
      const reqs = await fetch("http://localhost:5000/translate", {
        headers: {
          "Content-Type": "application/json",

        },
        method: "POST",
        body: JSON.stringify({
          data: e.currentTarget.innerHTML
        })
      })

      const translatedWord = await reqs.json();
      setTranslatedWord(translatedWord.data)
    }
    catch (e) {

    }



  }

  const [translatedWord, setTranslatedWord] = useState("")
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState([]);
  const [familiar, setFamiliar] = useState(0);
  const [notFamiliar, setNotFamiliar] = useState(0);
  const [words, setWords] = useState([{ word: "", defs: [] }]);
  const [count, setCount] = useState(0);
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    //fetch from database
    // const d = fetchfromdatabase();

    const lang = getCookie("language")
    setLanguage(lang)
    setLoading(true)

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

        if (data.flag !== true) {
          Router.push("/")
        }
        else {

          fetch("http://localhost:4000/getTopics", {
            headers: {
              "Content-Type": "application/json",

            },
            method: "POST",
            body: JSON.stringify({
              token
            })
          }).then(res => {

            return res.json()
          }).then(datas => {
            console.log(datas)
            setData(datas.topics)

            if (selected.length > 0) {
              console.log("selected", selected.length)
              try {
                fetchWordsBasedOnTopics()
              }
              catch(e){
                
              }
            } else {
              fetch("http://localhost:4000/getWords", {
                headers: {
                  "Content-Type": "application/json",

                },
                method: "POST",
                body: JSON.stringify({
                  token,
                })
              }).then(res => {

                return res.json()
              }).then(datas => {


                setWords(datas.wordsToDisplay);
                console.log(datas.wordsToDisplay)
                setLoading(false)
              })

            }

          })




        }



      })
    }




  }, [selected]);


  function fetchWordsBasedOnTopics() {

    setCount(0);
    setLoading(true)
    const token = getCookie("token");

    fetch("http://localhost:4000/getWordsFromTopic", {
      headers: {
        "Content-Type": "application/json",

      },
      method: "POST",
      body: JSON.stringify({
        token,
        topic: selected
      })
    }).then(res => {

      return res.json()

    }).then(datas => {
      console.log

      setWords(() => {
        return datas.wordsToDisplay
      });

      setLoading(() => {
        return false
      })
    })

  }


  function refetchWords() {


    if (count >= words.length - 2) {
      if (selected.length > 0) {
        fetchWordsBasedOnTopics();
        return;
      }
      setCount(0);
      setLoading(true)
      console.log("Refecthing")
      const token = getCookie("token");
      fetch("http://localhost:4000/getWords", {
        headers: {
          "Content-Type": "application/json",

        },
        method: "POST",
        body: JSON.stringify({
          token,
        })
      }).then(res => {

        return res.json()
      }).then(datas => {

        setWords(datas.wordsToDisplay);
        setLoading(false)
        console.log(datas.wordsToDisplay)
      })



    }


  }


  function known() {

    if (loading) {
      return;
    }
    const token = getCookie("token");
    fetch("http://localhost:4000/storeWords", {
      headers: {
        "Content-Type": "application/json",

      },
      method: "POST",
      body: JSON.stringify({
        token,
        word: words[count]["word"]
      })
    }).then(res => {

      return res.json()
    }).then(datas => {

      setCount(() => {
        return count + 1
      })


      setFamiliar(familiar + 1)

      refetchWords()

      console.log(datas.wordsToDisplay)
    })




  }

  function notknown() {
    if (loading) {
      return;
    }
    setNotFamiliar(notFamiliar + 1)
    setCount(() => {
      return count + 1
    })

    refetchWords()


  }

  // console.log(data);

  function addInterest(e) {
    setSelected(() => {
      if (selected.includes(e.target.value)) {
        return selected;
      }
      return [...selected, e.target.value];
    });



  }

  function removeInterest(e) {
    console.log(e.currentTarget.value);
    setSelected(() => {
      return selected.filter((value) => {
        return value != e.target.value;
      });
    });
  }

  return (
    <div>
      {language === "Hindi" ? <NavbarHindi /> : <Navbar />}
      <div style={{display:"block",textAlign:'center',padding:"30px",backgroundColor:"white"}}>{translatedWord}</div>
      <div className='flex'>
        {language === "Hindi" ? <SidebarHindi /> : <Sidebar />}
        <div
          style={{
            backgroundImage: "url('/texture.png')",
            backgroundRepeat: "repeat",
            flex: 1,
          }}
        >
           
          <div style={{ display: "flex" }}>
          
            <div
              style={{
                margin: "auto",
                marginTop: 80,
                width: 1100,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className='bg-white p-20 m-5 rounded-[20px] '
                style={{ border: "solid 1px #D9E0E6" }}
              >
                <p className='text-5xl font-bold mb-12'><span onMouseEnter={translate}>{loading ? "Loading" : words[count]["word"]? words[count]["word"]:""}</span></p>
                <p className='text-2xl mb-20' onMouseEnter={translate}>{loading ? "Loading " : words[count].defs?words[count].defs:""}</p>

              </div>
              <div
                className='flex justify-between m-5'
                style={{ margin: "40", marginTop: 40}}
              >
                <button
                  onClick={known}
                  style={{
                    backgroundColor: "#039982",
                    padding: 13,
                    color: "white",
                    width: 530,
                    borderRadius: 10,
                    marginRight: 40,
                  }}
                >
                  Know
                </button>
                <button
                  style={{
                    backgroundColor: "#DD6D6D",
                    padding: 13,
                    color: "white",
                    width: 530,
                    borderRadius: 10,
                  }}
                  onClick={notknown}
                >
                  Dont Know
                </button>
              </div>
              <div className='flex justify-center mt-12 '>
                <div
                  className='bg-white rounded-[10px] p-8 mr-12 flex-col justify-center items-center'
                  style={{ border: "solid 1px #D9E0E6" }}
                >
                  <p className='text-[#039982] font-bold text-3xl mb-9'>
                    {familiar}
                  </p>
                  <p>Known Words</p>
                </div>
                <div
                  className='bg-white rounded-[10px] p-8 flex-col justify-center items-center'
                  style={{ border: "solid 1px #D9E0E6" }}
                >
                  <p className='text-[#DD6D6D] font-bold text-3xl mb-9'>
                    {notFamiliar}
                  </p>
                  <p>Unknown Words</p>
                </div>
              </div>
            </div>

            <div
              className='bg-white p-10 rounded-[20px] mt-20 mr-20 flex-col'
              style={{ border: "solid 1px #D9E0E6" }}
            >
              <p className="mb-5 font-medium text-xl">Selected Interests</p>
              <div className='flex  text-white' style={{ flexWrap: "wrap", width: 200 }}>
                {selected.map((value, index) => {
                  return (
                    <button
                      onClick={removeInterest}
                      value={value}
                      className='p-2 mr-5 text-sm mb-3'
                      style={{
                        backgroundColor: "#00C1A2",
                        borderRadius: "10px",
                      }}
                      key={index}
                    >
                      {value}{" "}
                      <Image
                        style={{ display: "inline-block", marginLeft: "2px" }}
                        src={closeButton}
                        alt='close'
                      />
                    </button>
                  );
                })}
              </div>
              <hr className="mt-5"></hr>
              <p className="mb-5 mt-8 font-medium text-xl">Interests</p>
              <div style={{ flexWrap: "wrap", width: 200 }}>
                {data.map((value, index) => {
                  return (
                    <button
                      key={index}
                      onClick={addInterest}
                      value={value}
                      className='p-2 mr-5 mb-3 text-sm text-white'
                      style={{ backgroundColor: "#00C1A2", borderRadius: "10px" }}
                    >
                      {value}
                    </button>)

                })}


              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default vocabulary;
