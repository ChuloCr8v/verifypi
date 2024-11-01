const Loading = () => {
  return (
    <div className="h-screen w-screen fixed top-0 left-0 flex items-center justify-center basis-full">
      <div className="bg-black bg-opacity-70 absolute h-full w-full"></div>
      <div className="absolute animate-spin max-h-[100px] max-w-[100px] shadow-2xl border border-white  h-full w-full rounded-full overflow-hidden">
        <img
          src="/pi-logo.jpeg"
          alt="validate your pi"
          className="animate-pulse"
        />
      </div>
    </div>
  );
};

export default Loading;
