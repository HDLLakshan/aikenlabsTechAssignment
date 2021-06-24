import React from 'react'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import CardView from "./CardView";
import {GiShare} from "react-icons/gi";
import {MdRefresh} from "react-icons/md";
import {BsBoxArrowUpRight} from "react-icons/bs";
import {DateTime} from "luxon";

let now = DateTime.now();

function SamplePage({chartList, editChartById, handleOnDragEnd, deleteById}) {


    return (

        <div>

            <div style={{color: "grey",}} className='flex justify-between'>


                <span className='flex'>
                  <MdRefresh size={30}/>
                  <span style={{fontSize: "25px"}}>Sales Dashboard</span>
                </span>

                <span>
                    {now.toFormat(" EEE")}
                    <span style={{textTransform: "lowercase", fontSize: "25px"}}>
                        {now.toFormat(" t ")}
                    </span>
                    {now.toFormat(" dd MMMM yyyy")}
                </span>

                <span className='flex'>
                    <BsBoxArrowUpRight size={30}/>
                    <GiShare size={30}/>
                </span>
            </div>


            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="chartArray">

                    {(provided) => (
                        <div  {...provided.droppableProps}
                              ref={provided.innerRef} style={{
                            display: 'flex', flexWrap: 'wrap',
                            flexDirection: 'row', alignItems: 'flex-start'
                        }}>
                            {
                                chartList.map(({id, name, chartType}, index) => {

                                    return (
                                        <Draggable key={id} draggableId={id} index={index}>
                                            {(provided) => (

                                                <div {...provided.draggableProps} {...provided.dragHandleProps}
                                                     ref={provided.innerRef} key={index}>
                                                    <CardView id={id} name={name} chartType={chartType}
                                                              editChartById={editChartById} deleteById={deleteById}/>
                                                </div>

                                            )}
                                        </Draggable>
                                    )
                                })
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

        </div>
    )
}

export default SamplePage
