import React, { useRef, useState, memo, useEffect } from 'react'
import ModalBoxImage from './ModalBoxImage'

const ImageGalerry = ({ url, title, desc, category }) => {
  // console.log('jalan componenet image gallery')
  const imgRef = useRef()
  const modalBoxRef = useRef()
  const [imgSrc, setImgSrc] = useState('')


  const modalImageShow = () => {
    document.scrollingElement.style.overflowY = "hidden"
    setImgSrc(imgRef.current.src)
    modalBoxRef.current.classList.remove("-translate-y-full")
    modalBoxRef.current.classList.add("translate-y-0")
  }

  useEffect(() => {

    imgRef.current.onload = () =>{
      imgRef.current.classList.remove("animate-pulse")
      imgRef.current.parentElement.addEventListener("click", modalImageShow)
    }

    imgRef.current.onerror = () =>{
      imgRef.current.classList.remove("bg-slate-200")
    }
    
  }, [imgSrc])

  return (
    <>
      <div className={`image-gallery relative cursor-pointer filter-item ${category} `}>

        <img
          ref={imgRef}
          className='relative bg-slate-200 animate-pulse object-cover md:h-36 lg:h-48 h-28 w-full rounded-md'
          src={`${url}`}
          alt=''
        />
        
        <div className='flip lg:h-24 lg:w-24 md:h-20 md:w-20 h-16 w-16 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
          <div className='flipIn lg:h-24 lg:w-24 md:h-20 md:w-20 h-16 w-16 transition-all duration-500'>
            <div className='front lg:h-24 lg:w-24 md:h-20 md:w-20 h-16 w-16 bg-zinc-50'>
              <div className='content lg:h-24 lg:w-24 md:h-20 md:w-20 h-16 w-16 text-zinc-900'>
                <h1 className='font-bold lg:text-base md:text-base text-xs leading-none uppercase'>{title}</h1>
                <p className='leading-none text-zinc-600 text-xs uppercase'>{category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalBoxImage modalBoxRef={modalBoxRef} imgSrc={imgSrc} title={title} desc={desc} />
      {/* <div className='bg-red-500 w-full h-full fixed left-0 top-0 z-50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, reprehenderit?</div> */}
    </>
  )
}

export default memo(ImageGalerry)
