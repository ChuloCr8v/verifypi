import { Button } from "antd";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setOpenForm: Dispatch<SetStateAction<{ isOpen: boolean; action: string }>>;
};

const Buttons = (props: Props) => {
  return (
    <div className="flex md:flex-row md:gap-4 flex-col items-center">
      <Button
        type="primary"
        onClick={() => props.setOpenForm({ isOpen: true, action: "Validate" })}
        className="mt-6 border-none text-2xl text-white font-semibold w-[306px] h-16  shadow-lg hover:shadow-xl "
      >
        Validate Pi
      </Button>
      <Button
        onClick={() => props.setOpenForm({ isOpen: true, action: "Unlock" })}
        className="mt-6 border-yellow-500 bg-transparent text-yellow-500 text-2xl font-semibold w-[306px] h-16  shadow-lg hover:shadow-xl hover:!bg-yellow-500 hover:!text-white"
      >
        Unlock Pi
      </Button>
    </div>
  );
};

export default Buttons;
