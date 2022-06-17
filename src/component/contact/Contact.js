import React, { useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sendForm } from '../../store/slices/contactSlice'



const Contact = () => {

    const dispatch = useDispatch()
    const status = useSelector(state => state.contactSlice.status)
    const [form, setForm] = useState({
        nama: "",
        email: "",
        message: "",
    })

    const { nama, email, message } = form

    useEffect(() => {

        if (status === 'Fulfilled') {
            setForm((form) => ({
                ...form,
                nama: '',
                email: '',
                message: ''
            })

            )
        }

    }, [status])

    const onchangeHandler = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    const formSendHandler = (e) => {
        e.preventDefault();
        dispatch(sendForm(form))
    }


    return (
        <>
            <div className='mb-3 text-zinc-900'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl text-center font-bold py-6'>CONTACT</h1>
                    <div className='flex lg:flex-row md:flex-row flex-col'>
                        <div className='flex-1 px-3'>
                            <h1>
                                Saya terbuka untuk peluang freelance, kontrak, atau pekerjaan
                                penuh waktu. Namun, jika Anda memiliki permintaan atau
                                pertanyaan, jangan ragu untuk bertanya.
                            </h1>
                            <br />
                            <ul className='lg:mb-0 md:mb-0 mb-6'>
                                <li>
                                    <span className='mr-3'>
                                        <i className='fa-solid fa-envelope'></i>
                                    </span>
                                    andri.feb.26@gmail.com
                                </li>
                                <li>
                                    <span className='mr-3'>
                                        <i className='fa-solid fa-location-dot'></i>
                                    </span>
                                    kiara condong bandung indonesia
                                </li>
                            </ul>
                        </div>
                        <div className='flex-1 px-3'>
                            <form onSubmit={formSendHandler}>
                                <div className='flex flex-col mb-3'>
                                    <label htmlFor='nama'>Name</label>
                                    <input
                                        onChange={onchangeHandler}
                                        value={nama}
                                        className='border-2 rounded-sm border-zinc-600 p-1 mb-3 focus:outline-none focus:border-zinc-900'
                                        type='text'
                                        name='nama'
                                        placeholder='Your name'
                                        required
                                    />
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        onChange={onchangeHandler}
                                        value={email}
                                        className='border-2 rounded-sm border-zinc-600 p-1 mb-3 focus:outline-none focus:border-zinc-900'
                                        type='email'
                                        name='email'
                                        placeholder='Your Email'
                                        required
                                    />
                                    <label htmlFor='message'>Message</label>
                                    <textarea
                                        onChange={onchangeHandler}
                                        value={message}
                                        className='border-2 rounded-sm border-zinc-600 p-1 mb-3 focus:outline-none focus:border-zinc-900'
                                        name='message'
                                        rows='10'
                                        placeholder='Message'
                                        required
                                    ></textarea>
                                </div>
                                {
                                    status === "Pending" ? <button disabled type='submit' className='bg-zinc-600 flex justify-center items-center transition-all duration-200 text-zinc-50 text-base font-semibold py-1 px-2 rounded'>
                                        <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                        </svg>
                                        Kirim
                                    </button> :
                                        status === "Fulfilled" ? <button type='submit' className='bg-zinc-600 hover:bg-zinc-900 transition-all duration-200 text-zinc-50 text-base font-semibold py-1 px-2 rounded'>
                                            Kirim
                                        </button> :
                                            status === "Rejected" ? <button type='submit' className='bg-zinc-600 hover:bg-zinc-900 transition-all duration-200 text-zinc-50 text-base font-semibold py-1 px-2 rounded'>
                                                Kirim
                                            </button> : <button type='submit' className='bg-zinc-600 hover:bg-zinc-900 transition-all duration-200 text-zinc-50 text-base font-semibold py-1 px-2 rounded'>
                                                Kirim
                                            </button>

                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact