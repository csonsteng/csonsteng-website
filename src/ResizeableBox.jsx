import {useState, useEffect, useRef} from 'react';

const ResizeableBox = ({horizontal, defaultSize, element1, element2, element1MinSize, element2MinSize}) => {

    const refContainer = useRef();
    const [isDragging, setIsDragging] = useState(false);
    const [handlePosition, setHandlePosition] = useState('50%');
    const [size, setSize] = useState({
        width: 0,
        height: 0
    });
    const [offset, setOffset] = useState({
        left: 0,
        top: 0
    });

    function onMouseOrTouchDown() {
        setIsDragging(true);  
    }

    useEffect(() => {
        if (refContainer.current) {
            const boundingRect = refContainer.current.getBoundingClientRect();
            setOffset({
                left: boundingRect.left,
                top: boundingRect.top

            });
            setSize({
                width: boundingRect.width,
                height: boundingRect.height

            });
            setHandlePosition(defaultSize);
        }   
    }, [defaultSize]);

    useEffect(() => {  

        function CalculateHandlePosition(mouse){  
            if(!isDragging) return;

            let relative = horizontal ? 
                    (mouse.clientX - offset['left']) / size['width'] :
                    (mouse.clientY - offset['top']) / size['height'];
            relative = Math.max(relative, element1MinSize);
            relative = Math.min(relative, 1 - element2MinSize);
            const handle = `${Math.round(relative * 100)}%`;
            setHandlePosition(handle);
        }

        function onMouseMove(event) {
            CalculateHandlePosition(event);
        }

        function onTouchMove(event) {
            CalculateHandlePosition(event.touches[0]);
        }


        function onMouseOrTouchUp(){
            setIsDragging(false);
        }

        // todo: only subscribe to events depending on platform
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('mouseup', onMouseOrTouchUp);
        window.addEventListener('touchend', onMouseOrTouchUp);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('mouseup', onMouseOrTouchUp);
            window.removeEventListener('touchend', onMouseOrTouchUp);
        };
    }, [isDragging, offset, size, element1MinSize, element2MinSize, horizontal]);

    return (
        <div className='resize'
        ref={refContainer}
        style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignContents: 'stretch',
            flexDirection: horizontal ? 'row' : 'column'}}>

            { horizontal ? (
            <>
                <div style={{width: handlePosition}}>
                    {element1}
                </div>
                <div className='resizeHandle' direction='col'
                    onMouseDown={onMouseOrTouchDown}
                    onTouchStart={onMouseOrTouchDown}
                    style={{ 
                        width: '11px' ,
                        marginRight: '-5px',
                        marginLeft: '-5px'
                        
                        }} >
                    <div style={{
                        backgroundColor: 'var(--color-dark-grey-purple)', 
                        width: '1px',
                        height: '100%',
                        marginRight: '5px',
                        marginLeft: '5px'
                        }} />
                </ div>
                <div style={{flex: '1'}}>
                    {element2}
                </div>
            </>
        ) : 
        <>
            <div style={{height: handlePosition}}>
                {element1}
            </div>
            <div className='resizeHandle' direction='row'
                onMouseDown={onMouseOrTouchDown}
                onTouchStart={onMouseOrTouchDown}
                style={{
                    height: '11px',
                    marginTop: '-5px',
                    marginBottom: '-5px'
                }} >
                <div style={{
                    backgroundColor: 'var(--color-dark-grey-purple)', 
                    height: '1px',
                    width: '100%',
                    marginTop: '5px',
                    marginBottom: '5px'
                    }} />
                </div>
            <div style={{ flex: '1'}}>     
                {element2}
            </div>
        </>
        }
        </div>
    )
}

export default ResizeableBox;