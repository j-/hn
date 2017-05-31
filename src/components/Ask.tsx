import * as React from 'react';
import { Ask } from '../types';
import ItemTitle from './ItemTitle';
import StoryDetails from './StoryDetails';

export interface Props extends React.Props<{}> {
  ask: Ask;
}

export default class StoryComponent extends React.Component<Props, {}> {
  render () {
    const { ask } = this.props;
    const details = this.renderDetails();
    const url = `https://news.ycombinator.com/item?id=${ask.id}`;
    return (
      <div className="Story Ask">
        <ItemTitle title={ask.title} url={url} />
        {' '}
        {details}
      </div>
    );
  }

  private renderDetails () {
    const { ask } = this.props;
    return (
      <div className="Story-details Ask-details">
        <StoryDetails story={ask} />
      </div>
    );
  }
}
