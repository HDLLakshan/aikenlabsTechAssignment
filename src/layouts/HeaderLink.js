import React from 'react'

function HeaderLink(props) {
    const activeClass = "bg-white text-gray-600 rounded-md "
    return (
        <div className={`px-4 py-2 font-semibold text-lg ${props.index === 0 && activeClass}`}>
            {props.data.title}
        </div>
    )
}

export default HeaderLink
