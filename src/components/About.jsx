import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


function About() {
  return (
    <div>
        <div style={{backgroundImage: 'url(/about1.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: "95vh", width:"100vw", position:"relative" ,display:"flex",justifyContent:"center"}}>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column",alignItems:"center",marginTop:100,padding:100, position:"absolute"}}>
            <img src="/logoWhite.png" style={{height:140}}/>
            <p className='text-4xl font-bold text-white mt-8'>A bit about us and the team</p>
            <p className='text-white mt-5 text-center mb-7'>We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game</p>
            <div className='flex'>
             <div className='mx-3'><InstagramIcon style={{color:'white'}}/></div>   
             <div className='mx-3'><FacebookIcon style={{color:'white'}}/></div>
             <div className='mx-3'><TwitterIcon style={{color:'white'}}/></div>
            </div>
        </div>
        </div>


        <div style={{backgroundImage: 'url(/about2.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: "95vh", width:"100vw", position:"relative" ,display:"flex",justifyContent:"center"}}>
        <div style={{display:"flex", justifyContent:"center", flexDirection:"column",alignItems:"center",marginTop:100,padding:100, position:"absolute"}}>
            <p className='text-4xl font-bold text-white mt-8'>The Team</p>
            <p className='text-white mt-5 text-center mb-7'>We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game</p>
        <div className='flex'>
            <div className='bg-white rounded-xl flex p-5 mr-8'>
                <img src="/placeholder.png"/>
                <div className='ml-8'>        
                 <p className='text-xl font-bold mb-5'>Name</p>
                <p>About</p></div>
            </div>
            <div className='bg-white rounded-xl flex p-5 mr-8'>
                <img src="/placeholder.png"/>
                <div className='ml-8'>        
                 <p className='text-xl font-bold mb-5'>Name</p>
                <p>About</p></div>
            </div>
            <div className='bg-white rounded-xl flex p-5 mr-8'>
                <img src="/placeholder.png"/>
                <div className='ml-8'>        
                 <p className='text-xl font-bold mb-5'>Name</p>
                <p>About</p></div>
            </div>
            <div className='bg-white rounded-xl flex p-5'>
                <img src="/placeholder.png"/>
                <div className='ml-8'>        
                 <p className='text-xl font-bold mb-5'>Name</p>
                <p>About</p></div>
            </div>
            
        </div>
</div>
</div>

    </div>
  )
}

export default About