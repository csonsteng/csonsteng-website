import { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import LoadingView from "../ViewUtilities/LoadingView";
const UnityView = ({selectedFile, fullScreen}) => {

    const baseURL = `${process.env.REACT_APP_CDN_URL}unity/${selectedFile["fileName"]}/`;
    const buildURL = `${baseURL}Build/${selectedFile["fileName"]}`;
    const { unityProvider, isLoaded, loadingProgression, requestFullscreen } = useUnityContext({
        loaderUrl: buildURL + ".loader.js",
        dataUrl: buildURL + ".data.unityweb",
        frameworkUrl: buildURL + ".framework.js.unityweb",
        codeUrl: buildURL + ".wasm.unityweb",
        streamingAssetsUrl: `${baseURL}StreamingAssets`,
        
        companyName: "Chloe Sonsteng",
        productName: "Website",
        productVersion: "1.0",
      });

    const loadingPercentage = Math.round(loadingProgression * 100);

    useEffect(() => {
        if(requestFullscreen){
            requestFullscreen(fullScreen);
        }
    }, [fullScreen, requestFullscreen])

    return (
        
    <div id="unity-container" className="unity-desktop" style={{
        width: '100%',
        height: '100%'
    }}>
        {isLoaded === false && (
        <div className="loading-overlay">
            <LoadingView />
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
        <Unity unityProvider={unityProvider} style={{
        width: '100%',
        height: '100%'
    }}/>
    </div>
    )
}

export default UnityView