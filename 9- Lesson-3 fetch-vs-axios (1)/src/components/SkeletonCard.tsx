const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow animate-pulse">
      <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-5 bg-gray-200 rounded w-full"></div>
    </div>
  );
};

export default SkeletonCard;
