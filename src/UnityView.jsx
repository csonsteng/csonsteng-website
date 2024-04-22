import { Unity, useUnityContext } from "react-unity-webgl";
const UnityView = () => {
    const buildUrl = "Build";
    const { unityProvider } = useUnityContext({
        loaderUrl: buildUrl + "/Builds.loader.js",
        dataUrl: buildUrl + "/Builds.data.unityweb",
        frameworkUrl: buildUrl + "/Builds.framework.js.unityweb",
        codeUrl: buildUrl + "/Builds.wasm.unityweb",
        streamingAssetsUrl: "StreamingAssets",
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