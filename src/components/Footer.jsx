import React from 'react'
import { RiSendPlaneFill } from 'react-icons/ri'
import { BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs'

export const Footer = () => {
    return (
        <footer className=' p-8 xl:p-20'>
            <div className='flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-between border-b border-gray-200 pb-8'>
                {/**Logo */}
                <a href='#' className='font-ephesis text-4xl font-bold relative p-1 text-[#e30052]'>
                    Dolve<span className='text-white'>Vita</span>
                    <span className='text-red-400 text-5xl'>.</span>{" "}
                    {/* <GiCupcake className='absolute -left-3 -bottom-4 text-primary -z-10'/> */}
                </a>
                <ul className='flex items-center gap-4'>
                    <li>
                        <a href='#' className='bg-primary text-white p-4 rounded-full block'><BsInstagram /></a>
                    </li>
                    <li>
                        <a href='#' className='bg-primary text-white p-4 rounded-full block'><BsFacebook /></a>
                    </li>
                    <li>
                        <a href='#' className='bg-primary text-white p-4 rounded-full block'><BsWhatsapp /></a>
                    </li>
                </ul>
            </div>
            <div className="mt-10 flex flex-col gap-8">
                <h3 className='text-lg font-bold text-white'>Pasteleria</h3>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0'>
                    <div className='flex flex-col md:flex-row items-center gap-8'>
                        <a href='#' className='text-gray-300 hover:text-white transition-colors'>Home</a>
                        <a href='#' className='text-gray-300 hover:text-white transition-colors'>Nosotros</a>
                        <a href='#' className='text-gray-300 hover:text-white transition-colors'>Servicios</a>
                        <a href='#' className='text-gray-300 hover:text-white transition-colors'>Productos</a>
                    </div>
                    <button className="w-auto font-bold bg-primary text-white rounded-xl py-2 px-8">
                        Contactenos
                    </button>
                </div>
            </div>
            <div className='mt-20'>
                <p className='text-gray-300 text-center'>Animas S.A - Sosa Sebastian- All rights Reserved</p>
            </div>
        </footer>
    )
}
