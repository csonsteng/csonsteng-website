
const ReactView = ({selectedFile}) => {
    return (
        <iframe style={{
            width: '100%',
            height: '100%',
        }}
        
        title = {selectedFile["name"]}
        src = {selectedFile["fileName"]}
        />
        
    )
}

export default ReactView;