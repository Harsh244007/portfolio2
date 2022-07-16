import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { MainContext } from '../../contexts/MainContext'
import "./index.css"
const Blogs = () => {
  const {data,setData,errorPage,setError,BlogCard}=useContext(MainContext)
  useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((e)=>{
    setData(e.data)
  }).catch((e)=>{
    setError(true)
  })
  }, [])
  if(null===data)
  return
  return (
    <>
    {errorPage?<div><h1>We are sorry there's error from our side please try again.</h1></div>:<div className='maintext'>
      {data.map((e)=>{
        return(
          <BlogCard key={e.id}  data={e}/>
        )
      })}
    </div>
    }
    </>
  )
}
export default Blogs