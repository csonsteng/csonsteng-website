import {useState} from 'react';
import './App.css';
import WebHeader from './WebHeader';
import ResizeableBox from './ResizeableBox';
import ProjectSelectorView from './ProjectSelectorView';
import ProjectView from './ProjectView';
import AboutView from './AboutView';

function App() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectorViewMinimized, setSelectorViewMinimized] = useState(null);
  const [aboutViewMinimized, setAboutViewMinimized] = useState(null);

  function selectFile(file) {
    window.history.replaceState(null, "Chloe Sonsteng", `${file['name']}`.replace(/ /g,"_"));
    
    setSelectedFile(file);
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
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
       <div style={{ height: '33px'}}>
      <WebHeader />
      </div>
      <div style={{ height: 'calc(100% - 33px)'}}>
        <ResizeableBox horizontal={true} defaultSize='27%' element1MinSize={0.1} element2MinSize={0.5} minimized={selectorViewMinimized}
        element1={<ProjectSelectorView selectFile={selectFile} onMinimize={minimizeSelectorView} onRestore={restoreSelectorView}/>}
        element2={
          <ResizeableBox horizontal={false} defaultSize='75%' element1MinSize={0.3} element2MinSize={0.1} minimized={aboutViewMinimized}
          element1={<ProjectView  selectedFile={selectedFile}/>}
          element2={<AboutView selectedFile={selectedFile} onMinimize={minimizeAboutView} onRestore={restoreAboutView}/>}
          />
        }/>
      </div>
    </div>
  );
}

export default App;
