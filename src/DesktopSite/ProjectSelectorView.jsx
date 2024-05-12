import { useState, useEffect } from "react";
import dataFile from "../data.json";
import FramedView from "../ViewUtilities/FramedView";

const ProjectSelectorView = ({selectFile, onMinimize, onRestore, onNoFileFound}) => {

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

// Loads correct initial file based on URL, and sets minimum open folders to reveal it in proj sel view
    useEffect(() => {
        let initialFolderStates = {};

        function TraverseFolder(data, target, parentIndex){
            var foundFile = false;
            for (var i = 0; i < data.length; i++){
                let file = data[i];
                if(file["name"].replace(/ /g,"_") === target){
                    setSelectedFile(file);
                    selectFile(file);
                    foundFile = true;
                    continue;
                }
                
                if(file['fileType'] === 'dir'){
                    let index = parentIndex === 0 ? `${i}` : `${parentIndex}.${i}`;
                    if(TraverseFolder(file['content'], target, i)){
                        initialFolderStates[index] = true;
                        foundFile = true;
                        continue;
                    }
                    initialFolderStates[index] = false;
                }
            }
                    
            return foundFile;
        }

        if(selectedFile !== null) return;

        var target = window.location.pathname.split('/')[1];
        target = target === '' ? "Readme" : target;

        if(!TraverseFolder(data, target, 0)){
            onNoFileFound(target);
        }
        
        setFolderStates(initialFolderStates);
    }, [data, selectedFile, selectFile, onNoFileFound]);
    
    return (
        <div style={{
            width: '100%',
            height: '100%',
            overflow: 'auto'
        }}>
            
            <FramedView 
                title = 'Projects'
                onMinimize={onMinimize}
                onRestore={onRestore}
                verticalMinimize={true}
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