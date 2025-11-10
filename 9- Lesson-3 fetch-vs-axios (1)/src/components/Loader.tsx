const Loader = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      <p className="mt-4 text-blue-500">Loading...</p>
    </div>
  );
};

export default Loader;
