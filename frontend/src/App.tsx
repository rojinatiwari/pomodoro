import { useState } from 'react'
import './App.css'
import BackgroundWrapper from './components/background/BackgroundWrapper'
import Logo from './features/logo/Logo'
import machapuchhre from './assets/themes/machhapuchhre.jpg'
import QuickTheme from './features/quick-theme/QuickTheme'
import Profile from './features/profile/Profile'
import Ambience from './features/ambience/Ambience'
import Timer from './features/timer/Timer'

function App() {
  const [backgroundImgUrl] = useState(machapuchhre);
  
  return (
    <>
      <BackgroundWrapper imgUrl={backgroundImgUrl}>
        <div className="relative h-full w-full">
          <Logo />
          <QuickTheme />
          <Profile />
          <Ambience />
          <Timer />
        </div>
      </BackgroundWrapper>
    </>
  )
}

export default App
