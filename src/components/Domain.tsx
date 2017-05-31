import * as React from 'react';
import { parse } from 'url';

export interface Props extends React.Props<{}> {
  url: string;
}

export default class Domain extends React.Component<Props, {}> {
  render () {
    const { url } = this.props;

    if (!url) {
      return null;
    }

    const { hostname } = parse(url);
    const target = '_blank';
    const rel = 'noopener noreferrer';
    const link = (
      <a
        className="Domain-link"
        href={url}
        children={hostname}
        target={target}
        rel={rel}
      />
    );
    return (
      <span className="Domain">
        (
          {link}
        )
      </span>
    );
  }
}
