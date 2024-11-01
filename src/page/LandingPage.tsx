import { useState } from "react";
import Hero from "../component/Hero";
import Header from "./layout/Header";
import ValidateModal from "../component/ValidateModal";

const LandingPage = () => {
  const [isOpen, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  return (
    <div>
      <Header isOpen={isOpen} setOpen={setOpen} setOpenForm={setOpenForm} />
      <Hero setOpenForm={setOpenForm} />

      <ValidateModal open={openForm} setOpen={setOpenForm} />
    </div>
  );
};

export default LandingPage;
