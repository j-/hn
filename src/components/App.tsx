import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import FrontPageRoute from '../routes/FrontPage';

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
        </div>
      </Router>
    );
  }
}

export default App;
