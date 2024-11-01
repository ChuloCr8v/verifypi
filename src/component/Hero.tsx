import { Button } from "antd";
import ValidateModal from "./ValidateModal";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-gradient-to-br from-purple-700 from-20% to-85% to-purple-950 flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-between gap-12 max-w-7xl w-full">
        <div className=" text-white flex flex-col items-start justify-center gap-3 basis-full pl-6">
          <h2 className="font-bold capitalize text-[45px] leading-none">
            Welcome to Pi Network <br></br> Validation Portal
          </h2>
          <p className="text-2xl text-yellow-300">
            Validate your Pi so you can sell whenever you wish without
            restrictions or risk of being banned.
          </p>

          <Button
            onClick={() => setIsOpen(true)}
            className="mt-6 border-none text-2xl text-white font-semibold w-[306px] h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg hover:shadow-xl hover:bg-yellow-700"
          >
            Validate PI
          </Button>
        </div>
        <div className="relative flex items-center justify-center basis-full">
          <div className="max-h-[500px] max-w-[500px] p-8 shadow-2xl border border-white  h-full w-full rounded-full overflow-hidden">
            <img
              src="/pi-logo.jpeg"
              alt="validate your pi"
              className="animate-pulse"
            />
          </div>
        </div>
      </div>

      <ValidateModal open={isOpen} setOpen={setIsOpen} />
    </div>
  );
};

export default Hero;
