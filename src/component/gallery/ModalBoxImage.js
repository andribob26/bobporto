import React, { useRef} from 'react'


const ModalBoxImage = ({ modalBoxRef, imgSrc, title, desc }) => {
    // console.log('jalan componenet modalboximage')
    const imgRef = useRef()


    const zoom = e => {
        const zoomer = e.currentTarget.getBoundingClientRect();
        let x, y, offsetX, offsetY;
        offsetX = e.clientX - zoomer.x;
        offsetY = e.clientY - zoomer.y;
        x = (offsetX / zoomer.width) * 100;
        y = (offsetY / zoomer.height) * 100;

        e.currentTarget.style.backgroundPosition = x + '% ' + y + '%'

    }
    const modalImageClose = () => {
        modalBoxRef.current.classList.remove('translate-y-0')
        modalBoxRef.current.classList.add('-translate-y-full')
    }

    return (
        <>
            <div
                ref={modalBoxRef}
                id='modal-box'
                className='fixed h-full w-full left-0 top-0 transition-all duration-500 z-50 flex justify-center items-center -translate-y-full'>
                <div
                    onClick={modalImageClose}
                    className='bg-zinc-900 h-full w-full bg-opacity-80 relative'
                />
                <div className='bg-zinc-50 opacity-100 p-6 rounded flex items-center flex-col absolute'>
                    <div onMouseMove={zoom} className='mb-6 cursor-crosshair overflow-hidden h-[400px] '  style={{ backgroundImage: `url('${imgSrc}')`, backgroundSize: '200%' }}>
                        <img
                            ref={imgRef}
                            className='w-full h-[400px] object-contain bg-zinc-200 hover:opacity-0 transition-all duration-500'
                            src={imgSrc}
                            alt=''
                        />
                    </div>

                    <article className='text-center'>
                        <h1 className='font-bold text-lg capitalize'>{title}</h1>
                        <p className='capitalize'>{desc}</p>
                    </article>
                </div>
            </div>




        </>
    )
}

export default ModalBoxImage
