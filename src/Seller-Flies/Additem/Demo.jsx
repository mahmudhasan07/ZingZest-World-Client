import React, { useState } from 'react';

const Demo = () => {

    const [imagearr, setimagearr] = useState([])
    const [imagepre, setimagepre] = useState([])
    const allimages = []
    const allimagespre = []
    const hanldeimageprview = (e) => {
        const image = e.target.files

        const imagearray = Array.from(image).map((element, idx) => element)
        const imagearraypreview = Array.from(image).map((element, idx) => URL.createObjectURL(element))
        setimagearr((preview)=> preview.concat(imagearray))
        setimagepre((preview)=> preview.concat(imagearraypreview))

        

        // for (let i = 0; i < image.length; i++) {
        //     const element = image[i];
        //     console.log(element);
        //     const preview = URL.createObjectURL(element)
        //     allimagespre.concat([preview])
        //     setimagepre(allimagespre)
        //     allimages.concat([element])
        //     setimagearr(allimages)

        // }

    }

    console.log(imagearr);
    console.log(imagepre);

    const handleremove=(id)=>{
        console.log(id);
        const nai = imagearr.filter((element,idx)=> imagearr[id] !== element)
        // console.log(nai);
        setimagearr(imagearr.filter((element,idx)=> imagearr[id] !== element))
        setimagepre(imagepre.filter((element,idx)=> imagepre[id] !== element))

    }


    return (
        <div>
            <input type="file" className='border-2 border-gray-600' multiple onChange={hanldeimageprview} />
            <div className='flex gap-5'>
                {
                        imagepre.map((element, idx) => <img onClick={()=> handleremove(idx)} key={idx} src={element} className='w-24' />)
    
                }
            </div>
        </div>
    );
};

export default Demo;