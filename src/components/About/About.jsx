import React from 'react'
import about from "./about1.png"
import "./About.css";
export default function About() {
  return (
    <div className='about'>
<div className='img'><img src={about} className='img'/></div>
<div className='txt'>
    <h4>О нас</h4>
    <p>PeroTravel - Первый онлайн-сервис по бронированию экскурсий без очередей и операторов.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
</div>
    </div>
  )
}
