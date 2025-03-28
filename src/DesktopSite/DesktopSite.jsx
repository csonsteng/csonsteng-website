import {useEffect, useState} from 'react';
import ResizeableBox from '../ViewUtilities/ResizeableBox';
import ProjectSelectorView from './ProjectSelectorView';
import ProjectView from './ProjectView';
import AboutView from './AboutView';
import FileNotFoundView from './FileNotFoundView';

const DesktopSite = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [noFileFound, setNoFileFound] = useState('');
  const [selectorViewMinimized, setSelectorViewMinimized] = useState(null);
  const [aboutViewMinimized, setAboutViewMinimized] = useState(null);

  useEffect(() => {
    if (window.location.href.includes("about")){  
      window.location.replace("https://www.csonsteng.com/Readme");
    }
  },[])

  function selectFile(file) {
    window.history.replaceState(null, "Chloe Sonsteng", `${file['name']}`.replace(/ /g,"_"));

    if(selectedFile && selectedFile['fileType'] === 'unity'){
      // react-unity-webgl doesn't always clean up properly when navigating away.
      // https://github.com/jeffreylanters/react-unity-webgl/issues/250
      //https://github.com/jeffreylanters/react-unity-webgl/issues/22
      // failsafe browser refresh
      window.location.reload();  
      return;    
    }
    
    setSelectedFile(file);
    setNoFileFound('');
  }

  return (
    <ResizeableBox 
      horizontal={true} 
      defaultSize='27%' 
      element1MinSize={0.1} 
      element2MinSize={0.5} 
      minimized={selectorViewMinimized}
      element1={
        <ProjectSelectorView 
          selectFile={selectFile} 
          onMinimize={() => setSelectorViewMinimized('35px')} 
          onRestore={() => setSelectorViewMinimized(false)}
          onNoFileFound={setNoFileFound}/>}
      element2={noFileFound === '' ?
          selectedFile != null && selectedFile["content"] ?
          <ResizeableBox 
            horizontal={false} 
            defaultSize='75%' 
            element1MinSize={0.3} 
            element2MinSize={0.1} 
            minimized={aboutViewMinimized}
            element1={
              <ProjectView  
                selectedFile={selectedFile}
              />}
            element2={
              <AboutView 
                selectedFile={selectedFile} 
                onMinimize={() => setAboutViewMinimized('calc(100% - 35px)')} 
                onRestore={() => setAboutViewMinimized(false)}
              />}
          /> : 
          <ProjectView  
                selectedFile={selectedFile}
              />
          : <FileNotFoundView fileName={noFileFound}/>
      }/>
  );
}

export default DesktopSite;
