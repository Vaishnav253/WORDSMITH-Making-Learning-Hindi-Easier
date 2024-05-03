import { Button } from "@mui/material"
import { display, width } from "@mui/system"


function LandingScreen() {
    return (
        <div >


            <div style={{ backgroundImage: 'url(/LandingBackdrop2.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: "100vh", }} className="flex p-40 mb-40">
                <div>
                    <p className="text-6xl font-bold text-white mt-20 mb-20 " style={{ width: 700 }}>Welcome to Your Personalized Language Learning Journey!</p>
                    <Button variant="contained" style={{ backgroundColor: '#ffffff', color: '#039982', fontWeight: 600 }}>Get Started</Button>
                </div>
            </div>


            {/* What our platform offers */}
            <div className="flex px-80 mb-40 justify-center items-center">
                <img src="/section2Pic.png" style={{ height: 600 }} alt="" />
                <div className="ml-40">
                    <p className="text-5xl font-bold mb-20 mt-10  ">Know What Our
                        Platform Offers ?</p>
                    <div className="bg-white shadow-lg flex items-center rounded-xl p-3 mb-5 " style={{ width: 550 }}>
                        <img src="/1.png" />
                        <div className="ml-3 mt-3, mb-2">
                            <p className="text-2xl font-bold text-[#052D54]">Vocabulary Building</p>
                            <p className="text-[#687174] mt-3">Learn New Words based on your interests</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg flex items-center rounded-xl p-3 mb-5">
                        <img src="/2.png" />
                        <div className="ml-3 mt-3, mb-2">
                            <p className="text-2xl font-bold text-[#052D54]">Grammar Correction</p>
                            <p className="text-[#687174] mt-3">Correct your grammar on the go</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg flex items-center rounded-xl p-3 mb-5">
                        <img src="/3.png" />
                        <div className="ml-3 mt-3, mb-2">
                            <p className="text-2xl font-bold text-[#052D54]">Translation</p>
                            <p className="text-[#687174] mt-3">Get accurate translations to any dialect</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg flex items-center rounded-xl p-3 mb-5">
                        <img src="/4.png" />
                        <div className="ml-3 mt-3, mb-2">
                            <p className="text-2xl font-bold text-[#052D54]">Dictionary and weekly activities</p>
                            <p className="text-[#687174] mt-3">Engaging weekly activities and fun learning</p>
                        </div>
                    </div>



                </div>
            </div>








            {/* why choose us section */}
            <div>
                <center><p className="text-4xl font-bold " style={{ marginBottom: 120 }}>Why Choose us ?</p></center>
                <div className="flex flex-col items-center">
                    <div className="flex ">
                        <div className="mr-40 w-70 mb-20" style={{ width: 600 }}>
                            <center><img src="/star.png" style={{ height: 90, marginBottom: 40 }} /></center>
                            <p className="font-bold my-6" style={{ fontSize: 23 }}>Comprehensive Features</p>
                            <p >Our website offers a comprehensive set of features for improving English language skills, including grammar correction, vocabulary building, reading and writing assistance, and a dictionary.</p>
                        </div>
                        <div className=" w-70 mb-20" style={{ width: 600 }}>
                            <center><img src="/target.png" style={{ height: 90, marginBottom: 40 }} /></center>
                            <p className="font-bold my-6" style={{ fontSize: 23 }}>Targeted Learning</p>
                            <p>Our website offers targeted learning resources specifically designed for people studying for exams like GRE and those who want to learn English but are illiterate. </p>
                        </div>
                    </div>
                    <div className="flex" >
                        <div className="mr-40 w-70 mb-20" style={{ width: 600 }}>
                            <center><img src="/ui.png" style={{ height: 90, marginBottom: 40 }} /></center>
                            <p className="font-bold my-6" style={{ fontSize: 23 }}>User-Friendly Interface</p>
                            <p>Our website features a user-friendly interface designed to make it easy for users to access and utilize our language learning resources. Navigation is intuitive and straightforward, with clear instructions provided in a language known by the user.</p>
                        </div>
                        <div className=" w-70 mb-20" style={{ width: 600 }}>
                            <center><img src="/gamification.png" style={{ height: 90, marginBottom: 40 }} /></center>
                            <p className="font-bold my-6" style={{ fontSize: 23 }}>Gamified learning</p>
                            <p>Our website offers gamified learning to make the language learning process more engaging and enjoyable. Users can track their progress and earn rewards for completing exercises and achieving learning milestones.</p>
                        </div>
                    </div>
                </div>
            </div>




            {/* Some Random section */}
            <div className="flex px-80 mt-40">
                <img src="/randomsecPic.png" alt="" />
                <div className="ml-20">
                    <p className="text-5xl font-bold mb-10 mt-20 ">Learn how to read, write and speak fluently!</p>
                    <p>
                        With our grammar correction, vocabulary building, and reading and writing assistance tools, you can strengthen your language proficiency and gain confidence in your communication abilities. Our user-friendly interface and gamified learning approach make language learning fun and accessible, allowing you to reach your fluency goals at your own pace.
                    </p>
                    <Button variant="contained" style={{ backgroundColor: '#039982', marginTop: 50 }}>Get Started</Button>
                </div>
            </div>








            {/* Newsletter */}
            <div className="mt-20">
                <center> <p style={{ fontSize: 20, marginBottom: 40 }}><span className="font-bold text-[#039982]" style={{ fontSize: 24 }}>Subscribe</span> to our Newsletter and become a part of a rapidly growing learning community</p></center>
                <center> <div style={{ backgroundColor: "white", height: 70, width: 800, display: "flex", alignItems: "center", borderRadius: 10, border: "solid 1px #D9E0E6", marginTop: 25, padding: 30 }}>
                    <form>
                        <input type='text' style={{ height: 40, width: 600, marginRight: 55, flex: 0.9, border: 0, outline: 0 }} />
                        <Button variant="contained" style={{ backgroundColor: '#00A58A', marginRight: -30 }}>Submit</Button>
                    </form>
                </div></center>
            </div>

            <div className="p-20"></div>

        </div>
    )
}

export default LandingScreen