import * as React from 'react';
import { Job } from '../types';
import humanizeTime from '../utils/humanize-time';

export interface Props extends React.Props<{}> {
  job: Job;
}

export default class JobDetails extends React.Component<Props, {}> {
  render () {
    const { job } = this.props;
    const { time } = job;
    const ago = humanizeTime(time * 1000);
    return (
      <div className="JobDetails">
        {ago} ago
      </div>
    );
  }
}
