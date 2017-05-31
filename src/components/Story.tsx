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
    const domain = this.renderDomain();
    const details = this.renderDetails();
    return (
      <div className="Story">
        <ItemTitle title={story.title} url={story.url} />
        {' '}
        {domain}
        {details}
      </div>
    );
  }

  private renderDomain () {
    const { story } = this.props;
    const { url } = story;
    if (!url) {
      return null;
    }
    return (
      <span className="Story-domain">
        <Domain url={url} />
      </span>
    );
  }

  private renderDetails () {
    const { story } = this.props;
    return (
      <div className="Story-details">
        <StoryDetails story={story} />
      </div>
    );
  }
}
