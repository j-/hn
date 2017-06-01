import * as React from 'react';
import Item from '../containers/Item';
import { RouteProps } from 'react-router-dom';
import { parse } from 'querystring';

export interface Props extends RouteProps {

}

export default class ItemRoute extends React.Component<Props, {}> {
  render () {
    const { location } = this.props;

    if (!location) {
      return null;
    }

    // Remove leading "?"
    const querystring = location.search.substring(1);
    const { id } = parse(querystring);
    return <Item id={id} />;
  }
}
