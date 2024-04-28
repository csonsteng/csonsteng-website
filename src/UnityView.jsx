import { Unity, useUnityContext } from "react-unity-webgl";
const UnityView = ({selectedFile}) => {
    const baseURL = `${process.env.REACT_APP_CDN_URL}unity/${selectedFile["fileName"]}/Build/${selectedFile["fileName"]}`;
    const { unityProvider } = useUnityContext({
        loaderUrl: baseURL + ".loader.js",
        dataUrl: baseURL + ".data.unityweb",
        frameworkUrl: baseURL + ".framework.js.unityweb",
        codeUrl: baseURL + ".wasm.unityweb",
        streamingAssetsUrl: "StreamingAssets",
        
        companyName: "Chloe Sonsteng",
        productName: "Website",
        productVersion: "1.0",
      });
    
    return (
        
    <div id="unity-container" className="unity-desktop" style={{
        width: '100%',
        height: '100%'
    }}>
        <Unity unityProvider={unityProvider} style={{
        width: '100%',
        height: '100%'
    }}/>
    </div>
    )
}

export default UnityView