import React, { useRef, useContext, useState } from "react"
import "./index.feedback.css"
import { MainContext } from '../../contexts/MainContext'
const Feedback = () => {
  const { getall,feedbackData,setFeedbackData } = useContext(MainContext)
  const name = useRef(null)
  const date = useRef(null)
  const title = useRef(null)
  const message = useRef(null)
  const category1 = useRef(null)
  const category2 = useRef(null)
  const category3 = useRef(null)
  const gender = []

  const mchange = (e) => {
    gender.push(e.target.value)
  }
  const onclick = (e) => {
    e.preventDefault()
    let Name = name.current.value, Date = date.current.value, Title = title.current.value, Message = message.current.value, Cate1 = category1.current.value, Cate2 = category2.current.value, Cate3 = category3.current.value;
    if (Name == "")
      return alert("Kindly enter your name")
    if (Date == "")
      return alert("Kindly choose a date")
    if (Title == "")
      return alert("Kindly enter Feedback title")
    if (Message == "")
      return alert("Kindly enter your Message")
    if (Cate1 == "" || Cate2 == "" || Cate3 == "")
      return alert("Kindlt choose any Department category")
    const Catego = []
    if (Cate1)
      Catego.push(Cate1)
    if (Cate2)
      Catego.push(Cate2)
    if (Cate3)
      Catego.push(Cate3)
    if (gender == [])
      return alert("please select the gender")
    const final = new getall(Name, Date, Title, Message, Catego, gender[0])
    setFeedbackData(final)
    console.log(final)
  }
  return (
    <div className="main">
      <h2>Feedback form</h2>
      <form className="form">
        <input ref={name} type="text" placeholder='Your Name' />
        <input ref={date} type="date" placeholder='Select date' />
        <input ref={title} type="text" placeholder='Feedback Title' />

        <input ref={message} type="text" placeholder='Message/Feedback' />
        <p className="chkbox">Department Category</p>
        <ul>
          <li className="chkbox"><input type="checkbox" ref={category1} value="Sales" />Sales</li>
          <li className="chkbox"><input type="checkbox" ref={category2} value="Marketing" /> Marketing</li>
          <li className="chkbox"><input value="Support" type="checkbox" ref={category3} /> Support</li>
        </ul>
        <div className="chkbox">
          <p>Gender</p>
          <input type="radio"  onChange={mchange} name="gender" value="male" /> Male
          <input type="radio" onChange={mchange} value="female" /> Female
        </div>
        <br />
        <input type="button" value="Submit" onClick={onclick} />
      </form>
      {
        feedbackData ? <div div className="center">
          <h3>Data sucesssfully send</h3>
          <p>Name: {feedbackData.Name}</p>
          <p>Date : {feedbackData.Date}</p>
          <p>Title: {feedbackData.Title}</p>
          <p>Message : {feedbackData.Message}</p>
        </div> : ""
      }
    </div>
  )
}

export default Feedback