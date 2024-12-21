import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import "./Part1.css"
import page2 from "./page2.png"
export default function Part1() {
    const back = {
        backgroundImage: `url(${page2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '250px',
        width: '100%',
    };

    return (
        <div className='pa' style={back}>
            <Navbar />
            <div className='h1'>
                <h1 className='our'  >
                    НАШИ ЭКСКУРСИИ
                </h1>
            </div>
        </div>
    )
}
