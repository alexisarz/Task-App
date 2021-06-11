import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';



const Weather = () =>{

    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '824ad010d05db62dcc123514e2bbb76a',
        lat: '-34.599998',
        lon: '-58.450001',
        lang: 'es',
        unit: 'metric', 
      });

    
    return(
        <div className="card card-body bg-primary w-100 m-auto mt-5 h-50">
            <h4 className="text-light text-center mb-3">Tené en cuenta el clima</h4>
            <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="es"
                locationLabel="Buenos Aires"
                unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                showForecast
            />  
        </div>
    )
}




export default Weather;