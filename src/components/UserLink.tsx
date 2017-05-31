import * as React from 'react';

export interface Props extends React.Props<{}> {
  id: string;
}

export default class UserLink extends React.Component<Props, {}> {
  render () {
    const { id } = this.props;
    const url = `https://news.ycombinator.com/user?id=${id}`;
    const target = '_blank';
    const rel = 'noopener noreferrer';
    return (
      <a
        className="UserLink"
        href={url}
        children={id}
        target={target}
        rel={rel}
      />
    );
  }
}
