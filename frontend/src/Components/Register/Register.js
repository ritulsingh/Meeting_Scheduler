import React, { useState } from "react"
import "./Register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Register = () => {
  const history = useNavigate()
  const [user, setUser] = useState({
    userName: "",
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = () => {
    const {userName, name, email, password, reEnterPassword } = user
    if (userName && name && email && password) {
      if(password === reEnterPassword){
        axios.post("http://localhost:9002/register", user)
            .then( res => {
                alert(res.data.message)
                history("/login")
            })
        } else {
            alert("invalid input")
        }  
      }
    }


  return (
    <>
      {console.log("User: ", user)}
      <div style={{ width: '90vw', height: '100vh' }}>
        <main className="main-content mt-0">
          <section>
            <div className="page-header min-vh-75">
              <div className="container">
                <div className="row">
                  <div className="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                    <div className="card card-plain mt-2">
                      <div className="card-header pb-0 text-left bg-transparent">
                        <h3 className="font-weight-bolder text-primary text-gradient">Welcome!</h3>
                        <p className="mb-0">Create An Account Or Sign in</p>
                        <p style={{ color: 'red' }} />
                      </div>
                      <div className="card-body">
                        <form role="form">
                          <label>Username</label>
                          <div className="mb-2">
                            <input type="text" name="userName" value={user.userName} className="form-control" placeholder="Username must be unique" aria-label="Username" aria-describedby="email-addon" id="signupusername" onChange={handleChange} />
                          </div>
                          <label>Name</label>
                          <div className="mb-2">
                            <input type="text" name="name" value={user.name} className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="email-addon" id="signupfirstname" onChange={handleChange} />
                          </div>
                          <label>Email Id</label>
                          <div className="mb-2">
                            <input type="email" name="email" value={user.email} className="form-control" placeholder="E-mail ID" aria-label="Last Name" aria-describedby="email-addon" id="signuplastname" onChange={handleChange} />
                          </div>
                          <label>Password</label>
                          <div className="mb-2">
                            <input type="password" name="password" value={user.password} className="form-control" placeholder="Password minimum 8 character" aria-label="Password" aria-describedby="password-addon" id="signuppassword1" onChange={handleChange} />
                          </div>
                          <label>Confirm Password</label>

                          <div className="mb-2">
                            <input type="password" name="reEnterPassword" value={user.reEnterPassword} className="form-control" placeholder="Confirm Password" aria-label="Password" aria-describedby="password-addon" id="signuppassword2" onChange={handleChange} />
                          </div>
                          <div className="form-check form-check-info text-left">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                              I agree the <a href="javascript:;" className="text-dark font-weight-bolder">Terms and Conditions</a>
                            </label>
                          </div>
                          <div className="text-center">
                            <button type="button" className="btn btn-primary w-100 my-4 mb-2" id="signupbutton" onClick={register} >Sign up</button>
                          </div>
                        </form>
                      </div>
                      <div className="card-footer text-center pt-0 px-lg-2 px-1">
                        <p className="mb-3 text-sm mx-auto">
                          Have an account ?
                          <a href="#" onClick={() => history("/login")} className="text-primary text-gradient font-weight-bold"> Sign in</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default Register