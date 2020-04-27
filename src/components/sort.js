import React, { useState, useMemo } from 'react';
import Movie from './movie';
import Button from './button';
import Filter from './filter';
import Select from './select';
import logo from '../images/logo.png';
import arrow from '../images/arrow.png';

const Sort = (props) => {
  const [sort, setSort] = useState([])
  const [filterQuery, setFilterQuery] = useState({});
  const [year, setYear] = useState([2019]);

  const sortedMovies = useMemo(() => {
    let _sortedMovies = props.movies[year]["movies"];

    //入力した文字は小文字にする
    const filterTitle = filterQuery.title && filterQuery.title.toLowerCase();

    //絞り込み検索
    _sortedMovies = _sortedMovies.filter(row => {
      //タイトルで絞り込み
      if (
        filterQuery.title &&
        String(row.title).toLowerCase().indexOf(filterTitle) === -1
      ) {
        return false;
      }
      return row;
    });

    //ソート
    if (sort.key) {
      _sortedMovies = _sortedMovies.sort((a, b) => {
        a = a[sort.key];
        b = b[sort.key];

        if(a === b) {
          return 0;
        }
        if(a > b) {
          return 1 * sort.order;
        }
        if(a < b) {
          return -1 * sort.order;
        }
      });
    }
    return _sortedMovies;
  }, [filterQuery, sort, year]);

  const handleFilter = e => {
    const { name, value } = e.target;
    setFilterQuery({...filterQuery, [name]: value });
  };

  const handleSort = (key) => {
    if (sort.key === key) {
      setSort({...sort, order: -sort.order });
    } else {
      setSort({
        key: key,
        order: 1
      })
    }
  };

  const handleChange = (event) => {
    setYear(event.target.value);
  }

   return(
    <div id="top">
      <div className="header" id="header">
        <div className="header-group">
          <div className="logo">
            <a href=""><img src={logo} alt="logo" /></a>
          </div>
          <div className="header-link">
            <a href="">year</a>
          </div>
          <div className="header-link">
            <a href="">all</a>
          </div>
        </div>
      </div>
      <div className="function">
        <div className="function-group">
          <div className="filter">
            <Filter
              handleFilter={handleFilter}
              filterQuery={filterQuery}
              className="component-filter"
            />
          </div>
          <div className="select function-items">
            <Select
              year={year}
              handleChange={handleChange}
              className="component-select"
            />
          </div>
          <div className="button function-items">
            <Button
              button={"income"}
              sort={sort}
              handleSort={handleSort}
              className="component-button"
            />
          </div>
          <div className="function-items">
            <a href="#top"><div className="header-link"><img src={arrow} alt="arrow" /></div></a>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="movielist">
          <Movie
            movies={sortedMovies}
            max={props.movies[year]["max"]}
            className="component-movie"
          />
        </div>
      </div>
      <div className="footer">
      </div>
    </div>

   );
}

export default Sort;

