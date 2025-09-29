import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faq = () => {
  return (
    <section className="bg-white max-w-[1600px] lg:p-[120px] sm:p-10 px-4 py-8 mx-auto">
      <h1 className="text-2xl sm:text-[32px] lg:text-5xl font-bold  text-center text-[#1B1743] mb-8">
        Frequently asked questions
      </h1>
      <div className="mt-8 sm:mt-10 lg:mt-[120px]">
        <div className="relative">
          <div className="pr-7 mb-4 sm:mb-6 lg:mb-8 space-y-3">
            <h2 className="text-[16px] sm:text-[20px] lg:text-[28px] font-semibold text-[#1B1743]">
              Do plumbers deal with heating?
            </h2>
            <p className="text-[14px] lg:text-lg text-[#1B1743">
              Some of our local plumbers are also gas registered and experienced
              working on heating systems, bathrooms and kitchens.
            </p>
          </div>
          <div className="h-[1px] bg-[#D4DBE0]"></div>
          <div className="absolute right-[2px] top-[7px]">
            <IoIosArrowUp className="text-2xl sm:text-[32px] text-[#AAB6B5] cursor-pointer" />
          </div>
        </div>
        <div className="relative">
          <div className="pr-7 my-4 sm:my-6 lg:my-8">
            <h2 className="text-[16px] sm:text-[20px] lg:text-[28px] font-semibold text-[#1B1743]">
              Do you charge a call out fee?
            </h2>
          </div>
          <div className="h-[1px] bg-[#D4DBE0]"></div>
          <div className="absolute right-[2px] top-[7px]">
            <IoIosArrowDown className="text-2xl sm:text-[32px] text-[#AAB6B5] cursor-pointer" />
          </div>
        </div>
        <div className="relative">
          <div className="pr-7 my-4 sm:my-6 lg:my-8">
            <h2 className="text-[16px] sm:text-[20px] lg:text-[28px] font-semibold text-[#1B1743]">
              How quickly can your company send out an engineer?
            </h2>
          </div>
          <div className="h-[1px] bg-[#D4DBE0]"></div>
          <div className="absolute right-[2px] top-[7px]">
            <IoIosArrowDown className="text-2xl sm:text-[32px] text-[#AAB6B5] cursor-pointer" />
          </div>
        </div>
        <div className="relative">
          <div className="pr-7 mt-4 sm:mt-6 lg:mt-8">
            <h2 className="text-[16px] sm:text-[20px] lg:text-[28px] font-semibold text-[#1B1743]">
              What should I do if I get a water leak?
            </h2>
          </div>
          <div className="absolute right-[2px] top-[7px]">
            <IoIosArrowDown className="text-2xl sm:text-[32px] text-[#AAB6B5] cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
