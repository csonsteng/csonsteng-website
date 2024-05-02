import { useState } from 'react';
import LoadingView from '../LoadingView';
const PDFView = ({selectedFile}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div style={{
            width: '100%',
            height: '100%',
        }}>
            <iframe style={{
            width: '100%',
            height: '100%',
            display: isLoaded ? 'block' : 'none'
            }}
            title = {selectedFile["fileName"]}
            src={`${process.env.REACT_APP_CDN_URL}pdf/${selectedFile["fileName"]}.pdf`}
            onLoad={() => setIsLoaded(true)}
            />
            
            {!isLoaded && (
                <LoadingView />
            )}
        </div>
    )
}

export default PDFView;