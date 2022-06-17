import React from 'react'

const Profile = () => {
    return (
        <div className='mb-3 text-zinc-900'>
            <div className='flex flex-col'>
                <h1 className='text-4xl text-center font-bold py-6'>PROFILE</h1>
                <div className='flex lg:flex-row md:flex-row flex-col'>
                    <div className='flex-1 px-3'>
                        <article>
                            <h1 className='text-3xl mb-3'>ABOUT</h1>
                            <p>
                                Hai, nama saya Andri bisa di panggil juga bobi, saya Full
                                Time Freelancer sebagai Web Developer, Mobile Developer dan
                                juga Graphic Designer. Saya berpengalaman bekerja dengan
                                HTML, CSS, Javascript, React.js, Vue.js, Tailwind,
                                CorelDRAW, Adobe Illustrator, dll. Saya juga suka menulis
                                kode pemrograman, membuat logo ilustrasi, dan juga saya suka
                                mempelajari teknologi baru.
                            </p>
                        </article>
                        <div className='mt-12'>
                            <h1 className='text-3xl mb-3'>EDUCATION</h1>
                            <ul>
                                <li>
                                    <span className='mr-3'>
                                        <i className='fa-solid fa-graduation-cap'></i>
                                    </span>
                                    SD Negri Wagir III
                                </li>
                                <li>
                                    <span className='mr-3'>
                                        <i className='fa-solid fa-graduation-cap'></i>
                                    </span>
                                    SMP Negri I Gantar
                                </li>
                                <li>
                                    <span className='mr-3'>
                                        <i className='fa-solid fa-graduation-cap'></i>
                                    </span>
                                    SMA Negri I Haurgeulis
                                </li>
                                <li>
                                    <span className='mr-3'>
                                        <i className='fa-solid fa-graduation-cap'></i>
                                    </span>
                                    Universitas Komputer Indonesia
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex-1 px-3 lg:mt-0 md:mt-0 mt-12'>
                        <h1 className='text-3xl mb-3'>SKILLS & TOOLS</h1>
                        <div className='flex flex-wrap'>
                            <div className='p-3 basis-1/4 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/html.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-3 basis-1/4 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/css.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-3 basis-1/4 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/javascript.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-3 basis-1/4 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/tailwind.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-3 basis-1/4 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/react.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-3 basis-1/4 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/vue.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-3 basis-1/4 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/flutter.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-3 basis-1/4 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/node.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-3 basis-1/4 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/express.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-3 basis-1/4 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/mongoDb.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-3 basis-1/4 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/postgre.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-3 basis-1/4 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/ai.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-3 basis-1/4 transition-all duration-500 opacity-80 hover:opacity-100'>
                                <img
                                    src='assets/ps.png'
                                    style={{ width: '100%', height: 'auto' }}
                                    alt=''
                                />
                            </div>
                            <div className='p-3 basis-1/4 transition-all duration-500 opacity-80 hover:opacity-100'>
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