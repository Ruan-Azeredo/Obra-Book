import { Input } from '@nextui-org/react'
import React, { useState } from 'react'

const Login = () => {
    const [namevalue, setNamevalue] = useState()
    const [emailvalue, setEmailvalue] = useState()
    const [passwordvalue, setPasswordvalue] = useState()

    const getName = (event) => setNamevalue(event.target.value)
    const getEmail = (event) => setEmailvalue(event.target.value)
    const getPassword = (event) => setPasswordvalue(event.target.value)
  return (
    <div className={`flex h-screen items-center justify-center`}>

            <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
                <img src="https://source.unsplash.com/800x600/?building" alt="" className={`h-screen w-full object-cover`} />
            </div>

            <div className={`m-10 w-full mb:w-1/2 lg:w-1/3`}>
                <div className={`mb-5`}>
                    <h1 className={`text-3xl font-bold left-2 text-gray-800 relative`}>ObraBook</h1>
                </div>

                <div className={`flex flex-col`}>
                    <label>Nome</label>
                    <Input type={'text'} onChange={getName} />
                    <label>Email</label>
                    <Input type={'email'} onChange={getEmail} />
                    <label>Senha</label>
                    <Input type={'password'} onChange={getPassword} />
                </div>    
                
                <button className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}>Entrar com Email e Senha</button>

                <hr className={`my-6 border-gray-300 w-full`} />
            </div>

        </div>
  )
}

export default Login