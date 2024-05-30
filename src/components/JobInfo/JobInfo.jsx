import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const JobInfo = ({ job }) => {
  const {
    logo,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_title,
    id,
  } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl text-start manrope">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="gap-8">
          <button className="btn px-5 py-5 mr-4  font-extrabold border-yellow-400 border rounded-xl text-center  hover:bg-red-400 hover:text-black">
            {remote_or_onsite}
          </button>
          <button className="btn px-5 py-5 mr-4  font-extrabold border-purple-400 border rounded-xl text-center hover:bg-pink-500 hover:text-yellow-300">
            {job_type}
          </button>
        </div>
        <div className="flex gap-2">
          <h2 className="flex">
            <IoLocationOutline></IoLocationOutline>
            {location}
          </h2>
          <h2 className="flex items-center">
            <AiOutlineDollarCircle></AiOutlineDollarCircle>
            {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn bg-[#7E90FE]">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
