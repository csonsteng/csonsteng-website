
const PDFView = ({selectedFile}) => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
        }}><iframe style={{
            width: '100%',
            height: '100%',
        }}
        src={`${process.env.REACT_APP_CDN_URL}pdf/${selectedFile["fileName"]}.pdf`}/></div>
    )
}

export default PDFView;