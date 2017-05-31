import * as React from 'react';
import { Job } from '../types';

export interface Props {
  job: Job;
}

export default class JobComponent extends React.Component<Props, {}> {
  render () {
    const { job } = this.props;
    const { title } = job;
    return (
      <div className="Job">
        <strong>{title}</strong>
      </div>
    );
  }
}
