import * as React from 'react';
import { Item, itemIsStory } from '../types';
import StoryComponent from './Story';

export interface Props {
  item: Item;
}

export default class ItemComponent extends React.Component<Props, {}> {
  render () {
    const { item } = this.props;

    if (item === null) {
      return null;
    }

    if (itemIsStory(item)) {
      return <StoryComponent story={item} />;
    }

    return null;
  }
}
