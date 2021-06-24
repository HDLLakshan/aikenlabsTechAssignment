import React, {useState} from 'react';
import ReactApexChart from 'react-apexcharts'

function Bar(props) {
    const [series] = useState([{
        data: [44, 55, 41, 64, 22]
    }, {
        data: [53, 32, 33, 52, 13]
    }])

    const [options] = useState({
        chart: {
            type: 'bar',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                dataLabels: {

                    position: 'top',
                },
            }
        },
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#fff']
            }
        },
        stroke: {
            show: true,
            width: 0.5,
            colors: ['#fff']
        },
        tooltip: {
            shared: true,
            intersect: false
        },
        xaxis: {
            categories: [2001, 2002, 2003, 2004, 2005],
        },
        legend: {
            show: props.legends
        },

    })
    return (
        <div className='m-3'>
            <ReactApexChart options={options} series={series} type="bar" width={props.width} height={props.height}/>
        </div>
    );
}

export default Bar;
