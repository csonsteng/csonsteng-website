const FileNotFoundView = ({ fileName }) => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            overflow: 'auto'
        }}>
            <h3>Oh no! I can't find a file named "{fileName}"!</h3>
            <img 
                src='images/tucker.jpg'
                alt='My Dog Tucker'
                style={{
                    height: 'auto',
                    maxHeight:'300px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    borderRadius: '5em',
            }}/>
            <p>Enjoy this picture of my dog instead</p>
        </div>
    )
}

export default FileNotFoundView