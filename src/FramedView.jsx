const FramedView = ({ content , title, onMaximize, onHide, onNewWindow}) => {


    return (
        <div style = {{
            height: '100%',
            width: '100%'
        }}>
            <div style = {{
                height: '30px',
                width: '100%',
                lineHeight: '31px',
                marginBottom: '0px',
                paddingBottom: '0px',
                fontSize: '1.1em',
                
            }}>
                <span style={{
                    display: 'inline-block',
                    width: '50%',
                    marginLeft: '25%',
                    marginRight: '25%',
                    userSelect: 'none'
                    
                }}>
                    {title}
                </span>
                <span style={{
                    height: '100%',
                    display: 'inline-block',
                    display: 'flex',
                    flexDirection: 'row-reverse',
                }}>
                    <span style={{
                        float: 'right',
                        height: '100%',
                        marginTop: '-28px'

                    }}>
                        {onHide && (
                            <img 
                            className='frameButton'
                            src='/icons/minimize.png' 
                            alt='Hide Icon' 
                            onClick={onHide}
                            style={{
                                height: 'calc(100% - 5px)',
                                marginRight: '5px'
                            }}
                            />
                        )}
                        {onMaximize && (
                            <img 
                            className='frameButton'
                            src='/icons/maximize.png' 
                            alt='Full Screen Icon' 
                            onClick={onMaximize}
                            style={{
                                height: 'calc(100% - 5px)',
                                marginRight: '5px'
                            }}
                            />
                        )}{onNewWindow && (
                            <img 
                            className='frameButton'
                            src='/icons/newtab.png' 
                            alt='temp' 
                            onClick={onNewWindow}
                            style={{
                                height: 'calc(100% - 5px)',
                                marginRight: '5px'
                            }}
                            />
                        )}
                    </span>
                </span>
            </div>
            
            <div style={{
                height: '1px',
                width: '80%',
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundColor: 'var(--color-grey-purple'
                }}/>
            <div style = {{
                height: 'calc(100% - 31px)',
                width: '100%',
                marginTop: '0px',
                paddingTop: '0px',
            }}>
                {content}
            </div>
        </div>
    )

}

export default FramedView;