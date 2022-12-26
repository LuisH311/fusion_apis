import React, { useState } from 'react';
import './css/style.css';
export const ApiDivisas=() =>{
  let myHeaders = new Headers();
  const [resultado,setResultado]= useState(0);
  const handleSubmit=(e)=>{
    e.preventDefault();
  const moneda1= e.target.monedaUno.value;
  const moneda2= e.target.monedaDos.value;
  const monto= e.target.monto.value;
  console.log(moneda1)
  console.log(moneda2)
  console.log(monto)
    var myHeaders = new Headers();
            myHeaders.append("apikey", "6SWrIpIgmI7VmEeqv6T9IyBgcsFNAd66");
            fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${moneda2}&from=${moneda1}&amount=${monto}`,{
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
            })
            .then(response => response.json())
            .then(result => setResultado(result.result))
            .catch(error => console.log('error', error));
          }
    return (
     <div className='comtenedor-promax-2'>
        <div className='header-2'>
            <h2>Conversion de divisas</h2>
        </div>
        <form className="conversion-2" onSubmit={handleSubmit}>
            <div className='importe-2'>
        <label className='input-label-2'>Importe</label>
        <input type="text"  name='monto' className='input-field-1' placeholder="$" />
    </div>
    <div className='opciones-2'>
            <label className='input-label-2'>De:</label>
            <select className='select-2' name="monedaUno">
               <option value='COP'>COP</option>
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
              <option value='JPY'>JPY</option>
              <option value='AUD'>AUD</option>
              <option value='CNH'>CNH</option>
              <option value='HKD'>HKD</option>
              <option value='NZD'>NZD</option>
            </select>
        </div>
        <div className='opciones-2'>
            <label className='input-label-2'>A:</label>
            <select className='select-2' name="monedaDos">
             <option value='COP'>COP</option>
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
              <option value='JPY'>JPY</option>
              <option value='AUD'>AUD</option>
              <option value='CNH'>CNH</option>
              <option value='HKD'>HKD</option>
              <option value='NZD'>NZD</option>
            </select>
        </div>
        <div className='botones-2'>
            <button className='btn-a-2' type="submit">Convertir</button>
        </div>
            </form>
        <div className='resultado-2'>
            <label className='input-label-2'>Resultado</label>
            <input type="text" name='user' className='input-field-2'
            onChange={(e)=>{
              setResultado(e.target.value)
          }
            }
            value={resultado}
            />
        </div>
</div>
  );
}