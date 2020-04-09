import React, {useEffect} from 'react';
import { Link, withRouter  } from 'react-router-dom';

const SearchBtn = ({history}) => {
    let param = null;

    const search = () => {
        console.log('inside of searchbtn : ' + '/search/' + param)
        history.push('/search/' + param)
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