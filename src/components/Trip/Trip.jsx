import React from 'react'
import bus from './bus.png'
import boat from './boat.png'
import cano from './cano.png'
import jip from './jip.png'
import "./Trip.css"
import { useNavigate } from "react-router-dom";
export default function Trip() {
    const navigate = useNavigate();

    const handleNavigation = () => {
      navigate("/trip");}
    return (
        <div className='trip'>
            <h1 className='gal-title'>Виды экскурсий</h1>
            <div className='block'>
                <div className='block1'>
                    <div className='icon2'><img src={bus} className="icon2"/></div>
                    <div className="name">
                        <h3>Автобусный тур</h3>
                        <p>Один из самых насыщенных впечатлениями, доступных по цене и популярных видов отдыха. Во время одной поездки можно посмотреть достопримечательности сразу нескольких городов, причем обойдется это едва ли не в разы дешевле классического экскурсионного тура с ночевками в отелях.</p>
                    </div>
                </div>
                <div className='block2'>
                    <div className='icon2'><img src={boat} className="icon2"/></div>
                    <div className="name">
                        <h3>Яхтинг</h3>
                        <p>Это то же, что круиз на лайнере или прогулка на пароме, только на яхте больше свободы, размеры судна в разы меньше, нет назойливой команды, можно самостоятельно почувствовать себя капитаном, постоять за штурвалом. Именно здесь вы почувствуете величайшие просторы Черногор моря.</p>
                    </div>
                </div>
            </div>
            <div className='block5'>
                <div className='block3'>
                    <div className='icon2'><img src={jip} className="icon2"/></div>
                    <div className="name">
                        <h3>Джиппинг</h3>
                        <p>Это путешествие на автомобилях высокой проходимости с преодолением естественных препятствий, это экстремальный вид спорта и отдыха, представляющий собой прохождение туристического маршрута по бездорожью на автомобилях.</p>
                    </div>
                </div>
                <div className='block4'>
                    <div className='icon2'><img src={cano} className="icon2"/></div>
                    <div className="name">
                        <h3>Каньонинг</h3>
                        <p>Это экстремально-спортивный вид отдыха, который заключается в преодолении каньонов (обводненных или нет) при помощи альпинистского и иного снаряжения, а иногда и вброд, но без лодок или иных плавсредств.</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p>Выбирайте на нашем сайте экскурсию, которая подходит именно вам и записывайтесь онлайн без очередей, просто и быстро!</p>
           <button className='btn1' onClick={handleNavigation}>К экскурсиям <span  >→</span></button>
            </div>
        </div>
    )
}
