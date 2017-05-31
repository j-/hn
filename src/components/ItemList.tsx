import * as React from 'react';
import ItemContainer from '../containers/Item';
import './ItemList.css';

export interface Props extends React.Props<{}> {
  itemIds: number[];
  offset: number;
  limit: number;
}

export default class ItemList extends React.Component<Props, {}> {
  static defaultProps: Partial<Props> = {
    offset: 0,
    limit: 25,
  };

  render () {
    const { itemIds, offset, limit } = this.props;
    const page = itemIds.slice(offset, offset + limit);
    const elements = page.map((id) => (
      <li key={id} className="ItemList-item">
        <ItemContainer id={id} />
      </li>
    ));
    return <ul className="ItemList">{elements}</ul>;
  }
}
