import UnityView from "./FileTypeViews/UnityView";
import PDFView from "./FileTypeViews/PDFView";
import ImageView from "./FileTypeViews/ImageView";
import MarkdownView from "./FileTypeViews/MarkdownView";
import ReactView from "./FileTypeViews/ReactView";
import FramedView from "./FramedView";
const ProjectView = ({selectedFile}) => {

    function showContextForSelectedFile(file){
        if(file["fileType"] === "unity"){
            return <UnityView key={file["name"]} selectedFile={selectedFile}/>
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


    return (
        <>
            {selectedFile && (<FramedView 
                title = {selectedFile['name']}
                onMaximize={() => {
                    console.log('maximize');
                }}
                onHide={() => {
                    console.log('hide');
                }}
                onNewWindow={() => {
                    console.log('new window');
                }}
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
        </>
    )
}

export default ProjectView;