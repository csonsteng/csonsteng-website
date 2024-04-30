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
            height: '100%',
        }}
        components={{
            h1(props){
                const {_, ...data} = props;
                return <h1 style={{ 
                    height: '1em',
                    marginTop: '0.25em',
                    marginBottom: '0.75em',
                    fontSize: '1.5em'
                }}>{data["children"]}</h1>
            },
            h2(props){
                const {_, ...data} = props;
                return <h2 style={{ 
                    height: '1em',
                    marginTop: '0.25em',
                    marginBottom: '0.75em',
                    fontSize: '1.05em',
                    textDecoration: 'underline'
                }}>{data["children"]}</h2>
            },
            h3(props){
                const {_, ...data} = props;
                return <h3 style={{ 
                    height: '1em',
                    marginTop: '0.25em',
                    marginBottom: '0.75em',
                    fontSize: '0.9em',
                    textAlign: 'left',
                    marginLeft: '25px',
                    fontWeight: '1000'
                }}>{data["children"]}</h3>
            },
            h4(props){
                const {_, ...data} = props;
                return <h4 style={{ 
                    height: '1em',
                    marginTop: '0.25em',
                    marginBottom: '0.75em',
                    fontSize: '0.9em',
                    fontWeight: '1000'
                }}>{data["children"]}</h4>
            },
            h5(props){
                const {_, ...data} = props;
                return <p style={{
                    fontSize: '0.9em',
                }}>{data["children"]}</p>
            },
            h6(props){
                const {_, ...data} = props;
                return <h6 style={{
                    height: '1em',
                    margin: '1em',
                    fontSize: '0.5em'
                }}>{data["children"]}</h6>
            },
            p(props){
                const {_, ...data} = props;
                return <p style={{
                    fontSize: '0.9em',
                    textAlign: 'left',
                    marginLeft: '25px',
                    marginRight: '25px',
                }}>{data["children"]}</p>
            },
            ul(props){
                const {_, ...data} = props;
                return <ul style={{
                    fontSize: '0.9em',
                    textAlign: 'left',
                    marginLeft: '25px',
                    marginRight: '25px',
                }}>{data["children"]}</ul>
            },
            em(props){
                const {_, ...data} = props;
                return <em style={{
                    height: '1em',
                    fontSize: '0.75em'
                }}>({data["children"]})</em>
            },
            img(props){
                const {_, ...data} = props;
                return <img 
                    src={data['src']}
                    alt={data['alt']}
                    style={{
                        height: '2em',
                        marginTBottom: '2em'
                }}/>
            }
        }}>{currentMarkdown}</Markdown>
    )
}

export default MarkdownView;