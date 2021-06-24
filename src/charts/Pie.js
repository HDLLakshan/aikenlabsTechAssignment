import React, {useState} from 'react';
import ReactApexChart from 'react-apexcharts'

function Pie(props) {

    const [series] = useState([44, 55, 13, 43, 22])
    const [options] = useState({
        chart: {
            type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        legend: {
            show: props.legends,
            position: 'bottom'

        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    })

    return (
        <div className='mx-3 my-7'>
            <ReactApexChart options={options} series={series} type="pie" width={props.width} height={props.height}/>
        </div>
    );
}

export default Pie;
