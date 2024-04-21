import {useRef, useEffect} from "react";
const UnityView = () => {
    
    const canvas = useRef(null);

    useEffect(() => 
    {
        const buildUrl = "Build";
        const loaderUrl = buildUrl + "/Brotli.loader.js";
        const config = {
          dataUrl: buildUrl + "/Brotli.data.br",
          frameworkUrl: buildUrl + "/Brotli.framework.js.br",
          codeUrl: buildUrl + "/Brotli.wasm.br",
          streamingAssetsUrl: "StreamingAssets",
          companyName: "DefaultCompany",
          productName: "My project",
          productVersion: "0.1",
          showBanner: unityShowBanner,
        };
        var script = document.createElement("script");
        script.src = loaderUrl;
        script.onload = () => {
            console.log('hi');
            
            window.createUnityInstance(canvas.current, config).catch((message) => {
            alert(message);
          });
        };
        document.body.appendChild(script);
    },[canvas]);

    
    function unityShowBanner(msg, type) {
    }
    
    return (
        
    <div id="unity-container" className="unity-desktop">
        <canvas id="unity-canvas" ref={canvas} style={{
            width: '960px',
            height: '600px'
        }}></canvas>
    </div>
    )
}

export default UnityView