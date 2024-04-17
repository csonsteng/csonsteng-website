import {useState, useEffect, useRef} from 'react';

const ResizeableBox = ({horizontal, element1MinSize, element2MinSize}) => {

    const refContainer = useRef();
    const [isMouseOver, setIsMouseOver] = useState(false);
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

    function onMouseDown() {
        if(!isMouseOver) return;
        
        setIsDragging(true);    
        console.log(`down`);  
    }


    function onMouseEnter(){
        setIsMouseOver(true);
        console.log(`enter`);

    }
    function onMouseExit(){
        setIsMouseOver(false);
        console.log(`exit`);
        
    }

    useEffect(() => {
        if (refContainer.current) {
            const boundingRect = refContainer.current.getBoundingClientRect();
            setOffset({
                left: boundingRect.top,
                top: boundingRect.left

            });
            setSize({
                width: boundingRect.width,
                height: boundingRect.height

            });
            console.log(`${boundingRect.top} ${boundingRect.width}`)
        }   
    }, []);

    useEffect(() => {  

        function onMouseMove(event) {
            if(!isDragging) return;

            let relative = horizontal ? 
                            (event.clientX - offset['top']) / size['width'] :
                            (event.clientY - offset['left']) / size['height'];
            relative = Math.max(relative, element1MinSize);
            relative = Math.min(relative, 1 - element2MinSize);
            const handle = `${Math.round(relative * 100)}%`;
            setHandlePosition(handle);
            console.log(handle)

        }
        function onMouseUp(event){
            setIsDragging(false);
            console.log(`up`);
        }


        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp)
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp)
        };
    }, [isDragging, isMouseOver, offset, size]);

    return (
        <div className='resize'
        onPointerEnter={onMouseEnter}
        onPointerLeave={onMouseExit}
        onMouseDown={onMouseDown}
        ref={refContainer}
        style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignContents: 'stretch',
            flexDirection: horizontal ? 'row' : 'column'}}>

            { horizontal ? (
            <>
                <div style={{backgroundColor: '#555555', width: handlePosition}}>
                </div>
                <div 
                    onPointerEnter={onMouseEnter}
                    onPointerLeave={onMouseExit}
                    onMouseDown={onMouseDown}
                    style={{backgroundColor: '#000000', width: '15px'}} />
                <div style={{backgroundColor: '#FFFFFF', flex: '1'}}>
                    {handlePosition}
                </div>
            </>
        ) : 
        <>
            <div style={{backgroundColor: '#555555', height: handlePosition}}>
            </div>
            <div 
                onPointerEnter={onMouseEnter}
                onPointerLeave={onMouseExit}
                onMouseDown={onMouseDown}
                style={{backgroundColor: '#000000', height: '15px'}} />
            <div style={{backgroundColor: '#FFFFFF', flex: '1'}}>
                {handlePosition}
            </div>
        </>
        }
        </div>
    )
}

export default ResizeableBox;