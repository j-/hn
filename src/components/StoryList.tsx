import * as React from 'react';

export interface Props extends React.Props<{}> {
  storyIds: number[];
}

export default class StoryList extends React.Component<Props, {}> {
  render () {
    const { storyIds } = this.props;
    const elements = storyIds.map((id) => <li key={id}>{id}</li>);
    return <ul>{elements}</ul>;
  }
}
