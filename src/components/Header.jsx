import {useState} from 'react'
//icons
//import {GiCupcake} from 'react-icons/gi'
import {BiMenuAltRight} from 'react-icons/bi'
import {MdClose} from 'react-icons/md'

import {BsInstagram, BsWhatsapp, BsFacebook} from 'react-icons/bs';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50'>
        <div className='xl:w-1/6 text-center -mt-4'>
            <a href='#' className='font-ephesis text-4xl font-bold relative p-1 text-black'>
                Dolve<span className='text-white'>Vita</span> 
                <span className='text-red-400 text-5xl'>.</span>{" "}
                {/* <GiCupcake className='absolute -left-3 -bottom-4 text-primary -z-10'/> */}
            </a>
        </div>
        <nav className={`text-white fixed w-[80%] md:[40%] xl:w-full h-full ${showMenu ? "left-0": "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-300 z-50`}>
            <a href='#' className=' bg-fuchsia-400 text-white py-2 px-4 rounded-xl'>Home</a>
            <a href='#' className=''>Nosotros</a>
            <a href='#' className=''>Servicios</a>
            <a href='#' className=''>Productos</a>
        </nav>
        <div className='w-[20%]'>
{/*         <ul className='flex items-center gap-4 hidden'>
                    <li>
                        <a href='#' className='bg-primary text-white p-4 rounded-full block'><BsInstagram /></a>
                    </li>
                    <li>
                        <a href='#' className='bg-primary text-white p-4 rounded-full block'><BsFacebook /></a>
                    </li>
                    <li>
                        <a href='#' className='bg-primary text-white p-4 rounded-full block'><BsWhatsapp /></a>
                    </li>
                </ul> */}
        </div>
        <button className='xl:hidden text-2xl p-2' onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <MdClose/> : <BiMenuAltRight/>}
        </button>
    </header>
  )
}

export default Header