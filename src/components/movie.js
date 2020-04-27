import React from 'react';

const sidesize = 490;
const styleGenerator = (size) => ({
  width: size
});


const Movie = ({ movies, max }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.income.toString() + movie.title.toString()}>
          <div className="wrapper">
            <div className="left_box">
              <div className="rank">
                {movie.rank}
              </div>
              <div className="title">
                {movie.title}
              </div>
            </div>
            <div className="right_box">
              <p className="income">$ {movie.income.toLocaleString()}</p>
              <div className="bar" style={styleGenerator(movie.income/max*sidesize)}>
              </div>
            </div>
          </div>
        </li>
      ))
      }
    </ul>
  );
}


export default Movie;

