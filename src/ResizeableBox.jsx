import {useState, useEffect} from 'react';

const ResizeableBox = ({resizeCallback}) => {

    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    function onMouseDown() {
        if(!isMouseOver) return;
        
        setIsDragging(true);    
        console.log(`down`);  
    }

    function onMouseUp(event){
        setIsDragging(false);
        console.log(`up`);
    }

    function onMouseEnter(){
        setIsMouseOver(true);
        console.log(`enter`);

    }
    function onMouseExit(){
        setIsMouseOver(false);
        console.log(`exit`);
        
    }
    function onMouseMove(event){
        if(!isDragging) return;
        console.log(`dragging ${isDragging} ${isMouseOver}`);
    }
    useEffect(() => {  
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp)
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp)
        };
    }, [isDragging, isMouseOver]);

    return (
        <div className='resize'
        onPointerEnter={onMouseEnter}
        onPointerLeave={onMouseExit}
        onMouseDown={onMouseDown}
        onmou>
            poopy
        </div>
    )
}

export default ResizeableBox;