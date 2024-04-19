import React from 'react';
import ContentLoader from 'react-content-loader';

const MyOrderLoader = () => {
    return (
        <div className="border-2">
            <ContentLoader
            width={1000}
            height={80}
            backgroundColor="#ababab"
            foregroundColor="#fafafa"
            className='border-2'
        >
            <rect x="100" y="20" rx="5" ry="5" width="300" height="18" />
            <rect x="100" y="50" rx="5" ry="5" width="250" height="10" />
            <rect x="20" y="10" rx="0" ry="0" width="70" height="60" />
        </ContentLoader>
        </div>
    );
};

export default MyOrderLoader;