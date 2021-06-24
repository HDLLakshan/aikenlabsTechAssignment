import React, {useState} from 'react'
import TheSidebar from "./TheSidebar";
import {CSSTransition} from "react-transition-group";
import TheHeader from "./TheHeader";


function BaseLayout(props) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    return (
        <div
            className="min-h-screen flex flex-col bg-gray-100 flex-auto w-screen max-w-screen flex-shrink-0 antialiased bg-gray-50 text-gray-800">


            <div className="block">
                <CSSTransition
                    in={isSidebarOpen}
                    timeout={300}
                    classNames={"sidebar"}
                    unmountOnExit
                >
                    <TheSidebar {...props} setIsSidebarOpen={setIsSidebarOpen}/>
                </CSSTransition>
            </div>


            <TheHeader addNewChart={props.addNewChart} chartList={props.chartList} setSearch={props.setSearch}
                       undo={props.undo} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
            <div className={`w-full ${isSidebarOpen ? 'md:pl-60' : 'pl-0'} bg-gray-100 transition duration-400`}>

                <div
                    className="container mx-auto  px-10 pt-24  bg-gray-100 h-screen max-h-screen overflow-y-auto hide-scroll-bar">

                    {props.children}

                </div>
            </div>
        </div>
    )
}

export default BaseLayout;

