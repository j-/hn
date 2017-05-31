import * as React from 'react';
import { Item, itemIsStory, itemIsJob } from '../types';
import StoryComponent from './Story';
import JobComponent from './Job';

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

    if (itemIsJob(item)) {
      return <JobComponent job={item} />;
    }

    return null;
  }
}
