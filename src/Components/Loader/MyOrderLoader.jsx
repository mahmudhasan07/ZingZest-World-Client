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
    const [width2Value, setwidth2Value] = useState("300");
    const [width3Value, setwidth3Value] = useState("110");

    const [height1Value, setheight1Value] = useState("25");
    const [height2Value, setheight2Value] = useState("15");
    const [height3Value, setheight3Value] = useState("90");


    useEffect(() => {
        if (window.matchMedia("screen and (max-width:770px)").matches) {
            console.log("medium screen paise");
            setx1Value("150")
            setx2Value("150")
            setx3Value("20")

            sety1value("30")
            sety2value("70")
            sety3value("10")

            setwidth1Value("350")
            setwidth2Value("300")
            setwidth3Value("110")

            setheight1Value("25")
            setheight2Value("15")
            setheight3Value("90")


        }
        if (window.matchMedia("screen and (max-width:420px)").matches) {
            console.log("small screen paise");
            setx1Value("100")
            setx2Value("100")
            setx3Value("20")

            sety1value("20")
            sety2value("50")
            sety3value("10")

            setwidth1Value("250")
            setwidth2Value("200")
            setwidth3Value("60")

            setheight1Value("15")
            setheight2Value("10")
            setheight3Value("60")
        }

    }, []);
    return (
        <div className="">
            <ContentLoader
                width={600}
                height={115}
                backgroundColor="#ababab"
                foregroundColor="#fafafa"
                className=' mx-auto'
            >
                {/* <rect x="150" y="30" rx="5" ry="5" width="350" height="25" />
                <rect x="150" y="70" rx="5" ry="5" width="300" height="15" />
                <rect x="20" y="10" rx="0" ry="0" width="110" height="90" /> */}
                <rect x={x1Value} y={y1value} rx="5" ry="5" width={width1Value} height={height1Value} />
                <rect x={x2Value} y={y2value} rx="5" ry="5" width={width2Value} height={height2Value} />
                <rect x={x3Value} y={y3value} rx="0" ry="0" width={width3Value} height={height3Value} />
            </ContentLoader>
        </div>
    );
};

export default MyOrderLoader;