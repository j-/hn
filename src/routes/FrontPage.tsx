import * as React from 'react';
import FrontPage from '../containers/FrontPage';
import { RouteProps } from 'react-router-dom';

export interface Props extends RouteProps {

}

export default class FrontPageRoute extends React.Component<Props, {}> {
  render () {
    return <FrontPage />;
  }
}
