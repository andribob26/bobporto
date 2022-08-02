import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGallery, getLanguages } from '../../store/slices/gallerySlice'
import ImageGalerry from './ImageGalerry'
import Languages from './Languages'
import Isotope from 'isotope-layout'

const Gallery = () => {
    // console.log('jalan componenet gallery')
    const dispatch = useDispatch()
    const galleryData = useSelector(state => state.gallerySlice.galleryData)
    const languagesData = useSelector(state => state.gallerySlice.languagesData)
    const status = useSelector(state => state.gallerySlice.status)


    //scripts tampilan//
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState('*')
    const btnFilters = useRef()

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


    //lifecycle//

    useEffect(() => {
        dispatch(getAllGallery())
    }, [])


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
                        <button onClick={btnActive} id="web" className='bg-zinc-600 hover:bg-zinc-900 transition-all duration-500 text-zinc-50 text-sm font-semibold py-1 px-2 rounded'>
                            WEB
                        </button>
                    </li>
                    <li className='mr-3 flex items-center'>
                        <button onClick={btnActive} id="mobile" className='bg-zinc-600 hover:bg-zinc-900 transition-all duration-500 text-zinc-50 text-sm font-semibold py-1 px-2 rounded'>
                            MOBILE
                        </button>
                    </li>
                </ul>
            </div>
            <div className='filter-container'>



                {
                    status === 'pending' ?
                        <div className="loading mt-44" data-loading-text="Memuat&nbsp;gallery..."></div> :
                        status === 'fulfilled' ?
                            galleryData.map((item, index) => {
                                return (<div key={index} className={`relative filter-item ${item.category} w-1/1 md:w-1/2 lg:w-1/3 `}>
                                    <div className="bg-white rounded border-2 border-zinc-600 p-3 divide-y divide-zinc-300 hover:-translate-y-1 hover:shadow hover:shadow-zinc-300 transition-all duration-300 ease-in-out">
                                        <div className="flex justify-between items-center mb-3">
                                            <div>
                                                <h1 className="text-lg">{item.name}</h1>
                                                <button onClick={() => { window.open(item.url) }} className='flex items-center bg-zinc-600 hover:bg-zinc-900 transition-all duration-500 text-zinc-50 text-sm py-1 px-2 mt-2 rounded'><i className='fa-brands fa-github fa-l mr-2'></i>Repo</button>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <Languages languagesData={item.languagesData} />
                                            <p className="text-sm text-zinc-600 mt-2">{item.updatedAt}</p>
                                        </div>
                                    </div>
                                </div>)
                            }) :
                            status === 'rejected' && <p className="text-center">kosong</p>

                }


                {/* {

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

                } */}

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