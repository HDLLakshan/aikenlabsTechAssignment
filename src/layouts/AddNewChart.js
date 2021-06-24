import React, {useState} from 'react';
import "react-responsive-modal/styles.css";
import {Modal} from "react-responsive-modal";

function AddNewChart({show, onClose, addNewChart, chartList}) {
    const [chartName, setChartName] = useState("");
    const [chartType, setChartType] = useState('line');

    const addChart = () => {
        let obj = {
            id: (chartList.length).toString(),
            name: chartName,
            chartType: chartType
        }
        addNewChart(obj)
        setChartName('')
        onClose()
    }

    return (
        <Modal open={show} onClose={onClose}>
            <h2 className='m-5 font-bold font-sans text-xl'>Add New Chart</h2>
            <div>
                <div>
                    <label className='font-semibold'>Chart Name</label>
                    <input type='text'
                           className='mx-2 w-full form-input   mt-1 text-sm p-2 bg-gray-50 border-solid border border-gray-200 rounded focus:border-primary focus:outline-none rounded focus:border-primary'
                           value={chartName} onChange={(event => setChartName(event.target.value))}/>
                </div>

                <div className='mt-3'>
                    <label className=' mt-3 font-semibold'>Chart Type</label>
                    <select
                        className='mx-2 w-full form-input   mt-1 text-sm p-2 bg-gray-50 border-solid border border-gray-200 rounded focus:border-primary focus:outline-none rounded focus:border-primary'
                        value={chartType} onChange={event => setChartType(event.target.value)}>
                        <option value='line'>Line</option>
                        <option value='bar'>Bar</option>
                        <option value='pie'>Pie</option>
                    </select>

                </div>

                <div className='text-center m-4'>
                    <button
                        className='px-4 py-2 rounded-sm hover:bg-white border hover:border-primary hover:text-primary bg-primary text-white'
                        disabled={chartName === ''} onClick={() => addChart()}>Submit
                    </button>
                </div>


            </div>


        </Modal>
    );
}

export default AddNewChart;
