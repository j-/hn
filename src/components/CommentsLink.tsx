import * as React from 'react';
import './CommentsLink.css';

export interface Props extends React.Props<{}> {
  itemId: number;
  count?: number;
}

export default class CommentsLink extends React.Component<Props, {}> {
  render () {
    const { itemId, count } = this.props;
    const url = `https://news.ycombinator.com/item?id=${itemId}`;
    const target = '_blank';
    const rel = 'noopener noreferrer';
    let text;
    if (!count) {
      text = 'discuss';
    } else if (count === 1) {
      text = '1 comment';
    } else {
      text = count + ' comments';
    }
    return (
      <a
        className="CommentsLink"
        href={url}
        children={text}
        target={target}
        rel={rel}
      />
    );
  }
}
