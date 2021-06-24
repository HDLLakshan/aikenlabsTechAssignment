import React, {useState} from 'react';
import {Modal} from "react-responsive-modal";

function ActionModel(props) {
    const [chartName, setChartName] = useState(props.name);
    const [chartType, setChartType] = useState(props.chartType);

    const editChart = () => {
        let obj= {
            id: props.id,
            name: chartName,
            chartType: chartType
        }
        props.editChartById(obj)
        props.onClose()

    }

    return (


            <Modal open={props.show} onClose={props.onClose}  >
                <h2 className='m-5  font-bold font-sans text-xl'>Edit Chart</h2>
                <div className='px-4 w-full'>
                    <div>
                        <label className='block mt-3 font-semibold'>Chart Name</label>
                        <input type='text' className='ml-2 w-full form-input block  mt-1 text-sm p-2 bg-gray-50 border-solid border border-gray-200 rounded focus:border-primary focus:outline-none rounded focus:border-primary'
                               value={chartName} onChange={(event => setChartName(event.target.value))}/>
                    </div>

                    <div className='block mt-5 font-semibold'>
                        <label>Chart Type</label>
                        <select className='ml-2 w-full form-input block  mt-1 text-sm p-2 bg-gray-50 border-solid border border-gray-200 rounded focus:border-primary focus:outline-none rounded focus:border-primary'
                                value={chartType} onChange={event => setChartType(event.target.value)}>
                            <option value='line'>Line</option>
                            <option value='bar'>Bar</option>
                            <option value='pie'>Pie</option>
                        </select>

                    </div>

                    <div className='text-center m-5'>
                        <button className='px-4 py-1 rounded-sm hover:bg-white border hover:border-yellow-300 hover:text-yellow-300 bg-yellow-300 text-white  m-2' onClick={() => editChart()} disabled={props.name === chartName && props.chartType === chartType} >Edit</button>
                        <button className='px-4 py-1 dark:bg-red-500 rounded-sm hover:bg-white border hover:border-red-500 hover:text-primary bg-red-500 text-white  m-2' onClick={() => props.deleteById(props.id)}  >Delete</button>
                    </div>



                </div>


            </Modal>

    );
}

export default ActionModel;
