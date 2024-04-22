import {useRef, useEffect} from "react";
const UnityView = () => {
    
    const canvas = useRef(null);

    useEffect(() => 
    {
        const buildUrl = "Build";
        const loaderUrl = buildUrl + "/Builds.loader.js";
        const config = {
          dataUrl: buildUrl + "/Builds.data.unityweb",
          frameworkUrl: buildUrl + "/Builds.framework.js.unityweb",
          codeUrl: buildUrl + "/Builds.wasm.unityweb",
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
        
    <div id="unity-container" className="unity-desktop" style={{
        width: '100%',
        height: '100%'
    }}>
        <canvas id="unity-canvas" ref={canvas} style={{
            width: '100%',
            height: '100%'
        }}></canvas>
    </div>
    )
}

export default UnityView