import React, { useState, useContext } from 'react'
import UserAuth from '../Context/auth'
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const navigation = useNavigate()
    const { session, setSession } = useContext(UserAuth)

    // initlization step
    let rinitData = { email: "", password: "" }
    let linitData = { email: "", password: "" }
    let [loginData, setloginData] = useState(linitData)
    let [regsiterData, setregsiterData] = useState(rinitData)

    // form data bind on change

    let l_databind = (e) => {
        setloginData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    let r_databind = (e) => {
        setregsiterData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // form controllers
    const registerMethod = async (e) => {
        e.preventDefault()
        const response = await fetch("http://restapi.adequateshop.com/api/authaccount/registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(regsiterData),
        });
        let res = await response.json()
    }

    const loginMethod = (e) => {
        e.preventDefault()
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        })
            .then(res => res.json())
            .then(res => {
                setSession(res)
                localStorage.setItem("session", JSON.stringify(res))
                navigation('/')
            })
            .catch(err => {
                alert(err)
            })
    }

    return (
        <>

            <div className='form___container'>

                {
                    (session === null) ? (
                        <>
                            <fieldset className='register_Form'>
                                <legend className='form_heading'>Register</legend>
                                <form onSubmit={registerMethod}>
                                    <label>Email : </label>
                                    <input placeholder='Enter your email...' type='email' autoComplete='off' name='email' onChange={(e) => r_databind(e)} value={regsiterData.email} />
                                    <label>Password : </label>
                                    <input placeholder='Enter your password...' type='password' name='password' onChange={(e) => r_databind(e)} value={regsiterData.password} />
                                    <input type='submit' value={'Register'} />
                                </form>
                            </fieldset>

                            <fieldset className='login_Form'>
                                <legend className='form_heading'>Login</legend>
                                <form onSubmit={loginMethod}>
                                    <label>Email : </label>
                                    <input placeholder='Enter your email...' type='text' autoComplete='off' name='email' onChange={(e) => l_databind(e)} value={loginData.email} />
                                    <label>Password : </label>
                                    <input placeholder='Enter your password...' type='password' name='password' onChange={(e) => l_databind(e)} value={loginData.password} />
                                    <input type='submit' value={'Login'} />
                                </form>
                            </fieldset>
                        </>
                    ) : (<>
                        <h1>You are already login</h1>
                    </>)
                }

            </div>
        </>
    )
}

export default Login

