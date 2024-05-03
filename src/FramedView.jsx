const FramedView = ({ content , title, onMaximize, onHide, onNewWindow}) => {


    return (
        <div style = {{
            height: '100%',
            width: '100%'
        }}>
            <div style = {{
                height: '20px',
                width: '100%',
                backgroundColor: 'var(--color-dark-grey-blue)',
                color: 'var(--color-black)',
                lineHeight: '20px',
                marginBottom: '0px',
                paddingBottom: '0px',
            }}>
                <span style={{
                    display: 'inline-block',
                    width: '50%',
                    marginLeft: '25%',
                    marginRight: '25%',
                    
                }}>
                    {title}
                </span>
                <span style={{
                    height: '100%',
                    display: 'inline-block',
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    marginTop: '-20px'
                }}>
                    <span style={{
                        marginRight: '5px',
                        float: 'right',
                        height: '100%',

                    }}>
                        {onHide && (
                            <img 
                            src='/icons/minimize.png' 
                            alt='Hide Icon' 
                            onClick={onHide}
                            style={{
                                height: '100%',
                                marginRight: '5px'
                            }}
                            />
                        )}
                        {onMaximize && (
                            <img 
                            src='/icons/maximize.png' 
                            alt='Full Screen Icon' 
                            onClick={onMaximize}
                            style={{
                                height: '100%',
                                marginRight: '5px'
                            }}
                            />
                        )}{onNewWindow && (
                            <img 
                            src='/icons/newtab.png' 
                            alt='temp' 
                            onClick={onNewWindow}
                            style={{
                                height: '100%',
                                marginRight: '5px'
                            }}
                            />
                        )}
                    </span>
                </span>
            </div>
            <div style = {{
                height: 'calc(100% - 20px)',
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