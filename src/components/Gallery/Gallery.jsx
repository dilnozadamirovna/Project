
import "./gallery.css";

// Images (import your images here)
import gal1 from "./gal1.png";
import gal2 from "./gal2.png";
import gal3 from "./gal3.png";
import gal4 from "./gal4.png";
import gal5 from "./gal5.png";
import gal6 from "./gal6.png";
import gal7 from "./gal7.png";
import gal8 from "./gal8.png";

import React from 'react'

export default function Gallery() {
    return (
        <div className="main">
            <h2 className="gal-title">Популярные экскурсии <span className="a"> <a href="" >Смотреть все</a></span></h2>
            <div className="big">
                <div className="part1">
                    <div className="little1"><img src={gal1} className="imgLit1" /></div>
                    <div className="little2">
                        <div className="one"><img src={gal2} className="imgOne" /></div>
                        <div className="two">
                            <div className="two1"><img src={gal3} className="imgTwo" /></div>
                            <div className="two2"><img src={gal4} className="imgTwo" /></div>
                        </div>
                    </div>
                </div>
                <div className="part2"><img src={gal5} className="imgPart" /></div>
                <div className="part3">

                    <div className="little3">
                        <div className="two3"><img src={gal6} className="imgTwo3" /></div>
                        <div className="two4"><img src={gal7} className="imgTwo4" /></div>
                    </div>

                    <div className="little4"><img src={gal8} className="imgLit4" /></div>

                </div>
            </div>

        </div>
    )
}

