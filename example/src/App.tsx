import './App.css';
import {Carousel, ImageViewer, CarouselContent} from '@consolelogwarn/image-viewer-spot-zoom';

const IMAGE_URL = 'https://images.unsplash.com/photo-1647365636403-530d555f28ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60';
const outerContainerStyle = { width: '400px', border: '1px solid #d3d3d3' };


const contents = [
  {
    "key": 1,
    "src": "https://images.unsplash.com/photo-1647363556532-d3c4cf734fe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "thumbnail": "https://images.unsplash.com/photo-1647363556532-d3c4cf734fe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "type": "image",
    "alt": "unsplash",
    "height": "400px",
    "width": "400px",
    "thumbnailStyle": { "border": "1px solid #ff6347", "borderRadius": "5px" }
  },
  {
    "key": 2,
    "src": "https://images.unsplash.com/photo-1638913659197-46040471de1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "thumbnail": "https://images.unsplash.com/photo-1638913659197-46040471de1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "type": "image",
    "alt": "unsplash",
    "height": "400px",
    "width": "400px",
    "thumbnailStyle": { "border": "1px solid #ff6347", "borderRadius": "5px" }
  },
  {
    "key": 3,
    "src": "https://images.unsplash.com/photo-1647376585323-c0524f6cc7a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "thumbnail": "https://images.unsplash.com/photo-1647376585323-c0524f6cc7a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "type": "image",
    "alt": "unsplash",
    "height": "400px",
    "width": "400px",
    "thumbnailStyle": { "border": "1px solid #ff6347", "borderRadius": "5px" }
  },
  {
    "key": 4,
    "src": "https://images.unsplash.com/photo-1556170570-5f2ee26640ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "thumbnail": "https://images.unsplash.com/photo-1556170570-5f2ee26640ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    "type": "image",
    "alt": "unsplash",
    "height": "400px",
    "width": "400px",
    "thumbnailStyle": { "border": "1px solid #ff6347", "borderRadius": "5px" }
  }
];


function App() {
  function onClickThumbnail(obj: CarouselContent) {
    console.log(obj);
  }

  const mainContainerStyle = { height: '100%' };
  const thumbnailContainerStyle = { 
    height: '100%', 
    padding: '0 10px', 
    justifyContent: 'space-around',
    borderRight: '1px solid #d3d3d3'
  };




  const imageViewerContainerStyle = {
    padding: '10px'
  };





  return (
    <div className='App svg-bg'>
      <h1>ImageViewer component to show single image !!!</h1>
      <ImageViewer  
        src={IMAGE_URL}  
        alt="Unsplash" 
        height='400px'
        outerContainerStyle={outerContainerStyle}
      />
      <div style={{color: '#ff6347', fontSize: '14px', marginBottom: '50px'}}>Photos taken from Unsplash.</div>
    <hr />
      <h1>
        Carousel component with thumbnail !!!
      </h1>
      <div style={{ width: '520px', border: '1px solid #d3d3d3', height: '420px'}}>
        <Carousel 
          contents={contents} 
          startingKey={1} 
          onClickThumbnail={onClickThumbnail}
          mainContainerStyle={mainContainerStyle}
          thumbnailContainerStyle={thumbnailContainerStyle}
          imageViewerContainerStyle={imageViewerContainerStyle}
        />
      </div>

      <div style={{color: '#ff6347', fontSize: '14px', marginBottom: '50px'}}>Photos taken from Unsplash.</div>
    </div>
  );
}

export default App;
