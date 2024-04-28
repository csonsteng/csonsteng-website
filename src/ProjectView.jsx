import UnityView from "./UnityView";
import PDFView from "./PDFView";
import ImageView from "./ImageView";
import MarkdownView from "./MarkdownView";
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
    )
}

export default ProjectView;