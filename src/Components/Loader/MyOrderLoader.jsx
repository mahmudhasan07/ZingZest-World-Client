import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';

const MyOrderLoader = () => {
    const [x1Value, setx1Value] = useState("150");
    const [x2Value, setx2Value] = useState("150");
    const [x3Value, setx3Value] = useState("20");
    const [y1value, sety1value] = useState("30");
    const [y2value, sety2value] = useState("70");
    const [y3value, sety3value] = useState("10");

    const [width1Value, setwidth1Value] = useState("350");
    const [width2Value, setwi2th1Value] = useState("300");
    const [width3Value, setwi3th1Value] = useState("110");

    const [height1Value, setheight1Value] = useState("25");
    const [height2Value, setheight2Value] = useState("15");
    const [height3Value, setheight3Value] = useState("90");


    useEffect(() => {
        if (window.matchMedia("screen and (max-width:770px)")) {
            console.log("medium screen paise");
        }
        if (window.matchMedia("screen and (max-width:420px)")) {
            console.log("small screen paise");
        }

    }, []);
    return (
        <div className="border-2">
            <ContentLoader
                width={600}
                height={120}
                backgroundColor="#ababab"
                foregroundColor="#fafafa"
                className='border-2 mx-auto'
            >
                {/* <rect x="150" y="30" rx="5" ry="5" width="350" height="25" />
                <rect x="150" y="70" rx="5" ry="5" width="300" height="15" />
                <rect x="20" y="10" rx="0" ry="0" width="110" height="90" /> */}
                <rect x="100" y="20" rx="5" ry="5" width="250" height="15" />
                <rect x="100" y="50" rx="5" ry="5" width="200" height="10" />
                <rect x="20" y="10" rx="0" ry="0" width="60" height="60" />
            </ContentLoader>
        </div>
    );
};

export default MyOrderLoader;