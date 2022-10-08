import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const heading = "My favorate pics lists"
const image1 = "https://picsum.photos/200/300"
const image2 = "https://picsum.photos/200/300/?blur"
const image3 = "https://picsum.photos/seed/picsum/200/300"

ReactDom.render(
  <>
   <h1 className='headings'>{heading}</h1>
   <div className='pics'>
   <img src = {image1}/>
   <img src = {image2}/>
   <img src = {image3}/>
   </div>
  </>,
  document.getElementById("root")
)
