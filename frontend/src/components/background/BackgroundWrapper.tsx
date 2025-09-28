interface Props {
  children: React.ReactNode;
  imgUrl: string;
}

function BackgroundWrapper({ children, imgUrl }: Props) {
  return (
    <div
      className="h-screen w-screen relative bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      {children}
    </div>
  );
}

export default BackgroundWrapper;
