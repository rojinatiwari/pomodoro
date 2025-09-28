import { useState } from 'react'
import './App.css'
import BackgroundWrapper from './components/background/BackgroundWrapper'
import Logo from './features/logo/Logo'
import machapuchhre from './assets/themes/machhapuchhre.jpg'

function App() {
  const [backgroundImgUrl, setBackgroundImgUrl] = useState(machapuchhre);

  return (
    <>
      <BackgroundWrapper imgUrl={backgroundImgUrl}>
        <div className="relative h-full w-full">
          <Logo />
        </div>
      </BackgroundWrapper>
    </>
  )
}

export default App
