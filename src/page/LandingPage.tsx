import { useState } from "react";
import Hero from "../component/Hero";
import Header from "./layout/Header";
import ValidateModal from "../component/ValidateModal";
import About from "../component/About";
import SectionTwo from "../component/SectionTwo";
import Cards from "../component/Cards";
import CTA from "../component/CTA";
import Footer from "./layout/Footer";

const LandingPage = () => {
  const [isOpen, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState({ isOpen: false, action: "" });

  return (
    <div>
      <Header isOpen={isOpen} setOpen={setOpen} setOpenForm={setOpenForm} />
      <div className="overflow-x-hidden">
        <Hero setOpenForm={setOpenForm} />
        <SectionTwo />
        <About setOpen={setOpenForm} />
        <Cards />
        <CTA openForm={openForm} setOpenForm={setOpenForm} />
      </div>

      <Footer />

      <ValidateModal open={openForm} setOpen={setOpenForm} />
    </div>
  );
};

export default LandingPage;
