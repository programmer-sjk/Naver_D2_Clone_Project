import React, {useEffect, useState} from 'react';
import { useLocation  } from 'react-router-dom';

import PostArticle from 'components/common/postarticle';
import PaginateBox from 'components/common/paginatebox';

import 'css/Search.css';

const Search = () => {
    
    const keyword  = new URLSearchParams(useLocation().search).get('keyword');
    const result = useLocation().state.result;
    
    const initStr = Object.keys(result).length > 0 && '에 대한 결과' || '에 대한 결과가 없습니다.'
    const [resultString, setResultString] = useState(initStr);
    const [pageSize, setPageSize] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [searches, setSearches] = useState([]);

    const onPageChange = (page) => {
        setCurrentPage(page);
    
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    };

    const setSearchDatas = (data) => setSearches(data) || setResultString('에 대한 결과') || true;
    
    useEffect(() => {
        Object.keys(result).length > 0 && setSearchDatas(result.content) || setResultString('에 대한 결과가 없습니다.');
    }, [result])
    return (
        <div>
            <div className="keyword_area">
                <div className="keyword">
                    <span className="text">'{keyword}'</span> {resultString}
                </div>
            </div>
            {searches.length && 
                <div id="container">
                    <div className="con_area">
                        <div className="contents hworld">
                            <PostArticle
                            articles={searches}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            />
                            <PaginateBox
                            itemsCount={searches.length}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={onPageChange}
                            />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Search;