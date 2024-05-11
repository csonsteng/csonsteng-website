import './App.css';
import { useState } from 'react'
import { MobileView, BrowserView } from 'react-device-detect';
import WebHeader from './WebHeader';
import DesktopSite from './DesktopSite/DesktopSite';
import MobileSite from './MobileSite/MobileSite';

function App() {

  const [forceDesktop, setForceDesktop] = useState(false);

  function onForceDesktop(){
    setForceDesktop(true);
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
        {forceDesktop ? (
          <DesktopSite />
        ) : (        
          <>
            <BrowserView style={{ height: '100%', width: '100%'}}>
              <DesktopSite />
            </BrowserView>
            <MobileView style={{ height: 'calc(100% - 33px)', width: '100%'}}>
              <MobileSite onForceDesktop={onForceDesktop} />
            </MobileView>
        </>
        )
      }

      </div>
    </div>
  );
}

export default App;
