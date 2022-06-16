import React, { useEffect} from 'react'

export const NavSide = ({btnToggleRef, appContainerRef, menuSideRef, smoothScroll }) => {
    // console.log('jalan componenet navside')
    useEffect(() => {
        let headerHeight = document.querySelector("#header").offsetHeight
        if (window.pageYOffset > headerHeight) {
            btnToggleRef.current.classList.remove("-translate-x-12")
        }

        window.addEventListener('scroll', (e) => {

            if (window.pageYOffset > headerHeight) {
                btnToggleRef.current.classList.remove("-translate-x-12")
            } else {
                btnToggleRef.current.classList.add("-translate-x-12")
            }
        })
    }, [btnToggleRef])

    const clickNavHandler = (e) => {
        smoothScroll(e.currentTarget)
        e.preventDefault()
    }

    const menuSideShow = () => {
        let appEl = appContainerRef.current
        if (window.innerWidth < 768) {
            menuSideRef.current.classList.toggle('opacity-0')
            menuSideRef.current.classList.toggle('-translate-x-[11.375rem]')
            appEl.classList.toggle('translate-x-[11.375rem]')
        } else {
            menuSideRef.current.classList.toggle('opacity-0')
            menuSideRef.current.classList.toggle('-translate-x-[6.57rem]')
            appEl.classList.toggle('translate-x-[6.57rem]')
        }
    }
    return (
        <>
            <div ref={menuSideRef} id="menu-side" className="bg-zinc-50 pl-16 h-full z-20  transition-all duration-500 fixed -translate-x-[11.375rem] opacity-0">
                <ul id="menu-side-ul" className="px-6 pt-6 text-zinc-600">
                    <li className="mb-3 transition-all duration-500 hover:text-zinc-900"><a onClick={clickNavHandler} href="#gallery">GALLERY</a></li>
                    <li className="mb-3 transition-all duration-500 hover:text-zinc-900"><a onClick={clickNavHandler} href="#profile">PROFILE</a></li>
                    {/* <li className="mb-3 transition-all duration-500 hover:text-zinc-900"><a onClick={clickNavHandler} href="#services">SERVICES</a></li> */}
                    <li className="mb-3 transition-all duration-500 hover:text-zinc-900"><a onClick={clickNavHandler} href="#contact">CONTACT</a></li>
                </ul>
            </div>
            <div className='bg-zinc-50 fixed z-20 lg:h-full md:h-full h-0 lg:flex md:flex flex flex-col justify-center items-center w-16 text-zinc-600'>
                <div className='hidden lg:block md:block'>
                    <div className='my-3 cursor-pointer hover:text-zinc-900 transition-all duration-200'>
                        <i className='fa-brands fa-facebook-square fa-2xl'></i>
                    </div>
                    <div className='my-3 cursor-pointer hover:text-zinc-900 transition-all duration-200'>
                        <i className='fa-brands fa-instagram-square fa-2xl'></i>
                    </div>
                    <div className='my-3 cursor-pointer hover:text-zinc-900 transition-all duration-200'>
                        <i className='fa-brands fa-github-square fa-2xl'></i>
                    </div>
                    <div className='my-3 cursor-pointer hover:text-zinc-900 transition-all duration-200'>
                        <i className='fa-brands fa-linkedin fa-2xl'></i>
                    </div>
                </div>
                <div ref={btnToggleRef} onClick={menuSideShow} className="md:bg-zinc-50 bg-zinc-900 absolute z-20 top-0 cursor-pointer text-zinc-50 md:text-zinc-600 md:hover:text-zinc-900 transition-all duration-200 mt-6 -translate-x-12 md:p-0 p-2 md:rounded-none rounded-sm">
                    <i className="fa-solid fa-bars fa-2xl"></i>
                </div>
            </div>
        </>
    )
}

export default NavSide