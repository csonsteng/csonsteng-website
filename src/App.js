import './App.css';
import WebHeader from './WebHeader';
import ResizeableBox from './ResizeableBox';

function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <WebHeader 
      style={{
      height: '75px',
      width: '100%'
    }}/>
      <ResizeableBox horizontal={true} element1MinSize={0.1} element2MinSize={0.4}
      style={{
        flex: '1',
        width: '100%'
      }}/>
    </div>
  );
}

export default App;
