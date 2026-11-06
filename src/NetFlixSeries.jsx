import seriesData from "./api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
const NetflixSeries = () => {
  return (
    <>
      <ul>
        {seriesData.map((series) => {
          return <SeriesCard key={series.id} data={series} />;
        })}
      </ul>
    </>
  );
};

export default NetflixSeries;
