import { height } from "@mui/system"
import Footer from "../../components/Footer"
import About from "../../components/About"
import Navbar from "../../components/Navbar"



function index() {


  return (
    <div >
      <Navbar />
      <div style={{ backgroundImage: "url('/texture.png')", backgroundRepeat: 'repeat' }}>
        <About />
      </div>
      <Footer />
    </div>
  )
}



export default index