import { useState, useEffect } from "react";
import Markdown from 'react-markdown';
import LoadingView from "../ViewUtilities/LoadingView";

const MarkdownView = ({selectedFile}) => {

    const [currentMarkdown, setCurrentMarkdown] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_CDN_URL}md/${selectedFile["fileName"]}.md`)
        .then(response => response.text())
        .then(response => {
            setCurrentMarkdown(response);
            setIsLoaded(true);
        });
    }, [selectedFile]);
    return (
        
        <div style={{
            width: '100%',
            height: '100%',
        }}>
        <Markdown style={{
            width: '100%',
            height: '100%',
            display: isLoaded ? 'inline' : 'none'
        }}
        components={{
            h1(props){
                const {_, ...data} = props;
                return <h1 style={{ 
                    height: '1em',
                    marginTop: '0.25em',
                    marginBottom: '0.75em',
                    fontSize: '1.5em',        
                    userSelect: 'none'
                }}>{data["children"]}</h1>
            },
            h2(props){
                const {_, ...data} = props;
                return <h2 style={{ 
                    height: '1em',
                    marginTop: '0.25em',
                    marginBottom: '0.75em',
                    fontSize: '1.05em',
                    textDecoration: 'underline',        
                    userSelect: 'none'
                }}>{data["children"]}</h2>
            },
            h3(props){
                const {_, ...data} = props;
                return <h3 style={{ 
                    height: '1em',
                    marginTop: '0.25em',
                    marginBottom: '0.75em',
                    fontSize: '0.95em',
                    textAlign: 'left',
                    marginLeft: '25px',
                    fontWeight: '1000',        
                    userSelect: 'none'
                }}>{data["children"]}</h3>
            },
            h4(props){
                const {_, ...data} = props;
                return <h4 style={{ 
                    height: '1em',
                    marginTop: '0.25em',
                    marginBottom: '0.75em',
                    fontSize: '0.85em',
                    textAlign: 'left',
                    marginLeft: '25px',
                    fontWeight: '1000',        
                    userSelect: 'none'
                }}>{data["children"]}</h4>
            },
            h5(props){
                const {_, ...data} = props;
                return <p style={{
                    fontSize: '0.9em',        
                    userSelect: 'none'
                }}>{data["children"]}</p>
            },
            h6(props){
                const {_, ...data} = props;
                return <h6 style={{
                    height: '1em',
                    margin: '1em',
                    fontSize: '0.5em',        
                    userSelect: 'none'
                }}>{data["children"]}</h6>
            },
            p(props){
                const {_, ...data} = props;
                return <p style={{
                    fontSize: '0.9em',
                    textAlign: 'left',
                    marginLeft: '25px',
                    marginRight: '25px',        
                    userSelect: 'none'
                }}>{data["children"]}</p>
            },
            ul(props){
                const {_, ...data} = props;
                return <ul style={{
                    fontSize: '0.9em',
                    textAlign: 'left',
                    marginLeft: '25px',
                    marginRight: '25px',        
                    userSelect: 'none'
                }}>{data["children"]}</ul>
            },
            img(props){
                const {_, ...data} = props;
                const altData = data['alt'];

                if(altData.includes("Emote")){
                    return <img 
                    src={data['src']}
                    alt={altData}
                    style={{
                        height: '2em'        
                    }}/>
                }
                const altSplit = altData.split('?');
                let params = {};
                if(altSplit[1]){
                    const paramList = altSplit[1].split(',');
                    paramList.forEach((fullParam) => {
                        let splitParam = fullParam.split('=');
                        params[splitParam[0]] = splitParam[1];
                    });
                }
                return <img 
                    src={data['src']}
                    alt={altSplit[0]}
                    style={{
                        height: 'auto',
                        maxHeight: params.hasOwnProperty('size') ? `${params['size']}px`  : '300px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        display: 'block',
                        borderRadius: params.hasOwnProperty('radius') ? `${params['radius']}em`  : '5em',
                }}/>
            },
            a(props){
                const {_, ...data} = props;
                const href = data['href']
                return <a href={href} target={href[0] === '/' ? "_self" : "_blank"}>{data["children"]}</a>
            }
        }}>
            {currentMarkdown}
            </Markdown>
            
            {!isLoaded && (
                <LoadingView />
            )}
        </div>
    )
}

export default MarkdownView;