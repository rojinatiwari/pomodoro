import { useAppSelector } from "../../store/hooks";

interface Props {
  children: React.ReactNode;
  defaultImgUrl?: string;
}

function BackgroundWrapper({ children, defaultImgUrl='' }: Props) {
  const currentBackground = useAppSelector(
    (state) => state.quickTheme.currentBackground
  );
  const backgroundUrl = currentBackground || defaultImgUrl;
  
  return (
    <div
      className="h-screen w-screen relative bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {children}
    </div>
  );
}

export default BackgroundWrapper;
