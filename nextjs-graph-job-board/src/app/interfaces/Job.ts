import { Company } from "./Company";

export interface Job {
  id: string;
  title: string;
  date: string;
  company: Company;
  description: string;
}
