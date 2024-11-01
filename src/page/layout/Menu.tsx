import { motion } from "framer-motion";
import { MdPassword } from "react-icons/md";
import { twMerge } from "tailwind-merge";

type Props = {
  isOpen: boolean;
  setOpen: (arg: boolean) => void;
  setOpenForm: (arg: boolean) => void;
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
          "group bg-white md:bg-transparent w-full p-4  rounded-md md:border border-yellow-600 md:p-2 md:px-6 cursor-pointer md:flex duration-200",
          !props.isOpen && "hidden"
        )}
      >
        <div
          onClick={() => props.setOpenForm(true)}
          className="group-hover:text-yellow-700 duration-200 flex items-center justify-between text-lg font-black  md:text-yellow-600"
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
