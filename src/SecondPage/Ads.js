import React, { useEffect } from 'react'
import { REGION } from '../StaticDATA/LISTS';
import { CHOICECURRENCY } from '../StaticDATA/LISTS';
import { CHOICETRANSMISSION } from '../StaticDATA/LISTS';
import { ENGINETYPE } from '../StaticDATA/LISTS';
import { BODYTYPE } from '../StaticDATA/LISTS';
import { TYPEOFDRIVE } from '../StaticDATA/LISTS';
import { MILEAGE } from '../StaticDATA/LISTS';
import { NavLink } from 'react-router-dom';
import './Styles/Ads.css'

export default function Ads({ Data }) {
    const getValue = (metricList, metricId) => {
        for(let metricObj of metricList){
            if(metricObj.id === metricId){
                return metricObj.value
            }
        }
    }
    return (
    <ul className='ListOfAds'>
        
        {   
        (Data.length === 0 || Data[0] === undefined)
            ?<li className='NoAds'>
                <h1>Sorry, no ads!</h1>
                <NavLink className='BackButton' to='/'>Вернуться к фильтру</NavLink>
             </li>
                : Data.map(item=>(
                    <li key={item.sourceUrl} className='Ads'>
                        <p className='header'>{item.make} {item.model} <span>{item.originalPrice}$</span></p>
                        <img src={item.imageUrl} className='IMG'/>
                        <span className='DateAds'> Дата объявления: {item.createdAt}</span>
                        <div className='body'>
                            <p>Год выпуска: <span>{item.yearOfIssue}</span></p>
                            <p>Коробка передач: 
                                <span>{getValue(CHOICETRANSMISSION, item.transmissionType)}</span>
                            </p>
                            <p>Тип двигателя: 
                                <span>{getValue(ENGINETYPE, item.engineType)}</span>
                            </p>
                            <p>Объём двигателя: <span>{item.engineCapacity}</span></p>
                            <p>Тип кузова: 
                                <span>{getValue(BODYTYPE, item.bodyType)}</span>
                            </p>
                            <p>Пробег: <span>{item.mileage} км</span></p>
                        </div>
                        <p className='country'>{item.city}</p>
                    </li>
            ))
        }
    </ul>
  )
}
