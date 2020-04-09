import React from 'react';


const Description = ({bgColor, title, desc}) => {
    const descStyle = {
        backgroundColor:bgColor
    }

    return (
        <div style={descStyle} className="description">
            <p>
                <span className="title">{title}</span> 
                <span className="divide"></span>
                <span className="desc">{desc}</span>
            </p>
        </div>
    )
}

export default Description