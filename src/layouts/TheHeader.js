import React,{useState} from 'react'
import HeaderLink from "./HeaderLink";
import {CSSTransition} from "react-transition-group";
import AddNewChart from "./AddNewChart";
import {MdUndo} from 'react-icons/md'


function TheHeader({isSidebarOpen,setIsSidebarOpen, addNewChart, chartList, setSearch, undo}){

    const [showMenu,setShowMenu] = useState(false)
    const [showAddPopUp, setShowAddPopUp] = useState(false)

    const mainLinks=[
        {
            title:'Dashboard',
            to:'/',
        },
        {
            title:'Play Area',
            to:'/',
        },
        {
            title:'Widget',
            to:'/',
        },
        {
            title:'Templates',
            to:'/',
        },
        {
            title:'Data Locker',
            to:'/',
        },
    ]

     const  closeAddNewModel = () => {
        setShowAddPopUp(false)
     }

    return(<>

        <div className={` ${isSidebarOpen?'md:pl-64':''} transition duration-400  w-full fixed z-40 bg-primary text-white p-2 py-4 flex justify-between flex-col md:flex-row items-center`}>
          <div className="flex items-center flex-col md:flex-row w-full md:px-0 px-4">
           <div className="flex items-center justify-between w-full md:w-auto">
              <div className="flex items-center">
                  <button onClick={()=>setIsSidebarOpen(!isSidebarOpen)} className="focus:outline-none hover:bg-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                  </button>

                  <div className="w-full relative px-2">
                        <span className="absolute text-gray-600 top-2 left-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </span>
                      <input type="text" placeholder="search by name" onChange={event => setSearch(event.target.value)}
                             className="form-input pl-8 block w-full  text-sm p-2 text-gray-600 bg-gray-50 border-solid border border-gray-200 rounded focus:border-primary focus:outline-none rounded focus:border-primary rounded-full"/>
                  </div>

                  <button className="mx-2 block bg-white rounded-full p-1 text-primary  hover:bg-gray-200 focus:outline-none  " onClick={()=> setShowAddPopUp(true)}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                  </button>
                  <AddNewChart show={showAddPopUp} onClose={closeAddNewModel} addNewChart={addNewChart} chartList={chartList}/>

                  <button  onClick={() => undo()} className="mx-2 block bg-white rounded-full p-1 text-primary  hover:bg-gray-200 focus:outline-none" >
                    <MdUndo size={25}/>
                  </button>


              </div>
               <p className="md:hidden">Menu</p>
               <button onClick={()=>setShowMenu(!showMenu)} className="md:hidden">
                   {
                       showMenu?
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                           </svg>

                            :
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                           </svg>
                   }
               </button>
           </div>

             <div className="hidden ml-2 md:flex">
                 {mainLinks.map((link,index)=><HeaderLink data={link} key={index} index={index} />)}
             </div>
          </div>

            <div className="block">
                <CSSTransition
                    in={showMenu}
                    timeout={300}
                    classNames={"fade"}
                    unmountOnExit
                >
                    <div>
                        <div className="md:hidden">
                            {mainLinks.map((link,index)=><HeaderLink data={link} key={index} />)}
                        </div>
                        <div className="flex items-center ">
                            <button className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>
                            <button className="rounded-full ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </CSSTransition>
            </div>




        </div>
    </>)
}export default TheHeader
