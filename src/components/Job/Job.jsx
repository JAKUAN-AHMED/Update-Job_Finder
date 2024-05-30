import { Link } from "react-router-dom";

const Job = () => {
    return (
        <div className="manrope mt-8 mb-8 gap-6 text-center">
            <h2 className="text-3xl text-center border rounded shadow-lg mb-4">Nothing here!!!</h2>
            <Link to={'/'}><button className="btn bg-purple-300 text-base">Go back</button></Link>
        </div>
    );
};

export default Job;