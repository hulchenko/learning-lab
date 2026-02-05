import { Company } from "@/app/interfaces/Company";
import { Job } from "@/app/interfaces/Job";

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const companies: Company[] = [
  {
    id: "company1",
    name: "Company A",
    description,
  },
  {
    id: "company2",
    name: "Company B",
    description,
  },
];

const jobs: Job[] = [
  {
    id: "job1",
    title: "Job 1",
    date: "2024-01-21",
    company: companies[0],
    description,
  },
  {
    id: "job2",
    title: "Job 2",
    date: "2024-01-22",
    company: companies[1],
    description,
  },
];

export { companies, jobs };
export type { Company, Job };
