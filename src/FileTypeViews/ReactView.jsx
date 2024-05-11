import { useState } from 'react';
import LoadingView from '../ViewUtilities/LoadingView';
const ReactView = ({selectedFile}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return ( 
        <div style={{
            width: '100%',
            height: '100%',
        }}>
            
            <iframe style={{
                width: '100%',
                height: '100%',
                display: isLoaded ? 'inline' : 'none'
            }}
            
            title = {selectedFile["name"]}
            src = {selectedFile["fileName"]}
            onLoad = {() => setIsLoaded(true)}
            />
            
            {!isLoaded && (
                <LoadingView />
            )}
        </div>   
    )
}

export default ReactView;