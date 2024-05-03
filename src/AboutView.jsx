import React from "react";
import FramedView from "./FramedView";
const AboutView = ({selectedFile}) => {
    return (

        <div style={{
            width: '100%',
            height: '100%',
            overflow: 'auto'
        }}>
            {selectedFile && (<FramedView 
                title = {selectedFile['name']}
                onHide={() => {
                    console.log('hide');
                }}
                content = {selectedFile ? selectedFile["content"] : null}
                />)}
            </div>
    )
}

export default AboutView;