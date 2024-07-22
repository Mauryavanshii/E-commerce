
import React, { useContext, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import axios from 'axios';
import UserContext from '../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';

export default function ClientLogin() {
  let navigation = useNavigate()
  let { setLogin } = useContext(UserContext)
  
  let [data, setData] = useState({
    email: "",
    password: ""

  })
  let { email, password } = data;

  function handleChange(e) {
    e.preventDefault()
    setData({ ...data, [e.target.name]: e.target.value })
  }
  
  async function handleLogin(e) {
    e.preventDefault()
    let result = await axios.post('http://localhost:3000/api/clientLogin', data)
    console.log(result.data.token)
    localStorage.setItem('token',result.data.token)
    // console.log(result.data)
   

    let unique=data.email.split('@')[0]
    
    console.log(unique)
    if(result.data.isMatch) {
     
      setLogin(unique)
      navigation("/")
      createClientTable(unique)
    } else {
      alert("wrong detail")
    }

    async function createClientTable(unique){
      await axios.post(`http://localhost:3000/api/createClient/${unique}`)
    }

  }

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md m-[-35px]">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl text-center">Admin Login</h2>
            <p className="mt-2 text-sm text-gray text-center">
              Don&apos;t have an account?{' '}
              <Link
                to="/clintSignup"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"

                      // id="name"
                      name='email'
                      value={email}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      password{' '}
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold text-black hover:underline"
                    >
                      {' '}
                      Forgot password?{' '}
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      // id="name"
                      name='password'
                      value={password}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                 onClick={handleLogin}
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Login <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign in with Google
              </button>
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-[#2563EB]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </span>
                Sign in with Facebook
              </button>
            </div>
          </div>
        </div>
        <div className="h-full w-full ">
          <img
            className="mx-auto h-[400px] w-[650px] rounded-md object-cover mt-[100px]"
            src='data:image/jpeg;base64,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'
            // src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSycqX2pP1zRFVGYrqde6odSNygUwXAMEdwZ7Pnf_NC_JYes2mVZKG4zg4kpXJSP65ldL4&usqp=CAU'
            // src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  )

}









