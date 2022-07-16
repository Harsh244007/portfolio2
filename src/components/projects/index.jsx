import React,{useContext} from 'react'
import "./index.project.css"
import { MainContext } from '../../contexts/MainContext'
const Projects = () => {
const {ProjectData,Card} = useContext(MainContext)
  return (
    <div  className='mainproject'>
      {ProjectData.map((e,i)=>
      {return(
        <Card key={i} data={e}/>
      )})}
    </div>
  )
}

export default Projects
