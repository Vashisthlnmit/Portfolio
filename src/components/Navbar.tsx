import Link from "next/link"
export default function Navbar(){
    return(
        <>
        <nav className="bg-gray-900 p-4">
            <div className="container mx-auto flex flex-wrap ">
                <div className="lg:flex flex-grow " id="navbar">
                    <div className='flex flex-wrap'>
                        <div className='m-3 w-20 '>
                            <Link href="" className='text-sm uppercase font-bold leading-snug text-white hover:opacity-75'>Home</Link>
                        </div>
                        <div className='m-3 w-20'>
                            <Link href="" className='text-sm uppercase font-bold leading-snug text-white hover:opacity-75'>ABOUTME</Link>
                        </div>
                        <div className='m-3 w-20 '>
                            <Link href="" className='text-sm uppercase font-bold leading-snug text-white hover:opacity-75'>VASHISTH</Link>
                        </div>
                        <div className='m-3 w-24'>
                            <Link href="" className='text-sm uppercase font-bold leading-snug text-white hover:opacity-75'>CONTACT ME</Link>
                        </div>
                        <div className='m-3 w-20 '>
                            <Link href="" className='text-sm uppercase font-bold leading-snug text-white hover:opacity-75'>PROJECTS</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}