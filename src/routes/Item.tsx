import * as React from 'react';
import * as PropTypes from 'prop-types';
import Item from '../containers/Item';
import { RouteProps } from 'react-router-dom';
import { parse } from 'querystring';
import { fetchItem } from '../store/actions';

export interface Props extends RouteProps {

}

export default class ItemRoute extends React.Component<Props, {}> {
  static contextTypes = {
    store: PropTypes.object,
  }

  componentDidMount () {
    const { store } = this.context;
    const id = this.getItemId();
    if (!id) {
      return;
    }
    store.dispatch(
      fetchItem(id)
    );
  }

  render () {
    const id = this.getItemId();

    if (!id) {
      return null;
    }

    return <Item id={id} />;
  }

  private getItemId (): number | null {
    const { location } = this.props;
    if (!location) {
      return null;
    }
    // Remove leading "?"
    const querystring = location.search.substring(1);
    const { id } = parse(querystring);
    return Number(id);
  }
}
