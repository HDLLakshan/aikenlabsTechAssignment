import React, {useState} from 'react';
import ReactApexChart from 'react-apexcharts'
function Line(props) {
    const [series] = useState([{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }])

    const [options] = useState({
            chart: {
                type: 'line',
                zoom: {
                    enabled: false
                },
                toolbar: {
                    show: false
                },
                title : {
                    text: props.text
                }
            },
            dataLabels: {
                enabled: props.legends
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                show:false,
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
        },

    )
    return (
        <div className='m-3'>
            <ReactApexChart options={options} series={series} type="line" width={props.width} height={props.height} />
        </div>

    );
}

export default Line;
