import React from 'react';
import Sort from './sort';
import { Data } from './test-data/data';

class App extends React.Component {
  render() {
    return (
      <div>
        <Sort
          movies={Data}
        />
      </div>
    );
  }
}

export default App;
