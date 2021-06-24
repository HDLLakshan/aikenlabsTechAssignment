import React from 'react';
import "react-responsive-modal/styles.css";
import {Modal} from "react-responsive-modal";
import Line from "../charts/Line";
import Bar from "../charts/Bar";
import Pie from "../charts/Pie";

function ModelView({show, onClose, type}) {

    const checkType = (type) => {
        if (type === 'line')
            return <Line width={600} height={500} legends={true}/>
        else if (type === 'bar')
            return <Bar width={600} height={500} legends={true}/>
        else
            return <Pie width={600} height={500} legends={true}/>
    }

    return (
        <Modal open={show} onClose={onClose}>
            {checkType(type)}
        </Modal>
    );
}

export default ModelView;
