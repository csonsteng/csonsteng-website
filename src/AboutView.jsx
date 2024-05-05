import React from "react";
import FramedView from "./FramedView";
const AboutView = ({selectedFile, onMinimize, onRestore}) => {
    return (

        <div style={{
            width: '100%',
            height: '100%',
            overflow: 'auto',        
            userSelect: 'none'
        }}>
            {selectedFile && (<FramedView 
                title = {selectedFile['name']}
                onMinimize={onMinimize}
                onRestore={onRestore}
                content = {selectedFile ? selectedFile["content"] : null}
                />)}
            </div>
    )
}

export default AboutView;