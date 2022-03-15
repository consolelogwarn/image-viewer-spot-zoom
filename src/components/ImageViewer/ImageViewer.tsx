import React from 'react';


export interface ImageViewerProps {
    src: string
}

const ImageViewer = (props: ImageViewerProps) => {
    return(
        <img src={props.src}></img>
    )
}


export default ImageViewer;

