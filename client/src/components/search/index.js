import React, {useEffect} from 'react';
import Description from 'components/common/description'
import 'css/Search.css';

const Search = ({match}) => {
    const bgColor ='#f7f7f7';
    const title = 'D2 Program';
    const desc = '가치 있는 기술 지식 생산을 돕고, 경험을 나누며, 개발자를 지원합니다.';

    const { keyword } = match.params;

    return (
        <div>
            <div className="keyword_wrap">
                <div className="keyword">{keyword}</div>
            </div>
        </div>
    )
}

export default Search;