import React, { useRef } from 'react'
import LogoSvg from './LogoSvg'

export const Header = ({ smoothScroll, headerRef }) => {
    // console.log('jalan componenet header')
    const navRef = useRef()

    const clickNavHandler = (e) => {
        smoothScroll(e.currentTarget)
        e.preventDefault()
    }


    return (
        <>
            <header id="header" ref={headerRef} className='z-10 flex py-10 lg:px-28 md:px-28 px-3 transition-all duration-500 absolute left-0 right-0'>
                <div className='flex-none mr-20'>
                    <a onClick={clickNavHandler} href="#gallery"><LogoSvg /></a>
                </div>
                <nav ref={navRef} className='md:flex justify-start items-center flex-none hidden'>
                    <ul className='flex text-zinc-600'>
                        <li className='mr-3 cursor-pointer hover:text-zinc-900 transition-all duration-200'>
                            <a onClick={clickNavHandler} href="#profile">PROFILE</a>
                        </li>
                        {/* <li className='mr-3 cursor-pointer hover:text-zinc-900 transition-all duration-200'>
                            <a onClick={clickNavHandler} href="#services">SERVICES</a>
                        </li> */}
                        <li className='mr-3 cursor-pointer hover:text-zinc-900 transition-all duration-200'>
                            <a onClick={clickNavHandler} href="#contact">CONTACT</a>
                        </li>

                    </ul>
                </nav>
                <div className='flex justify-end items-center flex-auto'>
                    <button className='bg-zinc-600 hover:bg-zinc-900 transition-all duration-200 text-zinc-50 text-base font-semibold py-1 px-2 rounded cursor-not-allowed opacity-50'>
                        <i className='fa-solid fa-download mr-2'></i>Download CV
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header