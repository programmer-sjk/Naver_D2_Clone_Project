import React from 'react';


const Content = ({data}) => {
    
    const imageStyle = {
        background: "url(" + data.image + ") no-repeat center"
    }

    return (
        <div className="content_wrap">
            <div style={imageStyle} className="img_box">
            </div>
            <div className="content">
                <div className="title"> {data.title}</div>
                <div className="text">{data.text}</div>
                <div className="detail"><a href={data.url}>{data.detail}</a></div>
            </div>
            <div className="clear">
            </div>
        </div>
    )
}

export default Content;