const Error = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-red-100 border border-red-400 rounded shadow text-center">
      <h2 className="text-xl font-bold text-red-700 mb-2">
        Oops! Something went wrong.
      </h2>
      <p className="text-red-600 mb-4">
        We couldn't load the data. Please try again.
      </p>
      <button
        onClick={handleRetry}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Retry
      </button>
    </div>
  );
};

export default Error;
