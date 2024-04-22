import './App.css';
import WebHeader from './WebHeader';
import ResizeableBox from './ResizeableBox';
import ProjectSelectorView from './ProjectSelectorView';
import ProjectView from './ProjectView';
import AboutView from './AboutView';

function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <WebHeader />
      <ResizeableBox horizontal={true} element1MinSize={0.1} element2MinSize={0.5}
      element1={<ProjectSelectorView />}
      element2={
        <ResizeableBox horizontal={false} element1MinSize={0.3} element2MinSize={0.1}
        element1={<ProjectView />}
        element2={<AboutView />}
        />
      }/>
    </div>
  );
}

export default App;
