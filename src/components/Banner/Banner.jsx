import bannerImg from "../../assets/Proffesional-removebg-preview.png";
const Banner = () => {
  return (
    <div className="hero max-w-5xl mx-auto min-h-screen bg-base-200 border rounded-xl p-5 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="max-w-lg rounded-lg border border-blue-400 w-[250px] h-[200px] lg:w-[510px] lg:h-[340px]"
        />
        <div>
          <div className="">
            <h1 className="text-5xl font-extrabold text-start">
              One Step <br /> Closer To Your <br />
              <span className="text-[#7E90FE]">Dream Job</span>
            </h1>
          </div>
          <p className="py-6">
            Provident cupiditate voluptatem et in. excepturi exercitationem
            quasi.
            <br />
            In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn bg-[#7E90FE] text-start">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
