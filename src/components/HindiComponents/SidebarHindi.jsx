import Link from 'next/link';

function Sidebar() {
  return (
    <div style={{width:"350px", backgroundColor:"white",height:"95vh",zIndex:1,position:"relative"}} class="shadow-xl">
        <ul class="p-20 ml-6"d>
        <li class="mb-7"><Link href="/dashboard/introduction">परिचय</Link></li>
            <li class="mb-7"><Link href="/dashboard/vocabulary">शब्दावली निर्माण</Link></li>
            <li class="mb-7"><Link href="/dashboard/grammar">व्याकरण सुधार</Link></li>
            <li class="mb-7"><Link href="/dashboard/translation">अनुवाद</Link></li>
            <li class="mb-7"><Link href="/dashboard/dictionary">शब्दकोष</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar