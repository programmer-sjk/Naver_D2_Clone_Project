import React from 'react';


const History = ({history}) => {
    return (
        <div>
            <div className="year">{history.year}</div>
            <div className="year_item">
                <ul>
                    {history.info.map((info, idx) =>
                        <li>
                            <span className="dot"></span>
                            <strong className="year_title">{info.title}</strong>
                            <dl>
                                {info.detail.map( v => 
                                    <dt><dd>{v}</dd></dt>
                                )}
                            </dl>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default History;