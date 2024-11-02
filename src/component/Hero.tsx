import { Button } from "antd";

interface Props {
  setOpenForm: (arg: boolean) => void;
}

const Hero = ({ setOpenForm }: Props) => {
  return (
    <div className="relative bg-gradient-to-br from-[#191021] from-20% to-85% to-[#1e112b] flex flex-col items-center justify-center min-h-screen px-4 pt-40 lg:py-24 pb-12">
      <img
        className="absolute h-full w-full top-0 left-0 object-cover opacity-[0.03]"
        src="/hero-bg.png"
        alt="mine pi"
      />
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl w-full">
        <div
          data-aos="fade-right"
          className=" text-white flex flex-col items-start justify-center gap-3 basis-full"
        >
          <h2 className="font-bold capitalize text-[45px] leading-tight">
            Welcome to Pi Network <br></br> Validation Portal
          </h2>
          <p className="text-2xl text-yellow-300">
            Validate your Pi so you can sell whenever you wish without
            restrictions or risk of being banned.
          </p>

          <Button
            type="primary"
            onClick={() => setOpenForm(true)}
            className="mt-6 border-none text-2xl text-white font-semibold w-[306px] h-16  shadow-lg hover:shadow-xl "
          >
            Validate PI
          </Button>
        </div>
        <div
          data-aos="fade-left"
          className="relative flex items-center justify-center basis-full"
        >
          <div className="max-h-[500px] max-w-[500px] p-8 shadow-2xl border border-white  h-full w-full rounded-full overflow-hidden">
            <img
              src="/pi-logo.jpeg"
              alt="validate your pi"
              className="animate-pulse scale-150"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
