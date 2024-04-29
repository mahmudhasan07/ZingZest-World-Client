import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";

const ProductLoaderView = () => {

    const [loaderWidth, setloaderWidth] = useState(1000);
    useEffect(() => {

        if (window.matchMedia('screen and (max-width: 770px)').matches) {
            console.log("medium screen paise");
            setloaderWidth(600)
        }
        if (window.matchMedia('screen and (max-width: 420px)').matches) {
            console.log("coto secren paise");
            setloaderWidth(400)
        }
        
    }, []);

    return (
        <div className=' mx-auto'>
            <ContentLoader
                width={loaderWidth}
                height={500}
                viewBox="0 0 700 300"
                backgroundColor="#f5f5f5"
                foregroundColor="#dbdbdb"
                className='mx-auto'
            // {...props}
            >
                <rect x="4" y="8" rx="3" ry="3" width="7" height="288" />
                <rect x="6" y="289" rx="3" ry="3" width="669" height="8" />
                <rect x="670" y="9" rx="3" ry="3" width="6" height="285" />
                <rect x="55" y="42" rx="16" ry="16" width="274" height="216" />
                <rect x="412" y="113" rx="3" ry="3" width="102" height="7" />
                <rect x="402" y="91" rx="3" ry="3" width="178" height="6" />
                <rect x="405" y="139" rx="3" ry="3" width="178" height="6" />
                <rect x="416" y="162" rx="3" ry="3" width="102" height="7" />
                <rect x="405" y="189" rx="3" ry="3" width="178" height="6" />
                <rect x="5" y="8" rx="3" ry="3" width="669" height="7" />
                <rect x="406" y="223" rx="14" ry="14" width="72" height="32" />
                <rect x="505" y="224" rx="14" ry="14" width="72" height="32" />
                <rect x="376" y="41" rx="3" ry="3" width="231" height="29" />
            </ContentLoader>
        </div>
    );
};

export default ProductLoaderView;