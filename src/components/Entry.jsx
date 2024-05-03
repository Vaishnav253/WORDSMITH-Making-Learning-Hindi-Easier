
import pic from "../../public/pic.svg"
import Image from "next/image"
import logo from "../../public/logo.svg";
import { useState } from "react";

export default function Entry({lang}) {

    const [language, setLanguage] = useState("Hindi");


    function languageHandler(e) {

        setLanguage(e.target.value)
            

    }


    function setLang(e){
        e.preventDefault()
  
        lang(language);
    }

    return (
        <div className="flex" style={{overflowY:"hidden"}}>

            <div style={{ backgroundColor: "#FFFFFF", width: "50%", boxShadow: "0px 10px 37px -1px #00000040" }}>
                <div style={{ padding: "50px 10px 10px 50px" }}>
                    <div>
                        <Image src={logo} width={70} height={70} />
                        <div style={{ fontSize: "10px", position: "relative", left: "10px" }}>Wordsmith</div>
                    </div>

                    <div style={{ padding: "0px 200px 100px 0px", marginLeft: "100px" }}>
                        <div style={{ padding: "50px 100px 100px 100px" }}>
                            <div style={{ fontSize: "25px", padding: "20px 0px 40px 0px", fontWeight: "bold" }}>
                                <h1>Heyy! Tell us a bit about yourself</h1>
                            </div>

                            <form>
                                <div >
                                    <div className="my-4">Lets start with your name</div>
                                    <input required placeholder="Name" style={{ backgroundColor: "#F3F6F8", padding: "10px", width: "100%", borderRadius: "6px" }} />
                                </div>

                                <div className="my-4">
                                    Choose your native language
                                </div>
                                <div>
                                    <select required onChange={languageHandler} id="countries" multiple className="border border-gray-300  text-sm rounded-lg  block w-full p-2.5 " style={{ backgroundColor: "#F3F6F8" }}>

                                        <option style={{ padding: "5px", textAlign: 'center' }} value="English">English</option>
                                        <option style={{ padding: "5px", textAlign: 'center' }} value="Hindi">Hindi</option>
                                        <option style={{ padding: "5px", textAlign: 'center' }} value="Malayalam">Malayalam</option>
                                        <option style={{ padding: "5px", textAlign: 'center' }} value="Tamil">Tamil</option>
                                    </select>
                                </div>

                                <div className="my-20 text-center">
                                    <button onClick={setLang} style={{ backgroundColor: "#00C1A2", padding: "10px", width: "100%", color: "white" }}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>


            <div style={{ width: "50%" }}>

                <Image alt="logo" style={{ width: "1000px",zIndex:"-1", position:"absolute", objectFit:"cover", backgroundRepeat: "no-repeat",overflow:"hidden",height:"100%" }} src={pic} />
            </div>


        </div>
    )



}