const Shimmer = ({ count = 8 }) => (
  <div className="flex flex-wrap justify-center gap-4">
    {Array.from({ length: count }).map((_, i) => (
      <div
        className="w-[280px] h-[245px] rounded-[10px] bg-[length:400%_100%] animate-[shimmer_1.2s_infinite] bg-gradient-to-r from-[#f0f0f0] via-[#e0e0e0] to-[#f0f0f0]"
        key={i}
      />
    ))}
  </div>
);

export default Shimmer;
