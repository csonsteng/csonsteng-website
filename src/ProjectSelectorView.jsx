import { useState, useEffect } from "react";
import dataFile from "./data.json";

const ProjectSelectorView = ({selectFile}) => {

    const [data] = useState(dataFile);
    const [folderStates, setFolderStates] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);

    function unWrapData(){
        return data.map((file, i) => unWrapFile(file, 0, `${i}`));
    }

    function unWrapFile(file, indent, index){
        if(file["fileType"] === "dir"){
            return (
                <>
                {displayFile(file, indent, index)}
                {folderStates[index] && (
                    file["content"].map((subFile, i) => unWrapFile(subFile, indent + 1, `${index}.${i}`))
                )}
                </>
            )
        }
        return displayFile(file, indent, index);
    }

    function displayFile(file, indent, index){  
        return (
            <p 
            style={{
                textAlign: 'left',
                userSelect: 'none',
                cursor: 'pointer'
            }}
            
            onClick={() => {    
                if(file["fileType"] === "dir"){  
                    setFolderStates(previous => ({
                        ...previous,
                        [index]: !previous[index]
                    }));
                }else{
                    setSelectedFile(file);
                    selectFile(file);
                }
            }}><pre>{[...Array(indent)].map((_) => '  ')}{file["name"]}.{file["fileType"]}</pre></p>
        )
    }

    useEffect(() => {
        if(selectedFile !== null) return;
        for (var i = 0; i < data.length; i++){
            let file = data[i];
            if(file["name"] === "Readme"){
                setSelectedFile(file);
                selectFile(file);
                return;
            }         
        }
    }, [data, selectedFile, selectFile]);

    useEffect(() => {

        let initialFolderStates = {};

        function setInitialFolderState(file, parentIndex, subIndex){
            let index = parentIndex === 0 ? `${subIndex}` : `${parentIndex}.${subIndex}`;
            initialFolderStates[index] = false;
            for (var i = 0; i < file["content"].length; i++){
                let subFile = file["content"][i];
                if(subFile["fileType"] !== "dir") continue;
                setInitialFolderState(subFile, index, i);          
            }
        }

        for (var i = 0; i < data.length; i++){
            let file = data[i];
            if(file["fileType"] !== "dir") continue;
            setInitialFolderState(file, 0, i);          
        }
        setFolderStates(initialFolderStates);
    }, [data]);
    
    return (
        <div style={{
            width: '80%',
            height: '100%',
            marginLeft: '35px'
        }}>{unWrapData()}</div>
    )
}

export default ProjectSelectorView;