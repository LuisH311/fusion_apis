import React from 'react'
import { Spinner } from './spinner'
import './css/card.css'
export const Card = ({ weather , showData , loadingData}) => {
    let today = new Date();
    let day = today.getDate();
    let month= today.getMonth();
    let year = today.getFullYear();
    let fecha= `${day} / 12 / ${year}`;
    let url = '';
    let iconoUrl= '';
    if (loadingData) {
        return <Spinner/>
    }
    if (showData){
        url= 'http://openweathermap.org/img/w/';
        iconoUrl = url + weather.weather[0].icon  + '.png'
    }
    return (
    
        <div className='contenedor-card'>
        {
            showData === true ? (
                    <div className={(weather.main.temp - 273.15).toFixed(1)>20 ?'cont_card':'cont_carta'}>
                        <section className='namee'>
                        <h5 className='name-name'>{weather.name}</h5>
                        </section>
                        <hr className='hr' />
                        <section className='temp'>
                            <div className='ico-temp'>
                        <img className='icono' src={iconoUrl}/>
                        <h5 className='tempo'>{(weather.main.temp - 273.15).toFixed(1)}°</h5>
                        </div>
                        <div className='temperatura'>
                                <h5 className='name-city'>{weather.weather[0].description} </h5>
                                </div>
                                <div className='max-min'>
                                <h5 className='name-city'>Max: {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                            <h5 className='name-city'> Min:{(weather.main.temp_min - 273.15).toFixed(1)}°C</h5>
                            </div>
                        </section>
                        <hr className='hr' />
                        <section className='date'>
                        <h5 className='name-fecha'>{fecha} </h5>
                        </section>
                    </div>

        ):(
            <h2 className='text'> sin datos</h2>
        )
    }
    </div>

    )
    }

    