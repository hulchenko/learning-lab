import Link from "next/link";
import { formatDate } from "@/lib/formatters";
import { Job } from "@/lib/fake-data";

const JobList = ({ jobs }: { jobs: Job[] }) => {
  return (
    <ul className="box">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
};

const JobItem = ({ job }: { job: Job }) => {
  const title = job.company ? `${job.title} at ${job.company.name}` : job.title;
  return (
    <li className="media">
      <div className="media-left has-text-grey">{formatDate(job.date)}</div>
      <div className="media-content">
        <Link href={`/jobs/${job.id}`}>{title}</Link>
      </div>
    </li>
  );
};

export default JobList;
