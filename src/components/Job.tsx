import * as React from 'react';
import { Job } from '../types';
import ItemTitle from './ItemTitle';

export interface Props {
  job: Job;
}

export default class JobComponent extends React.Component<Props, {}> {
  render () {
    const { job } = this.props;
    return (
      <div className="Job">
        <ItemTitle title={job.title} url={job.url} />
      </div>
    );
  }
}
