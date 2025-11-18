import './App.css'
import BackgroundWrapper from './components/layout/BackgroundWrapper'
import Logo from './features/logo/Logo'
import machapuchhre from './assets/themes/machhapuchhre.jpg'
import QuickTheme from './features/quick-theme/QuickTheme'
import Profile from './features/profile/Profile'
import Ambience from './features/ambience/Ambience'
import Timer from './features/timer/Timer'
import Rain from './features/ambience/ui/background/Rain'

function App() {
  
  return (
    <>
        <Rain />
       
        <BackgroundWrapper defaultImgUrl={machapuchhre}>
          <div className="relative h-full w-full">
            <Logo />
            <QuickTheme />
            <Profile />
            <Ambience />
            <Timer />
          </div>
        </BackgroundWrapper>
    </>
  );
};

export default App
