import React from 'react';
import Table from 'react-bootstrap/Table';

export default function SchedaOra(forecast) {

  return (
    <>
        {console.log(forecast.dati.city.name)}
        <h2 className='mt-5'>Previsioni</h2>
        <Table striped bordered hover variant="primary" className='my-5'>
            <thead>
                <tr>
                <th>Ore</th>
                <th>Tempo</th>
                <th>Temperatura</th>
                <th>Vento</th>
                <th>Prob. di Pioggia</th>
                </tr>
            </thead>
            <tbody>
                {forecast.dati.list.map(i => (
                    <>
                    <tr>
                    <td className='pt-3'>{i.dt_txt.slice(11, 16)}</td>
                    <td><img src={`https://openweathermap.org/img/wn/${i.weather[0].icon}.png`}/> {i.weather[0].description.charAt(0).toUpperCase()+i.weather[0].description.slice(1)}</td>
                    <td className='pt-3'><i class="fa-solid fa-temperature-high"></i> {i.main.temp}°</td>
                    <td className='pt-3'><i class="fa-solid fa-wind"></i> {i.wind.speed} km/h</td>
                    <td className='pt-3'><i class="fa-solid fa-umbrella"></i> {i.clouds.all}%</td>
                    </tr>
                    </>
                ))}
            </tbody>
        </Table>
     </>
  )
}
