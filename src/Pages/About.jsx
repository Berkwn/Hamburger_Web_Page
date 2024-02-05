import React from 'react'
import BannerImage from '../assets/1beef.jpg'
export default function About() {
  return (
    <>
    <div className='aboutPage'>

    <div className='AboutTop' style={{backgroundImage:`url(${BannerImage})`}}></div>

    <div className='aboutBottom'>

        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores perferendis harum asperiores, nulla illo fugiat eaque, nobis impedit repellat earum dignissimos qui. Qui fuga laborum eligendi unde veniam, vitae deserunt.</p>
    </div>

    </div>
    
    </>
  )
}
