
const ImageView = ({selectedFile}) => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
        }}><img style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
        }}
        alt={selectedFile["alt"]}
        src={`${process.env.REACT_APP_CDN_URL}img/${selectedFile["fileName"]}.${selectedFile["fileType"]}`}/></div>
    )
}

export default ImageView;