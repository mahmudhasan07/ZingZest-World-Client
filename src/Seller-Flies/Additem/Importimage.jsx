import React from 'react';
import { Dropzone, FileCard, FileInputButton, FileMosaic, ImagePreview } from "@files-ui/react";
const Importimage = () => {
    const [files, setFiles] = React.useState([]);
    const updateFiles = (incommingFiles) => {
      setFiles(incommingFiles);
    };
    console.log(files);
    return (
        <div>
            <FileInputButton onChange={updateFiles} className='bg-yellow-600' value={files} />
            {/* <input type="file"  value={files} /> */}

            {files.map((file) => (
                // <FileCard key={file.id} {...file} preview image />
                <ImagePreview key={file.id} {...file} src={file}/>
                
                // <img src={file} key={file.id} alt="" />
            ))}
        </div>
    );
};

export default Importimage;