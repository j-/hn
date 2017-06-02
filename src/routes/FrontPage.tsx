import * as React from 'react';
import * as PropTypes from 'prop-types';
import FrontPage from '../containers/FrontPage';
import { RouteProps } from 'react-router-dom';
import { fetchTopStories } from '../store/actions';

export interface Props extends RouteProps {

}

export default class FrontPageRoute extends React.Component<Props, {}> {
  static contextTypes = {
    store: PropTypes.object,
  };

  componentDidMount () {
    const { store } = this.context;
    store.dispatch(
      fetchTopStories()
    );
  }

  render () {
    return <FrontPage />;
  }
}
