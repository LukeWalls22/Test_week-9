import React, {useState} from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
    MDBSpinner,
  } from "mdb-react-ui-kit";
import SchedaOra from '../Components/SchedaOra';

export default function Meteo() {

    const {id} = useParams();

    const [meteo, setMeteo] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [date, setDate] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [wetLoading, setWetLoading] = useState(true);

    function getDate() {
      let oggi = new Date();
      let ora = oggi.getHours();
      let minuti = oggi.getMinutes();
      return `${ora}:${minuti}`;
    }

    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${id}&APPID=c3d354439f4b828e02a2ded57600c863&units=metric&lang={it}`
    const prevUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${id}&APPID=c3d354439f4b828e02a2ded57600c863&units=metric&lang={it}`

    useEffect( () => {

      fetch(apiUrl)
        .then(response => response.json())
        .then(json => {
          setMeteo(...meteo, json);
          setIsLoading(false);
        })
        .catch(err => console.error(err))

        fetch(prevUrl)
        .then(response => response.json())
        .then(ciccio => {
          setForecast(...forecast, ciccio);
          setWetLoading(false);
        })
        .catch(err => console.error(err))

        setDate(getDate());

    }, [])

  return (
    <>
    <h1 className='mt-3 mb-5'>Meteo - {id.charAt(0).toUpperCase()+id.slice(1)}</h1>
    {console.log(meteo)}
    {console.log(forecast)}
    
    <div>
      {isLoading ? <MDBSpinner className='mx-2' color='info'>
        <span className='visually-hidden'>Loading...</span>
      </MDBSpinner> : 
      <MDBContainer className="h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="8" lg="6" xl="4">
            <MDBCard style={{ color: "#4B515D", borderRadius: "35px" }}>
              <MDBCardBody className="p-4">
                <div className="d-flex">
                  <MDBTypography tag="h4" className="flex-grow-1">
                    {id.charAt(0).toUpperCase()+id.slice(1)}
                  </MDBTypography>
                </div>
                <div className="d-flex">
                  <MDBTypography tag="h6" className="flex-grow-1">{date}</MDBTypography>
                </div>

                <div className="d-flex flex-column text-center mt-5 mb-4">
                  <MDBTypography
                    tag="h6"
                    className="display-4 mb-0 font-weight-bold"
                    style={{ color: "#1C2331" }}
                  >
                    {" "}{meteo?.main?.temp}°C{" "}
                  </MDBTypography>
                  <span className="small" style={{ color: "#868B94" }}>
                    {meteo?.weather[0]?.description.charAt(0).toUpperCase()+meteo?.weather[0]?.description.slice(1)}
                  </span>
                </div>

                <div className="d-flex align-items-center">
                  <div className="flex-grow-1" style={{fontSize: '1rem'}}>
                    <div>
                      <MDBIcon
                        fas
                        icon="wind fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> {meteo?.wind?.speed} km/h</span>
                    </div>
                    <div>
                      <MDBIcon
                        fas
                        icon="tint fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> {meteo?.main?.humidity}% </span>
                    </div>
                    <div>
                      <MDBIcon
                        fas
                        icon="water fa-fw"
                        style={{ color: "#868B94" }}
                      />{" "}
                      <span className="ms-1"> {meteo?.main?.sea_level} hPa </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src={`https://openweathermap.org/img/wn/${meteo?.weather[0]?.icon}.png`}
                      width="90px"
                    />
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>}
      
      {wetLoading ? <></> :
      <SchedaOra dati={{...forecast}}/>}
    </div>


    </>
  )
}
