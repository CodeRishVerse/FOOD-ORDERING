const Shimmer = ({ count = 8 }) => (
  <div className="shimmer">
    {Array.from({ length: count }).map((_, i) => (
      <div className="shimmer-box" key={i} />
    ))}
  </div>
);

export default Shimmer;