import { useState, useEffect } from "react";
import Markdown from 'react-markdown';

const MarkdownView = ({selectedFile}) => {

    const [currentMarkdown, setCurrentMarkdown] = useState('');

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_CDN_URL}md/${selectedFile["fileName"]}.md`)
        .then(response => response.text())
        .then(response => {
            setCurrentMarkdown(response);
        });
    }, [selectedFile]);
    return (
        <Markdown style={{
            width: '100%',
            height: '100%'
        }}>{currentMarkdown}</Markdown>
    )
}

export default MarkdownView;