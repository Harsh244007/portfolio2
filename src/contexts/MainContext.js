import { createContext,useState } from "react";
import { Link } from "react-router-dom";
export const MainContext=createContext()

export const MainProvider=({children})=>{
     const slideImages=[
      {
    url: 'https://images.unsplash.com/photo-1530389361604-f5fb2936a855?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVtcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
    caption: 'Slide 1'
  },
  {
    url: 'https://images.unsplash.com/photo-1551129455-7d7ada16936c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVtcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
    caption: 'Slide 2'
  },
  {
    url: 'https://images.unsplash.com/photo-1581289068946-ba5dbd4f7911?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVtcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
    caption: 'Slide 3'
  },
  ]
  const ProjectData=[
{
Name:"Expedia",
TechStack:"React,MongoDB,Express",
Duration:"5 Days",
Teamstrength:"5 People",
TeamOne:"Harsh",
TeamTwo:"Chitra",
TeamThree:"Subash",
TeamFour:"Ashish",
TeamFive:"Sunny",
},
{
Name:"Shopers Stop",
TechStack:"React,MongoDB,Express",
Duration:"5 Days",
Teamstrength:"5 People",
TeamOne:"Harsh",
TeamTwo:"Chitra",
TeamThree:"Subash",
TeamFour:"Ashish",
TeamFive:"Sunny",
}
]
  const [data, setData] = useState(null)
  const [data2, setData2] = useState(null)
  const [errorPage, setError] = useState(false)
const Card=(e)=>{
  return(
    <div key={e.id+1} className="projects">
      <p>{e.data.Name}</p>
      <p>{e.data.TechStack}</p>
      <p>{e.data.Duration}</p>
      <p>{e.data.Teamstrength}</p>
      <p>{e.data.TeamOne}</p>
      <p>{e.data.TeamTwo}</p>
      <p>{e.data.TeamThree}</p>
      <p>{e.data.TeamFour}</p>
      <p>{e.data.TeamFive}</p>
    </div>
  )
}
const BlogCard=(e)=>{
  return(
    <Link to={`/blogs/${e.data.id}`} className="content">
    <div key={e.data.id} className="blogcard" >
      <p>Title: {e.data.title}</p>
      <p>Content: {e.data.body}</p>
    </div>
    </Link>
  )
}
function getall(a,b,c,d,e,f){
return (
  this.Name = a,
  this.Date=b,
  this.Title=c,
  this.Message=d,
  this.Category=e,
  this.Gender=f
)
  }
  const [feedbackData, setFeedbackData] = useState(null)
    return(
        <MainContext.Provider value={{slideImages,ProjectData,Card,data,setData,errorPage,setError,BlogCard,getall,feedbackData,setFeedbackData,data2,setData2}}>{children}</MainContext.Provider>
    )
}