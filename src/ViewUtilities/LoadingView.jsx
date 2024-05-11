
const LoadingView = () => {

    return (
        <div style={{
            width: '100%',
            height: '100%',
        }}>
            <img
            style={{
                marginTop: '10px',
                maxHeight: '50px'
            }}
            src='/icons/loading.png'
            alt='loading icon'
            className="genericLoader"
            />
        </div>
    )
}

export default LoadingView;