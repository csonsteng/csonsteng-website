import UnityView from "../FileTypeViews/UnityView";
import PDFView from "../FileTypeViews/PDFView";
import ImageView from "../FileTypeViews/ImageView";
import MarkdownView from "../FileTypeViews/MarkdownView";
import ReactView from "../FileTypeViews/ReactView";
import FramedView from "../ViewUtilities/FramedView";
import { useEffect, useState } from "react";
const ProjectView = ({selectedFile}) => {

    const [fullScreen, setFullScreen] = useState(false); 

    function showContextForSelectedFile(file){
        if(file["fileType"] === "unity"){
            return <UnityView key={file["name"]} selectedFile={selectedFile} fullScreen={fullScreen}/>
        }
        if(file["fileType"] === "pdf"){
            return <PDFView key={file["name"]} selectedFile={selectedFile}/>
        }
        if(file["fileType"] === "jpg"){
            return <ImageView key={file["name"]} selectedFile={selectedFile}/>
        }
        if(file["fileType"] === "md"){
            return <MarkdownView key={file["name"]} selectedFile={selectedFile}/>
        }
        if(file["fileType"] === "react"){
            return <ReactView key={file["name"]} selectedFile={selectedFile}/>
        }
        return <span>{file["name"]}</span>
    }

    function onNewWindow(){
        var target = selectedFile['fileName'];
        if(selectedFile["fileType"] === "pdf"){
            target = `${process.env.REACT_APP_CDN_URL}pdf/${selectedFile["fileName"]}.pdf`;
        }
        if(selectedFile["fileType"] === "jpg"){
            target = `${process.env.REACT_APP_CDN_URL}img/${selectedFile["fileName"]}.${selectedFile["fileType"]}`;
        }
        
        window.open(target, '_blank');
    }

    function onMaximize(){
        setFullScreen(true);
    }

    useEffect(() => {
        setFullScreen(false);
    }, [fullScreen])

    return (
        <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--color-dark-grey-purple)'
        }}>
            {selectedFile && (<FramedView 
                title = {selectedFile['name']}
                onFullScreen={selectedFile['fileType'] === 'unity' ? onMaximize : null}
                onNewWindow={selectedFile['fileType'] !== 'md' && selectedFile['fileType'] !== 'unity' ? onNewWindow : null}
                content = {
                    <div style={{
                        width: '100%',
                        height: '100%',
                        overflow: 'auto',
                        backgroundColor: 'var(--color-dark-grey-purple)'
                    }}>
                        {showContextForSelectedFile(selectedFile)}
                    </div>
                } 
            /> )}
        </div>
    )
}

export default ProjectView;