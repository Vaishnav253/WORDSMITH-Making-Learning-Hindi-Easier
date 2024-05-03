

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


function FooterHindi() {
  return (
    <div className="h-80 bg-[#039780] relative">
        <img src="/logoWhite.png" style={{height:90 ,marginLeft:70,marginTop:50, position:'absolute'}}/>
        <div className=" flex flex-row text-[#FFFFFF] absolute mt-16 right-72">

       
        <div className="mx-40" style={{borderRight:"solid 1"}}>
        <ul>
            <li className="p-1">घर</li>
            <li className="p-1">डैशबोर्ड</li>
            <li className="p-1">आपकी गतिविधियां</li>
            <li className="p-1">हमारे बारे में</li>
            <li className="p-1">दान देना</li>
        </ul>
        </div>
    <div>
    <ul>
            <li className="p-1">शब्दावली निर्माण</li>
            <li className="p-1">व्याकरण सुधार</li>
            <li className="p-1">अनुवाद</li>
            <li className="p-1">शब्दकोष</li>
        </ul>

    </div>
    </div>
    <div className=" flex absolute bottom-8 right-12">
    <div className="mx-3"> <InstagramIcon style={{color:'white'}}/></div>
  
          <div className="mx-3"> <FacebookIcon style={{color:'white'}}/></div>
          <div className="mx-3"> <TwitterIcon style={{color:'white'}}/></div>
    </div>
   

 
    </div>
  )
}

export default FooterHindi