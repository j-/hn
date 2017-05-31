import * as React from 'react';
import './Domain.css';

export interface Props extends React.Props<{}> {
  url: string;
}

export default class Domain extends React.Component<Props, {}> {
  render () {
    const url = 'http://www.skeoh.com/';
    const text = 'skeoh.com';
    const target = '_blank';
    const rel = 'noopener noreferrer';
    const link = (
      <a
        className="Domain-link"
        href={url}
        children={text}
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
