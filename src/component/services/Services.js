import React from 'react'

const Services = () => {
    return (
        <div className='mb-3 text-zinc-900'>
            <div className='flex flex-col'>
                <h1 className='text-4xl text-center font-bold py-6'>SERVICES</h1>
                <div className='flex lg:flex-row md:flex-row flex-col lg:mt-16'>
                    <div className='basis-1/3 flex flex-col items-center lg:mb-0 md:mb-0 mb-6'>
                        <div className='opacity-80 hover:opacity-100 transition-all duration-500'>
                            <i className='fa-solid fa-desktop fa-10x'></i>
                        </div>
                        <article className='text-center px-3'>
                            <h1 className='text-2xl py-3 font-bold'>Web Developer</h1>
                            <p className='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                                eum voluptatum dolorem repudiandae asperiores autem ex
                                commodi doloremque doloribus, ad, possimus mollitia quos
                                atque enim ab quisquam debitis sint saepe?
                            </p>
                        </article>
                    </div>
                    <div className='basis-1/3 flex flex-col items-center lg:mb-0 md:mb-0 mb-6'>
                        <div className='opacity-80 hover:opacity-100 transition-all duration-500'>
                            <i className='fa-solid fa-mobile-screen fa-10x'></i>
                        </div>
                        <article className='text-center px-3'>
                            <h1 className='text-2xl py-3 font-bold'>Mobile Developer</h1>
                            <p className='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                                eum voluptatum dolorem repudiandae asperiores autem ex
                                commodi doloremque doloribus, ad, possimus mollitia quos
                                atque enim ab quisquam debitis sint saepe?
                            </p>
                        </article>
                    </div>
                    <div className='basis-1/3 flex flex-col items-center'>
                        <div className='opacity-80 hover:opacity-100 transition-all duration-500'>
                            <i className='fa-solid fa-pen-ruler fa-10x'></i>
                        </div>
                        <article className='text-center px-3'>
                            <h1 className='text-2xl py-3 font-bold'>Graphic Designer</h1>
                            <p className='text-justify'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                                eum voluptatum dolorem repudiandae asperiores autem ex
                                commodi doloremque doloribus, ad, possimus mollitia quos
                                atque enim ab quisquam debitis sint saepe?
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services