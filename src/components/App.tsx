import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import FrontPageRoute from '../routes/FrontPage';
import ItemRoute from '../routes/Item';

class App extends React.Component<{}, null> {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact={true}
            path="/"
            component={(props) => <FrontPageRoute {...props} />}
          />
          <Route
            path="/item"
            component={(props) => <ItemRoute {...props} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
