import React from "react";
import UnityView from "./UnityView";
const ProjectView = ({selectedFile}) => {

    function showContextForSelectedFile(file){
        if(file["fileType"] === "unity"){
            return <UnityView />
        }
        return <span>{file["name"]}</span>
    }


    return (
        <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'green',
        }}>
            {selectedFile ? showContextForSelectedFile(selectedFile) : null}
        </div>
    ) //<UnityView />
}

export default ProjectView;