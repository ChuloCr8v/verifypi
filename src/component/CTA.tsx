import { Dispatch, SetStateAction } from "react";
import Buttons from "./Buttons";

interface Props {
  openForm: { isOpen: boolean; action: string };
  setOpenForm: Dispatch<SetStateAction<{ isOpen: boolean; action: string }>>;
}

const CTA = (props: Props) => {
  return (
    <div className="bg-gradient-to-r flex flex-col items-center justify-center from-[#88348e] to-80% to-[#443f88] py-12 lg:py-24">
      <div className="lg:grid grid-cols-2 gap-24 items-center max-w-4xl w-full">
        <div
          className="flex items-center lg:items-end justify-center lg:justify-end"
          data-aos="fade-right"
        >
          <img
            src="/cta.webp"
            alt="validate your pi"
            className="max-w-[400px]"
          />
        </div>
        <div
          className="max-w-[450px] place-self-center space-y-4 px-4"
          data-aos="fade-left"
        >
          <p className="font-semibold text-4xl text-yellow-500">
            Validate your pi today for freer transactions
          </p>
          <p className="text-xl text-white">
            Verify your Pi account to unlock fast, fee-free transactions and
            secure your place in a trusted digital economy.
          </p>

          <Buttons setOpenForm={props.setOpenForm} />
        </div>
      </div>
    </div>
  );
};

export default CTA;
