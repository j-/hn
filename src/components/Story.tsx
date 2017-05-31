import * as React from 'react';
import { Story } from '../types';

export interface Props {
  story: Story;
}

export default class StoryComponent extends React.Component<Props, {}> {
  render () {
    const { story } = this.props;
    const { title } = story;
    return (
      <div className="Story">
        <strong>{title}</strong>
      </div>
    );
  }
}
