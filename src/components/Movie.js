import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ id, title, year, genres, summary, poster }) {
  return (
    <div className="movie">
      <img className="movie__poster" src={poster} alt={title} title={title} />
      <div className="movie__text">
        <Link
          to={{
            pathname: `/Movie-${id}`,
            state: {
              title,
              year,
              genres,
              summary,
              poster,
            },
          }}
        >
          <span className="movie__title">{title}</span>
        </Link>
        <span className="movie__year">{year}</span>
        <ul className="movie__genres">
          {genres.map((genre, idx) => (
            <li className="movie__genre" key={idx}>
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;

// import React from "react";
// import PropTypes from "prop-types";
// import "./Movie.css";

// function Movie({ year, title, summary, poster, genres }) {
//   return (
//     <div className="movie">
//       <img src={poster} alt={title} title={title}></img>
//       <div className="movie__text">
//         <span className="movie__title">{title}</span>
//         <span className="movie__year">{year}</span>
//         <ul className="movie__genres">
//           {genres.map((genre, index) => (
//             <li key={index} className="genre">
//               {genre}
//             </li>
//           ))}
//         </ul>
//         <p className="summary">{summary}</p>
//       </div>
//     </div>
//   );
// }

// Movie.propTypes = {
//   id: PropTypes.number.isRequired,
//   year: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   summary: PropTypes.string.isRequired,
//   poster: PropTypes.string.isRequired,
//   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default Movie;
