import * as React from 'react';
import { Job } from '../types';
import ItemTitle from './ItemTitle';
import JobDetails from './JobDetails';
import './Job.css';

export interface Props {
  job: Job;
}

export default class JobComponent extends React.Component<Props, {}> {
  render () {
    const { job } = this.props;
    const url = `https://news.ycombinator.com/item?id=${job.id}`;
    return (
      <div className="Job">
        <ItemTitle title={job.title} url={url} />
        <div className="Job-details">
          <JobDetails job={job} />
        </div>
      </div>
    );
  }
}
