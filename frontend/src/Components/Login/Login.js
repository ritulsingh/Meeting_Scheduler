import React, { useState } from "react"
import "./Login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({setLoginUser}) => {
    const history = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history("/")
        })
    }

    return (
        <>
            {console.log("User: ", user)}
            <main className="main-content w-100 mt-0">
                <section>
                    <div className="page-header min-vh-75">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                                    <div className="card card-plain mt-8">
                                        <div className="card-header pb-0 text-left bg-transparent">
                                            <h3 className="font-weight-bolder text-gradient text-primary">Welcome back</h3>
                                            <p className="mb-0">Enter your username and password to sign in</p>
                                            <p id="signinwarning" style={{ color: 'red' }} />
                                        </div>
                                        <div className="card-body">
                                            <form role="form">
                                                <label>Email ID</label>
                                                <div className="mb-3">
                                                    <input type="text" name="email" value={user.email} onChange={handleChange} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="email-addon" id="signinusername" />
                                                </div>
                                                <label>Password</label>
                                                <div className="mb-3">
                                                    <input type="password" name="password" value={user.password} onChange={handleChange} className="form-control" placeholder="Password minimum 8 character" aria-label="Password" aria-describedby="password-addon" id="signinpassword" />
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="rememberMe" defaultChecked />
                                                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                                </div>
                                                <div className="text-center">
                                                    <button type="button" onClick={login} className="btn btn-primary w-100 mt-4 mb-0" id="signinbutton">Sign in</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                            <p className="mb-4 text-sm mx-auto">
                                                Don't have an account ?
                                                <a href="#" onClick={() => history("/register")} className="text-primary text-gradient font-weight-bold"> Sign up</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Login
