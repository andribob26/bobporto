import React, { useEffect, useRef, useState, } from 'react'
import { useSelector } from 'react-redux'
import ImageGalerry from './ImageGalerry'
import Isotope from 'isotope-layout'

const Gallery = () => {
    // console.log('jalan componenet gallery')
    const { galleryData } = useSelector(state => state.gallerySlice.galleryData)
    const status = useSelector(state => state.gallerySlice.status)


    //scripts tampilan//
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState('*')
    const btnFilters = useRef()
    useEffect(() => {
        isotope.current = new Isotope('.filter-container', {
            itemSelector: '.filter-item',
            percentPosition: true,
            layoutMode: 'fitRows',
        })

        return () => isotope.current.destroy()
    }, [galleryData])

    useEffect(() => {
        filterKey === '*'
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` })
    }, [filterKey])

    const btnActive = (e) => {
        btnFilters.current.childNodes.forEach((el) => {
            if (el.firstChild.id === e.target.id) {
                el.firstChild.classList.remove("bg-zinc-600")
                el.firstChild.classList.add("bg-zinc-900")
            } else {
                el.firstChild.classList.remove("bg-zinc-900")
                el.firstChild.classList.add("bg-zinc-600")
            }
        })
        if (e.target.id === "all") {
            setFilterKey("*")
        } else {

            setFilterKey(e.target.id)
        }
    }
    //scripts tampilan//






    return (
        <>
            <div className='mb-3 pt-[8.405rem] px-3'>
                <ul ref={btnFilters} className='flex'>
                    <li className='mr-3 flex items-center'>
                        <button onClick={btnActive} id='all' className='bg-zinc-900 hover:bg-zinc-900 transition-all duration-500 text-zinc-50 text-sm font-semibold py-1 px-2 rounded'>
                            ALL
                        </button>
                    </li>
                    <li className='mr-3 flex items-center'>
                        <button onClick={btnActive} id="logo" className='bg-zinc-600 hover:bg-zinc-900 transition-all duration-500 text-zinc-50 text-sm font-semibold py-1 px-2 rounded'>
                            LOGO
                        </button>
                    </li>
                    <li className='mr-3 flex items-center'>
                        <button onClick={btnActive} id="ilustration" className='bg-zinc-600 hover:bg-zinc-900 transition-all duration-500 text-zinc-50 text-sm font-semibold py-1 px-2 rounded'>
                            ILUSTRATION
                        </button>
                    </li>
                </ul>
            </div>
            <div className='filter-container'>
                {

                    status === 'Pending' ?
                        <div className="loading mt-44" data-loading-text="Memuat&nbsp;gallery..."></div>

                        :
                        status === 'Fulfilled' ?
                            galleryData.map((item, index) => {
                                return <ImageGalerry
                                    key={index}
                                    url={item.image}
                                    title={item.title}
                                    desc={item.desc}
                                    category={item.category}
                                />
                            }) :
                            status === "Rejected" && <p className="text-center">kosong</p>

                }

                {/* <ImageGalerry
                    url='assets/images/hunk1.jpg'
                    title='HUNK'
                    subTitle='ILUSTRATION'
                    category='ilustration'
                />
                <ImageGalerry
                    url='assets/images/god.jpg'
                    title='GODZILA'
                    subTitle='ILUSTRATION'
                    category='logo'
                />
                <ImageGalerry
                    url='assets/images/BIRDTONE.jpg'
                    title='BIRD TONE'
                    subTitle='LOGO'
                    category='logo'
                />
                <ImageGalerry
                    url='assets/images/skat.jpg'
                    title='SKATE'
                    subTitle='ILUSTRATION'
                    category='ilustration'
                />
                <ImageGalerry
                    url='assets/images/coffelab.jpg'
                    title='COFFE LAB'
                    subTitle='LOGO'
                    category='logo'
                />
                <ImageGalerry
                    url='assets/images/sco.jpg'
                    title='SCORPION'
                    subTitle='ILUSTRATION'
                    category='ilustration'
                /> */}
            </div>
        </>
    )
}

export default Gallery