import { React, useState, useEffect } from 'react'
import Logo from '../../assets/Logo/logo.png'
import register from '../../services/auth/register.js'
import login from '../../services/auth/login.js'

const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        const res = await login(email, password)
        if (res.data.message === "Login successful") {
            alert("Login Successful")
            setShowModal(false)
        } else if (res.data.message === "Incorrect password") {
            alert("Login Failed! Incorrect Password")
            setShowModal(false)
        } else {
            alert("Login Failed! User Not Found")
            setShowModal(false)

        }
    }

    const handleRegister = async () => {
        const res = await register(email, password)
        if (res.data.message === "User registered successfully") {
            alert("User registered successfully!!!")
            setShowModal(false)
        } else {
            alert("Missing Credentials")
            setShowModal(false)
        }
    }

    return (
        <>
            <div data-testid="header"
                className={`w-full flex flex-wrap items-center justify-between px-2 py-3 bg-transparent mb-3 overflow-x-hidden fixed z-50 top-0 left-0 
                    }`}
            >
                <div className="px-4 py-3 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            href="/"
                        >
                            <img src={Logo} className="h-8 mr-3" alt="SpaceX Logo" />
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>

                    <div
                        className={
                            "lg:flex flex-grow items-center justify-center   " +
                            (navbarOpen ? " flex backdrop-blur-lg text-black " : " text-white hidden bg-transparent")
                        }
                    >
                        <ul className="flex flex-col lg:flex-row list-none">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 transition duration-150 border-b-2 border-transparent hover:border-white"
                                    href="#"
                                >
                                    <span className="ml-2 mt-2 text-xs leading-lg text-white  transition duration-150 border-b-1 border-transparent hover:border-white ">FALCON</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 transition duration-150 border-b-2 border-transparent hover:border-white"
                                    href="#"
                                >
                                    <span className="ml-2 mt-2 text-xs leading-lg text-white ">FALCON HEAVY</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 transition duration-150 border-b-2 border-transparent hover:border-white"
                                    href="#"
                                >
                                    <span className="ml-2 mt-2 text-xs leading-lg text-white ">DRAGON</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 transition duration-150 border-b-2 border-transparent hover:border-white"
                                    href="#"
                                >
                                    <span className="ml-2 mt-2 text-xs leading-lg text-white ">STARSHIP</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 transition duration-150 border-b-2 border-transparent hover:border-white"
                                    href="#"
                                >
                                    <span className="ml-2 mt-2 text-xs leading-lg text-white ">STARLINK</span>
                                </a>
                            </li>
                            <button className='bg-transparent m-2  hover:bg-white-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-black     rounded ' onClick={() => setShowModal(true)}> Login</button>
                            <button className='bg-transparent m-2 hover:bg-black-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-black     rounded ' onClick={() => setShowModal(true)}> Register</button>
                        </ul>
                    </div>
                </div>
            </div >
            {
                showModal ? (
                    <>
                        <div data-testid="modal"
                            className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative lg:w-auto lg:my-6 m-1 lg:mx-auto lg:max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-transparent text-white   backdrop-blur-lg  outline-none focus:outline-none">
                                    <div className="flex items-start justify-between m-2 lg:m-0 p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="lg:text-3xl text-6 font-semibold">
                                            Login/Register
                                        </h3>
                                    </div>
                                    <div className="relative p-6 flex-auto justify-center items-center">
                                        <label className="block lg:text-2xl text-8 text-white  font-medium  m-0 lg:m-2 md:m-2" >
                                            Email
                                        </label>
                                        <div>
                                            <input className="shadow appearance-none border rounded lg:w-full w-52 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                        </div>
                                        <div className='lg:text-2xl text-8 m-0 lg:m-2 md:m-2'>
                                            Password
                                        </div>
                                        <div>
                                            <input className="shadow appearance-none border border-red-500 rounded lg:w-full w-52 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password}
                                                onChange={(e) => { setPassword(e.target.value) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justif    y-end  lg:p-6 p-2 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase lg:px-6 px-2 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm lg:px-6 px-2 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => handleLogin()}
                                        >
                                            Login
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => handleRegister()}
                                        >
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
        </>
    )
}

export default Header