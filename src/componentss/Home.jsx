import React from 'react'
import image from "./img/imagen.jpg";
import './css/home.css'
export const Homes = () => {
  return (
        <div className='cont-home'>
            <div className= 'container'>
        <div className="container_content">
        <div className="container_content_inner">
        <div className="title">
        <h1 className='hello'>Hola Mundo</h1>
        </div>
        <div className="par">
        <p>
        Bienvenidos a nuestro aplicativo web donde visualizaremos los diferentes servicios que nos ofrecen estas, en las cuales podremos observar su funcionalidad y requerimiento que se le solicite.
        </p>
        </div>
        <div className="btns">
        <p className='btns_more'> SIGAMOS... </p>
        </div>
        </div>
        </div>
        <div className="container_outer_img">
        <div className="img-inner">
            </div>
            </div>
        </div>
        <div className="overlay"></div>
        </div>
    )
    }
