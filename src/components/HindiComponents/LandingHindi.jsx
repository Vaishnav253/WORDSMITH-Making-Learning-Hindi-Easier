import { Button } from "@mui/material"
import { display, width } from "@mui/system"


function LandingScreenHindi() {
    return (
        <div >


            <div style={{ backgroundImage: 'url(/LandingBackdrop2.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: "100vh", }} className="flex p-40 mb-40">
                <div>
                    <p className="text-6xl font-bold text-white mt-20 mb-20 " style={{ width: 700 }}>आपकी वैयक्तिकृत भाषा सीखने की यात्रा में आपका स्वागत है!</p>
                    <Button variant="contained" style={{ backgroundColor: '#ffffff', color: '#039982', fontWeight: 600 }}>शुरू हो जाओ</Button>
                </div>
            </div>


            {/* What our platform offers */}
            <div className="flex px-80 mb-40 justify-center items-center">
                <img src="/section2Pic.png" style={{ height: 600 }} alt="" />
                <div className="ml-40">
                    <p className="text-5xl font-bold mb-20 mt-10  ">जानिए हमारा प्लेटफॉर्म क्या ऑफर करता है</p>
                    <div className="bg-white shadow-lg flex items-center rounded-xl p-3 mb-5 " style={{ width: 550 }}>
                        <img src="/1.png" />
                        <div className="ml-3 mt-3, mb-2">
                            <p className="text-2xl font-bold text-[#052D54]">शब्दावली भवन</p>
                            <p className="text-[#687174] mt-3">अपनी रुचियों के आधार पर नए शब्द सीखें</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg flex items-center rounded-xl p-3 mb-5">
                        <img src="/2.png" />
                        <div className="ml-3 mt-3, mb-2">
                            <p className="text-2xl font-bold text-[#052D54]">व्याकरण सुधार</p>
                            <p className="text-[#687174] mt-3">चलते-चलते अपना व्याकरण ठीक करें</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg flex items-center rounded-xl p-3 mb-5">
                        <img src="/3.png" />
                        <div className="ml-3 mt-3, mb-2">
                            <p className="text-2xl font-bold text-[#052D54]">अनुवाद</p>
                            <p className="text-[#687174] mt-3">किसी भी बोली का सटीक अनुवाद प्राप्त करें</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg flex items-center rounded-xl p-3 mb-5">
                        <img src="/4.png" />
                        <div className="ml-3 mt-3, mb-2">
                            <p className="text-2xl font-bold text-[#052D54]">शब्दकोश और साप्ताहिक गतिविधियों</p>
                            <p className="text-[#687174] mt-3">व्यस्त साप्ताहिक गतिविधियों और मजेदार सीखने</p>
                        </div>
                    </div>



                </div>
            </div>








            {/* why choose us section */}
            <div>
                <center><p className="text-4xl font-bold " style={{ marginBottom: 120 }}>हमें क्यों चुनें ?</p></center>
                <div className="flex flex-col items-center">
                    <div className="flex ">
                        <div className="mr-40 w-70 mb-20" style={{ width: 600 }}>
                            <center><img src="/star.png" style={{ height: 90, marginBottom: 40 }} /></center>
                            <p className="font-bold my-6" style={{ fontSize: 23 }}>व्यापक विशेषताएं</p>
                            <p >Oआपकी वेबसाइट व्याकरण सुधार, शब्दावली निर्माण, पढ़ने और लिखने में सहायता, और एक शब्दकोश सहित अंग्रेजी भाषा कौशल में सुधार के लिए सुविधाओं का एक व्यापक सेट प्रदान करती है।</p>
                        </div>
                        <div className=" w-70 mb-20" style={{ width: 600 }}>
                            <center><img src="/target.png" style={{ height: 90, marginBottom: 40 }} /></center>
                            <p className="font-bold my-6" style={{ fontSize: 23 }}>लक्षित शिक्षा</p>
                            <p>हमारी वेबसाइट विशेष रूप से जीआरई जैसी परीक्षाओं के लिए अध्ययन कर रहे लोगों और जो अंग्रेजी सीखना चाहते हैं, लेकिन अनपढ़ हैं, के लिए डिज़ाइन किए गए लक्षित शिक्षण संसाधन प्रदान करती है।</p>
                        </div>
                    </div>
                    <div className="flex" >
                        <div className="mr-40 w-70 mb-20" style={{ width: 600 }}>
                            <center><img src="/ui.png" style={{ height: 90, marginBottom: 40 }} /></center>
                            <p className="font-bold my-6" style={{ fontSize: 23 }}>उपभोक्ता - अनुकूल इंटरफ़ेस</p>
                            <p>हमारी वेबसाइट में एक उपयोगकर्ता-अनुकूल इंटरफ़ेस है, जिसे उपयोगकर्ताओं के लिए हमारे भाषा सीखने के संसाधनों तक पहुँच और उपयोग करना आसान बनाने के लिए डिज़ाइन किया गया है। उपयोगकर्ता द्वारा ज्ञात भाषा में दिए गए स्पष्ट निर्देशों के साथ नेविगेशन सहज और सीधा है।</p>
                        </div>
                        <div className=" w-70 mb-20" style={{ width: 600 }}>
                            <center><img src="/gamification.png" style={{ height: 90, marginBottom: 40 }} /></center>
                            <p className="font-bold my-6" style={{ fontSize: 23 }}>गेमिफाइड लर्निंग</p>
                            <p>भाषा सीखने की प्रक्रिया को अधिक आकर्षक और मनोरंजक बनाने के लिए हमारी वेबसाइट गेमिफाइड लर्निंग प्रदान करती है। उपयोगकर्ता अपनी प्रगति को ट्रैक कर सकते हैं और अभ्यास पूरा करने और सीखने के मील के पत्थर हासिल करने के लिए पुरस्कार अर्जित कर सकते हैं।</p>
                        </div>
                    </div>
                </div>
            </div>




            {/* Some Random section */}
            <div className="flex px-80 mt-40">
                <img src="/randomsecPic.png" alt="" />
                <div className="ml-20">
                    <p className="text-5xl font-bold mb-10 mt-20 ">धाराप्रवाह पढ़ना, लिखना और बोलना सीखें!</p>
                    <p>
                    हमारे व्याकरण सुधार, शब्दावली निर्माण, और पढ़ने और लिखने में सहायता उपकरणों के साथ, आप अपनी भाषा प्रवीणता को मजबूत कर सकते हैं और अपनी संचार क्षमताओं में विश्वास हासिल कर सकते हैं। हमारे उपयोगकर्ता के अनुकूल इंटरफेस और गेमिफाइड लर्निंग दृष्टिकोण भाषा सीखने को मज़ेदार और सुलभ बनाते हैं, जिससे आप अपनी गति से अपने प्रवाह लक्ष्यों तक पहुँच सकते हैं।
                    </p>
                    <Button variant="contained" style={{ backgroundColor: '#039982', marginTop: 50 }}>शुरू हो जाओ</Button>
                </div>
            </div>








            {/* Newsletter */}
            <div className="mt-20">
                <center> <p style={{ fontSize: 20, marginBottom: 40 }}><span className="font-bold text-[#039982]" style={{ fontSize: 24 }}>सदस्यता लें</span> हमारे न्यूज़लेटर के लिए और तेजी से बढ़ते सीखने वाले समुदाय का हिस्सा बनें</p></center>
                <center> <div style={{ backgroundColor: "white", height: 70, width: 800, display: "flex", alignItems: "center", borderRadius: 10, border: "solid 1px #D9E0E6", marginTop: 25, padding: 30 }}>
                    <form>
                        <input type='text' style={{ height: 40, width: 600, marginRight: 55, flex: 0.9, border: 0, outline: 0 }} />
                        <Button variant="contained" style={{ backgroundColor: '#00A58A', marginRight: -30 }}>जमा करे</Button>
                    </form>
                </div></center>
            </div>

            <div className="p-20"></div>

        </div>
    )
}

export default LandingScreenHindi