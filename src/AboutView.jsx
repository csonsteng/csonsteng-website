import React from "react";
const AboutView = ({selectedFile}) => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'yellow',
        }}>{selectedFile ? selectedFile["content"] : null}</div>
    )
}

export default AboutView;