import { useState } from 'react';
const FramedView = ({ content , title, onFullScreen, onMinimize, onRestore, onNewWindow, verticalMinimize}) => {
    const [minimized, setMinimized] = useState(false);

    function Minimize(){
        setMinimized(true);
        onMinimize();
    }
    function Restore(){
        setMinimized(false);
        onRestore();
    }

    return (
        <div style = {{
            height: '100%',
            width: '100%',
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
                    {minimized && verticalMinimize ? '' : title}
                </span>
                <span style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'row-reverse',
                }}>
                    <span style={{
                        float: 'right',
                        height: '100%',
                        marginTop: '-28px',        
                        userSelect: 'none'

                    }}>
                        {onMinimize && onRestore && (
                            <img 
                            className='frameButton'
                            src={minimized ? '/icons/plus.png' : '/icons/minimize.png'}
                            alt={minimized ? 'Restore Icon' : 'Hide icon'}
                            onClick={minimized ? Restore : Minimize}
                            style={{
                                height: 'calc(100% - 5px)',
                                marginRight: '5px'
                            }}
                            />
                        )}
                        {onFullScreen && (
                            <img 
                            className='frameButton'
                            src='/icons/fullScreen.png' 
                            alt='Full Screen Icon' 
                            onClick={onFullScreen}
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
                    }}
                />
                {minimized && verticalMinimize && (
                    <span style={{
                        display: 'inline-block',
                        float: 'right',
                        width: '50%',
                        marginTop: '10px',
                        marginLeft: '25%',
                        marginRight: '25%',
                        userSelect: 'none',
                        textOrientation: 'mixed',
                        writingMode: 'vertical-lr'
                        
                    }}>
                        { title }
                    </span>
                )}
                { !minimized && (
                    <div style = {{
                        height: 'calc(100% - 31px)',
                        width: '100%',
                        marginTop: '0px',
                        paddingTop: '0px',
                    }}>
                        {content}
                    </div>
                )}
        </div>
    )

}

export default FramedView;