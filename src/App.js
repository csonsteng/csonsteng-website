import {useState} from 'react';
import './App.css';
import WebHeader from './WebHeader';
import ResizeableBox from './ResizeableBox';
import ProjectSelectorView from './ProjectSelectorView';
import ProjectView from './ProjectView';
import AboutView from './AboutView';

function App() {

  const [selectedFile, setSelectedFile] = useState(null);

  function selectFile(file) {
    window.history.replaceState(null, "Chloe Sonsteng", `${file['fileName']}`);
    
    setSelectedFile(file);
  }

  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <WebHeader />
      <ResizeableBox horizontal={true} defaultSize='30%' element1MinSize={0.1} element2MinSize={0.5}
      element1={<ProjectSelectorView selectFile={selectFile}/>}
      element2={
        <ResizeableBox horizontal={false} defaultSize='75%' element1MinSize={0.3} element2MinSize={0.1}
        element1={<ProjectView  selectedFile={selectedFile}/>}
        element2={<AboutView selectedFile={selectedFile}/>}
        />
      }/>
    </div>
  );
}

export default App;
