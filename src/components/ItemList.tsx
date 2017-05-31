import * as React from 'react';
import ItemContainer from '../containers/Item';
import './ItemList.css';

export interface Props extends React.Props<{}> {
  itemIds: number[];
}

export default class ItemList extends React.Component<Props, {}> {
  render () {
    const { itemIds } = this.props;
    const elements = itemIds.map((id) => (
      <li key={id} className="ItemList-item">
        <ItemContainer id={id} />
      </li>
    ));
    return <ul className="ItemList">{elements}</ul>;
  }
}
