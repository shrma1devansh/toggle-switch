export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, genre, watch_url } = data;
  return (
    <li>
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>
      {/* <div className={styles["card-content"]}> */}
      <div>
        <h2>Name: {name} </h2>
        {/* <Rating> */}
        Rating:
        {/* <span className={`${styles.rating} ${ratingClass}`}>{rating}</span> */}
        {/* </Rating> */}
        <p>Summary: {description} </p>
        <p>Genre: {genre.join(", ")} </p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank">
          {/* <button style={btn_style}>Watch Now</button> */}
          {/* <ButtonThapa rating={rating}>Watch Now</ButtonThapa> */}
        </a>
      </div>
    </li>
  );
};
