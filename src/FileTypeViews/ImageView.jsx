
import { useState } from 'react'
import LoadingView from '../LoadingView';
const ImageView = ({selectedFile}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div style={{
            width: '100%',
            height: '100%',
        }}>
            <img style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            display: isLoaded ? 'inline' : 'none'
            }}
            alt={selectedFile["alt"]}
            src={`${process.env.REACT_APP_CDN_URL}img/${selectedFile["fileName"]}.${selectedFile["fileType"]}`}
            onLoad={() => setIsLoaded(true)}
            />

            {!isLoaded && (
                <LoadingView/>
            )}
        </div>
    )
}

export default ImageView;