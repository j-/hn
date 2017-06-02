import * as React from 'react';
import ItemContainer from '../containers/Item';
import './ItemList.css';

export interface Props extends React.Props<{}> {
  itemIds: number[];
  start: number;
}

export default class ItemList extends React.Component<Props, {}> {
  static defaultProps: Partial<Props> = {
    start: 1,
  };

  render () {
    const { itemIds, start } = this.props;
    const elements = itemIds.map((id) => (
      <li key={id} className="ItemList-item">
        <ItemContainer id={id} />
      </li>
    ));
    return <ol className="ItemList" start={start}>{elements}</ol>;
  }
}
