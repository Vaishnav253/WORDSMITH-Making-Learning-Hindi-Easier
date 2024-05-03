import { Avatar } from '@mui/material'
import Link from 'next/link';

function Navbar() {
  return (
    <div className="shadow-xl " style={{zIndex:2,position:"relative"}} >
      <div className="flex flex-row justify-between items-center" >
        <img src="/logo.png" style={{height:30, marginLeft:40}} alt="no image"/>
        <div className="flex flex-row p-3 items-center">
        <p className="mx-5 hover:font-medium hover:text-[#039982] hover:cursor-pointer " ><Link href="/landing">Home</Link></p>
        <p className="mx-5 hover:font-medium hover:text-[#039982] hover:cursor-pointer"><Link href="/dashboard">Dashboard</Link></p>
        <p className="mx-5 hover:font-medium hover:text-[#039982] hover:cursor-pointer">Your Activities</p>
        <p className="mx-5 hover:font-medium hover:text-[#039982] hover:cursor-pointer"><Link href="/about">About us</Link></p>
        <p className="mx-5 hover:font-medium hover:text-[#039982] hover:cursor-pointer"><Link href="/dashboard">Donate</Link></p>
        <div className="mx-10"><Avatar src=""/></div>
        </div>
       
      </div>
    </div>
  )
}

export default Navbar