import React from 'react'


function SidebarLink(props) {

    const activeClass = "bg-gradient-to-r from-primary to-gray-200 "
    return (<>
        <div className={`${props.data === 'Sales' && activeClass} relative px-6 py-3`}>

            <div
                className="inline-flex cursor-pointer justify-between items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-200 dark:hover:text-gray-200">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                    <p className="ml-2 truncate">{props.data}</p>
                </div>
                <div>
                    <button className="bg-white rounded-full text-primary hover:bg-gray-200 focus:outline-none"
                            onClick={() => props.setFav(props.index)} disabled={props.buttonDis}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                             fill={props.index === 0 ? '' : "currentColor"}>
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                    </button>
                    <button className="text-red-500 ml-2 hover:text-red-400 focus:outline-none"
                            onClick={() => props.delete(props.index)}
                            disabled={props.data === 'Sales' || props.buttonDis}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>

                </div>

            </div>


        </div>

    </>)


}

export default SidebarLink;
