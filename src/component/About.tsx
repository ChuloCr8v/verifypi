import { Button } from "antd";
import { BsArrowRight } from "react-icons/bs";

const About = ({ setOpen }: { setOpen: (arg: boolean) => void }) => {
  return (
    <div className=" flex flex-col justify-center items-center relative">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="wave-container -mt-2 w-full"></div>
        <div className="max-w-7xl w-full gap-24 flex flex-col lg:flex-row justify-center items-center -mt-2">
          <div
            className="basis-full max-w-[500px] w-full space-y-2 px-4"
            data-aos="fade-down"
          >
            <p className="text-2xl md:text-3xl font-semibold text-yellow-600">
              Pi makes crypto mining easy.
            </p>
            <p className="text-xl text-gray-700">
              Breakthrough tech allows you to mine Pi on your phone without
              draining your battery. Learn.
            </p>
            <Button
              onClick={() => setOpen(true)}
              icon={<BsArrowRight className="animate-pulse mt-1" />}
              iconPosition="end"
              type="primary"
              className="!mt-4 w-[200px] h-12 text-lg"
            >
              Validate Now
            </Button>
          </div>

          <div
            className="flex items-center justify-end "
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img
              src="/about.png"
              alt="validate"
              className="max-w-[400px] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
