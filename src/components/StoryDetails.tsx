import * as React from 'react';
import { Story } from '../types';
import UserLink from './UserLink';
import './StoryDetails.css';

export interface Props extends React.Props<{}> {
  story: Story;
}

export default class StoryDetails extends React.Component<Props, {}> {
  render () {
    const { story } = this.props;
    const { score, by, kids } = story;
    const comments = kids ? kids.length : 0;
    const user = (
      <span className="StoryDetails-author">
        <UserLink id={by} />
      </span>
    );
    return (
      <div className="StoryDetails">
        {score} points by {user} some time ago | {comments} comments
      </div>
    );
  }
}
