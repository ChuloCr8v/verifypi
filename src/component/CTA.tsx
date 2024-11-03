import { Button } from "antd";
import { BsCheckCircle } from "react-icons/bs";

interface Props {
  openForm: boolean;
  setOpenForm: (arg: boolean) => void;
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

          <Button
            className="h-12 w-[200px] text-xl !mt-12"
            icon={<BsCheckCircle />}
            iconPosition="start"
            type="primary"
            onClick={() => props.setOpenForm(true)}
          >
            Valitate Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
