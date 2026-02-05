"use client";

import { useParams } from "next/navigation";
import { companies } from "@/lib/fake-data";
import { Company } from "@/app/interfaces/Company";

const CompanyPage = () => {
  const { companyId } = useParams();

  const company: Company | undefined = companies.find((company) => company.id === companyId);

  return (
    <div>
      <h1 className="title">{company?.name}</h1>
      <div className="box">{company?.description}</div>
    </div>
  );
};

export default CompanyPage;
