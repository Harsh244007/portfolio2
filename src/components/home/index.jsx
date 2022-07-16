import React,{useContext} from 'react'
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { MainContext } from '../../contexts/MainContext'
import "./index.css"
const Home = () => {
 const {slideImages}=useContext(MainContext)
   return (
<div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className='image' style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  )
}

export default Home