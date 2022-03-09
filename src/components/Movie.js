import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, coverImg, title, rating, runTime, summary, genres }) {
  return (
    <div>
      <img src={coverImg} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>rating: {rating} Stars</p>
      <p>run time: {runTime} min</p>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  runTime: PropTypes.number.isRequired,
};

export default Movie;
