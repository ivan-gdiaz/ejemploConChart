import React from 'react';
import api2 from '../api2';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import '../Chart.css';

export default function ChartTest() {
    const [ dataChart, setDataChart ] = useState({datasets: [],});

    const fetchData = async () => {
        let confirmedCases = [];
        let dateOfCases = [];
        
        await api2.get('dayone/country/brazil/status/confirmed')
          .then ( response => {
            for ( let dataObj of response.data ) {
              confirmedCases.push(parseInt(dataObj.Cases));
              let tempDate = new Date (dataObj.Date);
              dateOfCases.push(tempDate.getUTCDate());
            }
        });
         
        // setDataChart({ 
        //   labels: dateOfCases, 
        //   datasets: [{ 
        //     label: 'Confirmed cases', 
        //     data: confirmedCases 
        //   }]
        // });

    }

    useEffect(() => {
        fetchData();
      }, []);

      return( 
        <div className='container'>
          <Line data={ dataChart }/> 
        </div>
      )
    }