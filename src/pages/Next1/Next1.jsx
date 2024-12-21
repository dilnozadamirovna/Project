import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import page3 from "./page3.png"
import "./Next1.css"
import { useNavigate } from "react-router-dom";
export default function Next1() {
    const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/trip");}
    const nextPage = {
         backgroundImage: `url(${page3})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         height: '100vh',
         width: '100%',
       };
    return (
    <div className='next' style={nextPage}>
<Navbar />

<div className='t1'>
    <h3 className='yel'>Автобусный тур</h3>
    <h1>ЗОЛОТОЕ КОЛЬЦО АБХАЗИИ
    (ИЗ АДЛЕРА)</h1>
    <button className='blue1' onClick={handleNavigation}>К другим экскурсиям <span  >→</span></button>
</div>

    </div>
  )
}
