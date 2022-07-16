import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import {useParams} from "react-router-dom"
import { MainContext } from '../../contexts/MainContext'
import "./index.blog.css"
const Next = () => {
    const {id}=useParams()
  const {data2,setData2,errorPage,setError,BlogCard}=useContext(MainContext)
  useEffect(() => {
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((e)=>{
    setData2(e.data)
  }).catch((e)=>{
    setError(true)
  })
  }, [])
  if(null===data2)
  return
  return (
    <>
    {errorPage?<div><h1>We are sorry there's error from our side please try again.</h1></div>:<div className='maintext2'>
          <BlogCard className="main" key={data2}  data={data2}/>
      
    </div>
    }
    </>
  )
}
export default Next