import { useState, useEffect } from "react";
import dataFile from "./data.json";
import FramedView from "./FramedView";

const ProjectSelectorView = ({selectFile, onMinimize}) => {

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
            <span 
            style={{
                textAlign: 'left',
                userSelect: 'none',
                cursor: 'pointer'
            }}
            key={file['fileName']}
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
            }}><pre style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <span>{[...Array(indent+2)].map((_) => '  ')}</span>
                <img src={`fileicons/${file["fileType"]}.png`} alt='temp' style = {{
                  height: '2em',
                  marginRight: '0.5em',
                }}/>
                <span style={{
                    marginTop: '0.25em'
                }}>{file["name"]}</span>
                </pre></span>
        )
    }

    useEffect(() => {

        function TraverseFolder(data, target){
            for (var i = 0; i < data.length; i++){
                let file = data[i];
                if(file["name"] === target){
                    setSelectedFile(file);
                    selectFile(file);
                    return true;
                }
                
                if(file['fileType'] === 'dir'){
                    if(TraverseFolder(file['content'], target)){
                        return true;
                    }
                }
            }
                    
            return false;
        }



        if(selectedFile !== null) return;
        var target = window.location.pathname.split('/')[1];
        target = target === '' ? "Readme" : target;
        if(!TraverseFolder(data, target)){
            // todo: throw a 404 here
            console.log(`unable to find ${target}`);
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
            width: '100%',
            height: '100%',
            overflow: 'auto'
        }}>
            
            <FramedView 
                title = 'Projects'
                onHide={() => {
                    onMinimize()
                }}
                content={      
                <div style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'auto'
                }}>{unWrapData()}
                </div>
                }
                />
                </div>
    )
}

export default ProjectSelectorView;