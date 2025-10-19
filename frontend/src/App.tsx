import { useState } from 'react'
import './App.css'
import BackgroundWrapper from './components/background/BackgroundWrapper'
import Logo from './features/logo/Logo'
import machapuchhre from './assets/themes/machhapuchhre.jpg'
import QuickTheme from './features/quick-theme/QuickTheme'
import Profile from './features/profile/Profile'
import Ambience from './features/ambience/Ambience'
import Timer from './features/timer/Timer'
import Rain from './components/background/Rain'

function App() {
  const [backgroundImgUrl] = useState(machapuchhre);
  
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#0b0c10", // nachale yo bg aauxa
        }}
      >
     
        <Rain />

       
        <BackgroundWrapper imgUrl={backgroundImgUrl}>
          <div className="relative h-full w-full">
            <Logo />
            <QuickTheme />
            <Profile />
            <Ambience />
            <Timer />
          </div>
        </BackgroundWrapper>
      </div>
    </>
  );
};

export default App
