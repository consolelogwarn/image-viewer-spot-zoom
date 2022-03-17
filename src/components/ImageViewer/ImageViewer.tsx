import React, { useState } from "react";
import './ImageViewer.css';

// props for ImageViewer Component
export interface ImageViewerProps {
    src: string,
    alt: string,
    height?: string,
    width?: string,
    outerContainerClass?: string,
    outerContainerStyle?: {[k: string]: string},
    imgContainerStyle?: {[k: string]: string},
    imgClass?: string,
    imageStyle?: {[k:string]: string},
}

// ImageViewer component
const ImageViewer = (props: ImageViewerProps)=> {
    // useState hook to keep track of backgroundPosition value 
    const [backgroundPos, setBackgroundPos] = useState('50% 50%');

    // read the props value
    const outerContainerStyle = {...props.outerContainerStyle} || {};
    const imgContainerStyle = {...props.imgContainerStyle} || {};
    const imgStyle = {...props.imageStyle} || {};

    // set height width of the image and the spot-zoom div
    // the height and width of the image and the spot-zoom div must be equal 
    imgContainerStyle.height = props.height || '100%';
    imgStyle.height = imgContainerStyle.height || '100%';
    imgContainerStyle.width = props.width || '100%';
    imgStyle.width = imgContainerStyle.width || '100%';

    // set background style on the spot-zoom div
    imgContainerStyle.backgroundPosition = backgroundPos;
    imgContainerStyle.backgroundImage = `url(${props.src})`;

    // onMouseMove callback
    // calculate and set background position of the background image on the div
    const onMouseMove = (event: any) => {
        const {offsetWidth, offsetHeight} = event.currentTarget;
        const {offsetX, offsetY} = event.nativeEvent;
        const x = offsetX/offsetWidth*100;
        const y = offsetY/offsetHeight*100;
        const pos = `${x}% ${y}%`;
        setBackgroundPos(pos);
    }

    return(
        <div className={props.outerContainerClass} style={outerContainerStyle}>
            <div className="spot-zoom" style={imgContainerStyle} onMouseMove={onMouseMove}>
                <img className={props.imgClass} src={props.src} alt={props.alt} style={imgStyle} />
            </div>
        </div>
    )
}


export default ImageViewer;
