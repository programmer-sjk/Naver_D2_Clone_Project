import React from 'react';
import { withRouter  } from 'react-router-dom';

const SearchBtn = ({history}) => {
    let param = null;

    const search = () => {
        history.push('/search?keyword=' + param)
    }

    return (
        <div>
            <input type="text" placeholder="D2에서 검색" className="search_txt" onChange={(e) => param = e.target.value }/>
            <div className="searchBox">
                <button className="searchBtn" onClick={search}></button>
            </div>
        </div>
    )
}

export default withRouter(SearchBtn);