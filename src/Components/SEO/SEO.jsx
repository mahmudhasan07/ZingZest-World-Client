import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, OGimage, OGtitle }) => {
    return (
        <section>
            <Helmet prioritizeSeoTags>
                <meta property="og:title" content={OGtitle} />
                {/* <meta property="og:description" content="Mahmud Hasan Siddique as a MERN Stack developer" /> */}
                <meta property="og:image" content={OGimage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                {/* <meta property="og:image:alt" content="Mahmud Hasan Siddique personal profile" /> */}
                <link></link>
                <title>{title}</title>
            </Helmet>
        </section>
    );
};

export default SEO;