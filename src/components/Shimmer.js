const SingleShimmer = () => <div id="shimmer-card"></div>;

const Shimmer = () => (
  <div id="shimmer-cont">
    {Array.from({ length: 12 }, (_, index) => (
      <SingleShimmer key={index} />
    ))}
  </div>
);

export default Shimmer;
