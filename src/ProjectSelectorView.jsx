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
        if(file["fileType"] === "folder"){
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
            <p onClick={() => {    
                if(file["fileType"] === "folder"){  
                    setFolderStates(previous => ({
                        ...previous,
                        [index]: !previous[index]
                    }));
                }else{
                    setSelectedFile(file);
                    selectFile(file);
                }
            }}>{[...Array(indent)].map((_) => ">")}{file["name"]}.{file["fileType"]}</p>
        )
    }

    useEffect(() => {
        if(selectedFile !== null) return;
        for (var i = 0; i < data.length; i++){
            let file = data[i];
            if(file["name"] === "README"){
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
                if(subFile["fileType"] !== "folder") continue;
                setInitialFolderState(subFile, index, i);          
            }
        }

        for (var i = 0; i < data.length; i++){
            let file = data[i];
            if(file["fileType"] !== "folder") continue;
            setInitialFolderState(file, 0, i);          
        }
        setFolderStates(initialFolderStates);
    }, [data]);
    
    return (
        <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'blue',
        }}><span>Projects</span><div>{unWrapData()}</div></div>
    )
}

export default ProjectSelectorView;