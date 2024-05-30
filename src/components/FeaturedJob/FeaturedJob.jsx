import { useEffect, useState } from "react";
import JobInfo from "../JobInfo/JobInfo";
const FeaturedJob = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength,setDataLength]=useState(4);
    useEffect(() => {
      fetch("jobs.json")
        .then((res) => res.json())
        .then((data) => setJobs(data));
    });
    return (
      <div className="manrope text-center mt-8 mb-8">
        <h2 className="text-5xl font-extrabold mb-8">Featured Job</h2>
        <p className="mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  mb-8 mt-8">
          {jobs.slice(0,dataLength).map((job) => (
            <JobInfo key={job.id} job={job}></JobInfo>
          ))}
        </div>
        <div className={dataLength === jobs.length ? "hidden" : "m-4"}>
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn bg-[#7E90FE] text-white hover:text-black"
          >
            Show All Jobs
          </button>
        </div>
      </div>
    );
};

export default FeaturedJob;