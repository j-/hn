import * as React from 'react';
import './ItemTitle.css';

export interface Props extends React.Props<{}> {
  title: string;
  url: string;
}

export default class StoryComponent extends React.Component<Props, {}> {
  render () {
    const { title, url } = this.props;
    const target = '_blank';
    const rel = 'noopener noreferrer';
    return (
      <a
        className="ItemTitle"
        href={url}
        children={title}
        target={target}
        rel={rel}
      />
    );
  }
}
