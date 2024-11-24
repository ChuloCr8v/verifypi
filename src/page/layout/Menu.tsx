import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { GiPadlock } from "react-icons/gi";
import { MdPassword } from "react-icons/md";
import { twMerge } from "tailwind-merge";

type Props = {
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
  setOpenForm: Dispatch<SetStateAction<{ isOpen: boolean; action: string }>>;
};

const Menu = (props: Props) => {
  return (
    <motion.div
      className="w-full p-2 absolute md:relative md:w-fit left-0 top-16 md:top-0"
      initial={{ y: -20 }}
      animate={{ y: 0 }}
    >
      <div
        className={twMerge(
          "bg-white md:bg-transparent w-full p-4  rounded-md cursor-pointer md:flex duration-200 space-y-4 md:space-y-0 md:space-x-4",
          !props.isOpen && "hidden"
        )}
      >
        <div
          onClick={() => props.setOpenForm({ isOpen: true, action: "Unlock" })}
          className="group hover:text-yellow-700 duration-200 flex items-center justify-between text-lg font-black  md:text-white"
        >
          Unlock Your Pi
          <div className="text-xl md:hidden bg-[#26133a] text-white p-2 rounded-full group-hover:bg-yellow-500 duration-200">
            <GiPadlock />
          </div>
        </div>
        <div
          onClick={() =>
            props.setOpenForm({ isOpen: true, action: "Validate" })
          }
          className="group hover:text-yellow-700 duration-200 flex items-center justify-between text-lg font-black  md:text-white"
        >
          Validate Your Pi
          <div className="text-xl md:hidden bg-[#26133a] text-white p-2 rounded-full group-hover:bg-yellow-500 duration-200">
            <MdPassword />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
