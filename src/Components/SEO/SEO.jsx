import React from 'react';
import { Helmet } from 'react-helmet-async';
const SEOFile = ({ title, OGimage, OGtitle }) => {
    // console.log(title, OGimage, OGtitle);

    return (
        <section>
            <Helmet prioritizeSeoTags>
                {/* <meta charset="UTF-8" /> */}
                {/* <link rel='icon' type="image" href={OGimage} /> */}
                {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
                <meta property="og:title" content={OGtitle} />
                <meta property="og:image" content={OGimage} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="600" />
                <meta property="og:image:alt" content="Image is Loading..." />
                <title>{title}</title>
            </Helmet>
        </section>
    );
};

export default SEOFile;