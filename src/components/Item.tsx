import * as React from 'react';
import { Item, itemIsStory, itemIsJob, itemIsAsk } from '../types';
import AskComponent from './Ask';
import JobComponent from './Job';
import StoryComponent from './Story';

export interface Props extends React.Props<{}> {
  item: Item;
}

export default class ItemComponent extends React.Component<Props, {}> {
  render () {
    const { item } = this.props;

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
