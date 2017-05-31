import * as React from 'react';
import { Item, itemIsStory, itemIsJob, itemIsAsk } from '../types';
import AskComponent from './Ask';
import JobComponent from './Job';
import StoryComponent from './Story';
import './Item.css';

export interface Props extends React.Props<{}> {
  item: Item;
  isLoading: boolean;
}

export default class ItemComponent extends React.Component<Props, {}> {
  static defaultProps: Partial<Props> = {
    isLoading: false,
  };

  render () {
    const { item, isLoading } = this.props;

    if (isLoading) {
      return <div className="Item Item-is-loading">Loading&hellip;</div>;
    }

    if (item === null) {
      return null;
    }

    if (itemIsAsk(item)) {
      return <AskComponent ask={item} />;
    }

    if (itemIsJob(item)) {
      return <JobComponent job={item} />;
    }

    if (itemIsStory(item)) {
      return <StoryComponent story={item} />;
    }

    return null;
  }
}
