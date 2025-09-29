import { FaArrowRight } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <section className="bg-white max-w-[1600px] lg:p-[120px] sm:p-10 px-4 py-8 mx-auto">
      <div className="text-white rounded-3xl bg-[#0058FF] flex flex-col items-center justify-center p-4 sm:p-10 lg:p-20">
        <h2 className="font-bold text-2xl sm:text-[32px]  lg:text-5xl">Get In Touch</h2>
        <p className="text-[14px] lg:text-lg my-4 sm:my-6 lg:my-8 max-w-[1000px] text-center">
          Contact us now to enquire our plumbing services, whether you have a
          commercial project that requires support, or a domestic plumbing task
          that needs the attention of a trusted professional.
        </p>
        <button className="px-6 py-[10px] bg-white rounded-lg text-[#0058FF] text-[14px] sm:text-[16px] lg:text-lg font-bold cursor-pointer flex flex-row gap-2 items-center justify-center">
          <p>Book a Professional Plumber</p> <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default GetInTouch;
