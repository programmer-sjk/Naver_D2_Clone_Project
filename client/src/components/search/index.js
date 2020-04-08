import React, {useEffect} from 'react';

const Search = ({history, match}) => {
    useEffect(() => {
        console.log('---')
        console.log(history);
        console.log(match.param);
    });

    const { keyword } = match.params;

    return (
        <div>
            {keyword}
        </div>
    )
}

export default Search;