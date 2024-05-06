import React from "react";
import FramedView from "./FramedView";
import Markdown from 'react-markdown';
const AboutView = ({selectedFile, onMinimize, onRestore}) => {
    return (

        <div style={{
            width: '100%',
            height: '100%',
            overflow: 'auto',        
            userSelect: 'none'
        }}>
            {selectedFile && (<FramedView 
                title = {selectedFile['name']}
                onMinimize={onMinimize}
                onRestore={onRestore}
                content = {selectedFile ? 
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
                                fontSize: '0.95em',
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
                                fontSize: '0.85em',
                                textAlign: 'left',
                                marginLeft: '25px',
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
                                    console.log(`${splitParam[0]}:${splitParam[1]}`);
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
                        }
                    }}>
                        {`${selectedFile["content"]}`}
                        </Markdown>
                     : null}
                />)}
            </div>
    )
}

export default AboutView;