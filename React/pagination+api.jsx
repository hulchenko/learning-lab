import { useState, useEffect, useRef } from "react";

const JOB_IDS_API = "https://hacker-news.firebaseio.com/v0/jobstories.json";
const JOB_DETAILS_API = (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;
const JOBS_PER_PAGE = 6;

export default function App() {
  const [jobIds, setJobIds] = useState([]);
  const [jobDetails, setJobDetails] = useState([]);
  const [page, setPage] = useState(0);
  const [error, setError] = useState("");
  const isFetched = useRef(false);

  useEffect(() => {
    if (isFetched.current) return; // avoid double fetching in dev strict mode
    isFetched.current = true;

    // initially load job ids;
    const getJobIds = async () => {
      try {
        const response = await fetch(JOB_IDS_API);
        if (!response.ok) {
          throw new Error("Error fetching job ids.");
        }
        const data = await response.json();
        setJobIds(data);
      } catch (err) {
        if (err instanceof Error) {
          return setError(err.message);
        }
        setError("Fetch job ids failed.");
      }
    };
    getJobIds();
  }, []);

  useEffect(() => {
    const getJobDetails = async () => {
      try {
        const start = page * JOBS_PER_PAGE;
        const end = start + JOBS_PER_PAGE;
        const targetJobIds = jobIds.slice(start, end);
        const mapIds = targetJobIds.map(async (id) => {
          const response = await fetch(JOB_DETAILS_API(id));
          const data = await response.json();
          return data;
        });
        const details = await Promise.all(mapIds);
        setJobDetails((prev) => [...prev, ...details]);
      } catch (err) {
        if (err instanceof Error) {
          return setError(err.message);
        }
        setError("Fetch job details failed.");
      }
    };

    if (jobIds.length) {
      getJobDetails();
    }
  }, [jobIds, page]);

  if (error) {
    return <div style={{ color: "red", fontSize: "20px" }}>{error}</div>;
  }

  return (
    <>
      {jobDetails.map((job) => (
        <div
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            padding: "5px",
            marginTop: "10px",
          }}
        >
          <h3>{job.title}</h3>
          <p>
            By {job.by} - {new Date(job.time * 1000).toLocaleString()}
          </p>
          <a href={job.url} target="_blank">
            {job.url}
          </a>
        </div>
      ))}
      {jobIds.length > jobDetails.length && <button onClick={() => setPage((prevPage) => prevPage + 1)}>Load more jobs</button>}
    </>
  );
}
