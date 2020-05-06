import React from 'react';


const History = ({history}) => {

    const splitEnter = (data) => data.split('\n');

    return (
        <div>
            <div className="year">{history.year}</div>
            <div className="year_item">
                <ul>
                    {history.info.map((info, idx) =>
                        <li key={idx}>
                            <span className="dot"></span>
                            <strong className="year_title">{info.title}</strong>
                            <dl>
                                {splitEnter(info.comment).map( (v, idx) => 
                                    <div key={idx}>
                                        <dt></dt>
                                        <dd>{v}</dd>
                                    </div>
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