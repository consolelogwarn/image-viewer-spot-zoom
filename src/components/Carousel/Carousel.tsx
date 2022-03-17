import React, { useState } from "react";
import ImageViewer from '../ImageViewer/ImageViewer';

// prop types for Carousel component
export interface CarouselProps {
    contents: CarouselContent[],
    startingKey: string | number,
    onClickThumbnail?: (obj: CarouselContent) => any;
    mainContainerClass?: string,
    mainContainerStyle?: { [k: string]: string },
    thumbnailContainerClass?: string,
    thumbnailContainerStyle?: { [k: string]: string },
    imageViewerContainerClass?: string,
    imageViewerContainerStyle?: { [k: string]: string },
}

// Individual Carousel item props
export interface CarouselContent {
    key: string | number,
    src: string,
    thumbnail: string,
    type: string,
    alt: string,
    height?: string,
    width?: string,
    thumbnailAlt?: string,
    thumbnailClass?: string,
    thumbnailStyle?: {[k:string]: string},
    outerContainerStyle?: {[k:string]: string},
    imgContainerStyle?: {[k: string]: string},
    imageStyle?: {[k:string]: string},
}


// Carousel component
const Carousel = (props: CarouselProps) => {
    // keep track of the which key to show in the state
    const [selectedKey, setSelectedKey] = useState(props.startingKey);

    // styles for main outer container
    const mainContainerDefault = { display: 'flex' };
    const mainContainerStyle = { ...mainContainerDefault, ...props.mainContainerStyle } || { ...mainContainerDefault };
    // styles for thumbnail container
    const thumbnailContainerDefault = {
        display: 'flex',
        flexDirection: 'column' as 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
     };
    const thumbnailContainerStyle = { ...thumbnailContainerDefault, ...props.thumbnailContainerStyle} || { ...thumbnailContainerDefault };

    // styles for image viewer container 
    const imageViewerContainerStyle = props.imageViewerContainerStyle || {};

    // on click callback on thumbnail items
    const onClickThumbnail = (obj: CarouselContent) => {
        setSelectedKey(obj.key);
        if(props.onClickThumbnail){
            props.onClickThumbnail(obj);
        }
    }

    return (
        <div className={props.mainContainerClass} style={mainContainerStyle}>
            <div className={props.thumbnailContainerClass} style={thumbnailContainerStyle}>
                {props.contents.map(v => {
                    const styleObj = {...v.thumbnailStyle}
                    if(!styleObj.height && !styleObj.width){
                        styleObj.height = styleObj.height || '5em';
                        styleObj.width = styleObj.width || '5em';
                    }
                    styleObj.cursor = 'pointer';
                    return (
                        <img src={v.thumbnail} 
                            className={v.thumbnailClass}
                            key={v.key}
                            alt={v.thumbnailAlt || "thumbnail"}
                            style={styleObj}
                            onClick={()=> onClickThumbnail(v)}
                        />
                    )
                    }
                )}
            </div>
            <div className={props.imageViewerContainerClass} style={imageViewerContainerStyle}>
                {
                    props.contents.filter(v => v.key === selectedKey).map(v => (
                        <ImageViewer {...v} />
                    ))
                }
            </div>
        </div>
    );
}



export default Carousel;
