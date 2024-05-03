import { Avatar } from '@mui/material'
import Link from 'next/link';

function NavbarHindi() {
  return (
    <div className="shadow-xl " style={{zIndex:2,position:"relative"}} >
      <div className="flex flex-row justify-between items-center" >
        <img src="/logo.png" style={{height:30, marginLeft:40}} alt="no image"/>
        <div className="flex flex-row p-3 items-center">
        <p className="mx-5 hover:font-medium hover:text-[#039982] hover:cursor-pointer " ><Link href="/landing">घर</Link></p>
        <p className="mx-5 hover:font-medium hover:text-[#039982] hover:cursor-pointer"><Link href="/dashboard">डैशबोर्ड</Link></p>
        <p className="mx-5 hover:font-medium hover:text-[#039982] hover:cursor-pointer">आपकी गतिविधियां</p>
        <p className="mx-5 hover:font-medium hover:text-[#039982] hover:cursor-pointer"><Link href="/about">हमारे बारे में</Link></p>
        <p className="mx-5 hover:font-medium hover:text-[#039982] hover:cursor-pointer"><Link href="/dashboard">दान</Link></p>
        <div className="mx-10"><Avatar src=""/></div>
        </div>
       
      </div>
    </div>
  )
}

export default NavbarHindi