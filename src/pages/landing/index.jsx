import { height } from "@mui/system"
import Footer from "../../components/Footer"
import LandingScreen from "../../components/LandingScreen"
import Navbar from "../../components/Navbar"
import { getCookie } from "cookies-next"
import LandingScreenHindi from "../../components/HindiComponents/LandingHindi"
import NavbarHindi from "../../components/HindiComponents/NavbarHindi"
import FooterHindi from "../../components/HindiComponents/FooterHindi"
import { useEffect } from "react"
import { useState } from "react"


function index() {

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {

    return null;
  }


  
  return (
    <>
      {getCookie("language") == "Hindi" ?

        <div >
          <NavbarHindi />
          <div style={{ backgroundImage: "url('/texture.png')", backgroundRepeat: 'repeat' }}>
            <LandingScreenHindi />
          </div>
          <FooterHindi />
        </div> :


        <div >
          <Navbar />
          <div style={{ backgroundImage: "url('/texture.png')", backgroundRepeat: 'repeat' }}>
            <LandingScreen />
          </div>
          <Footer />
        </div>}




    </>





  )
}



export default index