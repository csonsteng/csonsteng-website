import {useState} from 'react';
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

  function selectFile(file) {
    window.history.replaceState(null, "Chloe Sonsteng", `${file['name']}`.replace(/ /g,"_"));
    
    setSelectedFile(file);
    setNoFileFound('');
  }

  function onNoFileFound(fileName){
    setNoFileFound(fileName);
  }

  function minimizeSelectorView(){
    setSelectorViewMinimized('35px');
  }

  function minimizeAboutView(){
    setAboutViewMinimized('calc(100% - 35px)');
  }

  function restoreSelectorView(){
    setSelectorViewMinimized(false);
  }

  function restoreAboutView(){
    setAboutViewMinimized(false);
  }
  return (
    <ResizeableBox horizontal={true} defaultSize='27%' element1MinSize={0.1} element2MinSize={0.5} minimized={selectorViewMinimized}
        element1={<ProjectSelectorView selectFile={selectFile} onMinimize={minimizeSelectorView} onRestore={restoreSelectorView} onNoFileFound={onNoFileFound}/>}
        element2={noFileFound === '' ?
            <ResizeableBox horizontal={false} defaultSize='75%' element1MinSize={0.3} element2MinSize={0.1} minimized={aboutViewMinimized}
            element1={<ProjectView  selectedFile={selectedFile}/>}
            element2={<AboutView selectedFile={selectedFile} onMinimize={minimizeAboutView} onRestore={restoreAboutView}/>}
          /> 
        : <FileNotFoundView fileName={noFileFound}/>
      }/>
  );
}

export default DesktopSite;
