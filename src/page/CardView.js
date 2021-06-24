import React, {useState} from 'react';
import Line from "../charts/Line";
import Bar from "../charts/Bar";
import Pie from "../charts/Pie";
import ModelView from "./ModelView";
import ActionModel from "./ActionModel";
import {BiZoomIn, BiStar, BiDotsVerticalRounded} from 'react-icons/bi'

function CardView({id, name, chartType, editChartById, deleteById}) {
    const [show, setShow] = useState(false)
    const [showAction, setShowAction] = useState(false);

    const checkType = (type) => {
        if (type === 'line')
            return <Line width={350} height={250} legends={false}/>
        else if (type === 'bar')
            return <Bar width={350} height={250} legends={false}/>
        else
            return <Pie width={350} height={250} legends={false}/>
    }

    const onClose = () => {
        setShow(false)
        setShowAction(false)
    }

    return (
        <div
            className="bg-white p-2 shadow m-5 p-0">

            <div className='mt-0'>
                <p className='inline font-semibold font-serif text-gray-500'>{name}</p>
                <div className='inline-block float-right'>


                    <button className='mx-1 focus:outline-none'>
                        <BiStar size={20}/>
                    </button>

                    <button className='mx-1 focus:outline-none'  onClick={()=> setShow(true)}>
                        <BiZoomIn size={20}/>
                    </button>

                    <button className='focus:outline-none' onClick={()=> setShowAction(true)}>
                        <BiDotsVerticalRounded size={20} />
                    </button>

                    <ModelView show={show} onClose={onClose} type={chartType}/>

                    <ActionModel show={showAction} onClose={onClose} id={id} name={name} chartType={chartType}
                                 editChartById={editChartById} deleteById={deleteById}/>
                </div>
            </div>
            {checkType(chartType)}
        </div>
    );
}

export default CardView;
