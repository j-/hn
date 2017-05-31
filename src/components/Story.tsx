import * as React from 'react';
import { Story } from '../types';
import ItemTitle from './ItemTitle';
import Domain from './Domain';
import StoryDetails from './StoryDetails';
import './Story.css';

export interface Props extends React.Props<{}> {
  story: Story;
}

export default class StoryComponent extends React.Component<Props, {}> {
  render () {
    const { story } = this.props;
    return (
      <div className="Story">
        <ItemTitle title={story.title} url={story.url} />
        {' '}
        <span className="Story-domain">
          <Domain url={story.url} />
        </span>
        <div className="Story-details">
          <StoryDetails story={story} />
        </div>
      </div>
    );
  }
}
