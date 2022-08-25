import React, { useState } from "react";



function Bar({ value, width }) {

    return (
        <div
            className="Array-bar"
            data-value={value}
            style={{ 
                height: `${value}px`, 
                width: `${width}px`,
            }}
        >
            <span className="Array-bar-tooltip">{value}</span>
        </div>
    )
}


export default Bar;