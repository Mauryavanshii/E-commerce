import React, { useContext, useEffect, useState } from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench } from 'lucide-react'
import axios from 'axios'
import UserContext from '../context/UserContext'
import {  useNavigate } from 'react-router-dom'

export default function Home() {
  let {setCount}=useContext(UserContext)
  let navigation=useNavigate()
  let [data, setData] = useState([])
  let [inp,setInp]=useState("")
  let{Login}=useContext(UserContext)

  async function getCartData() {
    let result = await axios.get(`http://localhost:3000/api/getCart/${Login}`)
    // setData(result.data)
    setCount(result.data.length)
}
useEffect(()=>{
  getCartData()
})
  useEffect(() => {
    fetchProductData()
  }, [])

  async function fetchProductData() {
    let result = await axios.get('http://localhost:3000/api/getProduct')
    setData(result.data)
  }

  async function Puma() {
    let result = await axios.get('http://localhost:3000/api/getProduct')
    let final = result.data.filter((item) => item.productBrand === "Puma")
    setData(final)
  }
  async function Adidas() {
    let result = await axios.get('http://localhost:3000/api/getProduct')
    let final = result.data.filter((item) => item.productBrand === "Adidas")
    setData(final)
  }
  async function Zara() {
    let result = await axios.get('http://localhost:3000/api/getProduct')
    let final = result.data.filter((item) => item.productBrand === "Zara")
    setData(final)
  }
  async function Boot() {
    let result = await axios.get('http://localhost:3000/api/getProduct')
    let final = result.data.filter((item) => item.productBrand === "Boot")
    setData(final)
  }
   function All() {
    fetchProductData()
  }
   async function handleSearch(){
      let result  = await axios.get(`http://localhost:3000/api/searchProduct/${inp}`)
      setData(result.data)
    }
useEffect(()=>{
  handleSearch()
},[inp])

// console.log(Login)

// let { Login }=useContext(UserContext)

async function saveCart(data){
  if(Login){
  await axios.post(`http://localhost:3000/api/CartSave/${Login}`,{
    productBrand:data.productBrand,
    productPrice:data.productPrice,
    productRating:data.productRating,
    productType:data.productType
  })
  // if(result.data){

    getCartData()
    // alert("product saved into cart")
  }

else{
  navigation('/clientLogin')
}
}



  return (
    <>
      <aside class=" fixed flex h-screen w-64 flex-col overflow-y-auto border-r bg-blue-900 px-5 py-8">
      
        <div class="mt-6 flex flex-1 flex-col justify-between">
          <nav class="-mx-3 space-y-6 ">
            <div class="space-y-3 ">
             
                
                <form class="max-w-md mx-auto ">
                  <label for="default-search" class="mb-2 text-sm font-medium text-black sr-only dark:text-white">Search</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full 
                    p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 
                    focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                    dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                     placeholder="Search Mockups, Logos..." required  onChange={(e)=>setInp(e.target.value)} />
                    {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                  </div>
                </form>

                <button onClick={handleSearch} className='p-2 bg-white rounded-[10px] text-sm  color-white font-bold hover:bg-gray-400 hover:text-black'
// onClick={handleSearch}
>Search</button>


              <button

                class="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
                onClick={All}
              >
                {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
              <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
              <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
            </svg> */}
                <span class="mx-2 text-sm font-medium">All</span>
              </button>
            </div>
            <div class="space-y-3 ">
              {/* <label class="px-3 text-xs font-semibold uppercase text-black">
                Content
              </label> */}
              <button
                class="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                onClick={Zara}
              >
                
                <span class="mx-2 text-sm font-medium">Zara</span>
              </button>
              <button
                class="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                onClick={Adidas}
              >
                
                <span class="mx-2 text-sm font-medium">Adidas</span>
              </button>
              <button
                class="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                onClick={Puma}
              >
              
                
                <span class="mx-2 text-sm font-medium">Puma</span>
              </button>
              <button
                class="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                onClick={Boot}
              >
                
                <span class="mx-2 text-sm font-medium">Boot</span>
              </button>
            </div>
            
            {/* onClick={Boot} */}
            <div class="space-y-3 ">
            {/* onClick={Boot} */}
              <label class="px-3 text-xs font-semibold uppercase text-white">
                {/* Boot */}
              </label>
              <a
                class="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                {/* onClick={Boot} */}
              
                {/* <span class="mx-2 text-sm font-medium">Boot</span> */}
              </a>
              <a
                class="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                
                {/* <span class="mx-2 text-sm font-medium">Setting</span> */}
              </a>
            </div>
          </nav>
        </div>
      </aside>

      {/* card section strat here */}
      <div className='relative  left-[300px] top-[70px] flex justify-evenly w-[1000px] flex-wrap'>
        {data.map((data) => (
          <div className="w-[300px] rounded-md border">
            <img
              src={`http://localhost:3000/${data.image}`}
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">Product Brand:- {data.productBrand}</h1>
              <h1 className="inline-flex items-center text-lg font-semibold">Product Type:- {data.productType}</h1>
              <h1 className="inline-flex items-center text-lg font-semibold">Product Price:- {data.productPrice}</h1>
              <h1 className="inline-flex items-center text-lg font-semibold">Product Rating:- {data.productRating}</h1>

              <button
                type="button"
                onClick={()=>saveCart(data)}
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}












