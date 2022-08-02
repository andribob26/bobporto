import React from 'react'

const Profile = () => {
    return (
        <div className='mb-3 text-zinc-900'>
            <div className='flex flex-col'>
                <h1 className='text-4xl text-center font-bold py-6'>PROFILE</h1>
                <div className='flex flex-col'>
                    <div className='flex-1 px-3'>
                        <article>
                            <h1 className='text-xl mb-3'>ABOUT</h1>
                            <p>
                                Hai, nama saya Andri bisa di panggil juga bobi, saya mahasiswa di universitas komputer indonesia.
                                Biasa saya bekerja dengan React.js, Flutter, Tailwindcss, Express.js, dan 
                                CorelDRAW. Dan juga saya suka mempelajari teknologi baru.
                            </p>
                        </article>
                    </div>
                    <div className='flex-1 px-3 mt-6'>
                        <h1 className='text-xl mb-3'>SKILLS & TOOLS</h1>
                        <div className='flex flex-wrap'>
                            <div className='p-6 basis-1/3 md:basis-1/6 lg:basis-1/6 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/html.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-6 basis-1/3 md:basis-1/6 lg:basis-1/6 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/css.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-6 basis-1/3 md:basis-1/6 lg:basis-1/6 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/javascript.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-6 basis-1/3 md:basis-1/6 lg:basis-1/6 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/tailwind.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-6 basis-1/3 md:basis-1/6 lg:basis-1/6 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/react.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-6 basis-1/3 md:basis-1/6 lg:basis-1/6 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/flutter.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-6 basis-1/3 md:basis-1/6 lg:basis-1/6 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/node.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-6 basis-1/3 md:basis-1/6 lg:basis-1/6 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/express.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-6 basis-1/3 md:basis-1/6 lg:basis-1/6 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/mongoDb.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-6 basis-1/3 md:basis-1/6 lg:basis-1/6 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/postgre.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-6 basis-1/3 md:basis-1/6 lg:basis-1/6 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/ai.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-6 basis-1/3 md:basis-1/6 lg:basis-1/6 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/corelDraw.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile