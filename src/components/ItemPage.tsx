import * as React from 'react';
import ItemList from './ItemList';

export interface Props extends React.Props<{}> {
  itemIds: number[];
  page: number;
  limit: number;
}

export default class ItemPage extends React.Component<Props, {}> {
  static defaultProps: Partial<Props> = {
    page: 1,
    limit: 30,
  };

  render () {
    const { itemIds, page, limit } = this.props;
    const offset = (page - 1) * limit;
    const slice = itemIds.slice(offset, offset + limit);
    return (
      <ItemList
        itemIds={slice}
        offset={offset}
        limit={limit}
      />
    );
  }
}
