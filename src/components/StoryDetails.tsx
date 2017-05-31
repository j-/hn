import * as React from 'react';
import { Story } from '../types';
import UserLink from './UserLink';
import CommentsLink from './CommentsLink';
import './StoryDetails.css';

export interface Props extends React.Props<{}> {
  story: Story;
}

export default class StoryDetails extends React.Component<Props, {}> {
  render () {
    const { story } = this.props;
    const { id, score, by, kids } = story;
    const count = kids ? kids.length : 0;
    const user = (
      <span className="StoryDetails-author">
        <UserLink id={by} />
      </span>
    );
    const comments = (
      <span className="StoryDetails-comments">
        <CommentsLink itemId={id} count={count} />
      </span>
    );
    return (
      <div className="StoryDetails">
        {score} points by {user} some time ago | {comments}
      </div>
    );
  }
}
