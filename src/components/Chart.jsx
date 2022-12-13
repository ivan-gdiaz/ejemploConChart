import React from 'react';
import api2 from '../api2';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { CategoryScale } from "chart.js";
import { Chart as ChartJS } from "chart.js/auto";

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
         
        setDataChart({ 
          labels: dateOfCases, 
          datasets: [{ 
            fill: true,
            label: 'Confirmed cases', 
            data: confirmedCases, 
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }]
        });

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