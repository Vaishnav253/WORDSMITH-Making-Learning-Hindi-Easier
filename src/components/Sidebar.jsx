import Link from 'next/link';


function Sidebar() {



  return (
    <div style={{width:"350px", backgroundColor:"white",height:"95vh",zIndex:1,position:"relative"}} className="shadow-xl">
        <ul className="p-20 ml-6"d>
        {/* <li className="mb-7"><Link href="/dashboard/introduction">Introduction</Link></li> */}

     

            <li className="mb-7 hover:font-medium hover:text-[#039982] hover:cursor-pointer" style={{ fontSize: "20px" }}><Link href="/dashboard/vocabulary">Vocabulary Building</Link></li>
            <li className="mb-7 hover:font-medium hover:text-[#039982] hover:cursor-pointer" style={{ fontSize: "20px" }}><Link href="/dashboard/grammar">Grammar Correction</Link></li>
            <li className="mb-7 hover:font-medium hover:text-[#039982] hover:cursor-pointer" style={{ fontSize: "20px" }}><Link href="/dashboard/translation">Translation</Link></li>
            <li className="mb-7 hover:font-medium hover:text-[#039982] hover:cursor-pointer" style={{ fontSize: "20px" }}><Link href="/dashboard/dictionary">Dictionary</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar