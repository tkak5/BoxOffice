import React from 'react';
import Sort from './sort';


class Ajax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "2019",
      error: null,
      isLoaded: false,
      movies: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({year: event.target.value});
  }

  componentDidMount() {
    fetch("https://tkak5.github.io/movie/year_list.json"
    ).then((response) => {if(response.ok) {
        response.json().then((json) =>
          this.setState({
            isLoaded: true,
            movies: json,
          })
        )
      } else {
        this.setState({
          isLoaded: true,
          error: response
        });
      }
    });
  }

  renderSort() {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>
    } else if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <Sort
          movies={this.state.movies}
        />
      );
    }
  }

  render() {
    return(
      <div>
        {this.renderSort()}
      </div>
    );
  }
}

export default Ajax;
