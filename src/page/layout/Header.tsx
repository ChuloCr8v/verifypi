import Hamburger from "hamburger-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Menu from "./Menu";

type Props = {
  isOpen: boolean;
  setOpenForm: (arg: boolean) => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ isOpen, setOpen, setOpenForm }: Props) => {
  const [showHeader, setShowHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={twMerge(
        "z-20 fixed top-0 left-0 w-full flex items-center justify-center p-4 transition-all duration-300",
        showHeader && "bg-[#26133a]"
      )}
    >
      <div className="flex items-center justify-between max-w-7xl w-full">
        <img src="/logo.png" alt="pi network validate" className="h-10" />
        <div className="flex items-end justify-end md:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
        </div>
        <Menu isOpen={isOpen} setOpen={setOpen} setOpenForm={setOpenForm} />
      </div>
    </div>
  );
};

export default Header;
