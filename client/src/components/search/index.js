import React, {useEffect, useState} from 'react';
import { useLocation  } from 'react-router-dom';
import { search } from 'services/axios'
import 'css/Search.css';

const Search = () => {
    const keyword  = new URLSearchParams(useLocation().search).get('keyword');
    const [resultString, setResultString] = useState('에 대한 결과');

    useEffect(() => {
        async function getSearchResult () {
            const data = await search(keyword);
            data.length === 0 && setResultString('에 대한 결과가 없습니다.');
        }

        getSearchResult()
    })
    return (
        <div>
            <div className="keyword_area">
                <div className="keyword">
                    <span className="text">'{keyword}'</span> {resultString}
                </div>
            </div>
        </div>
    )
}

export default Search;