const Footer = () => {
  return (
    <div className="w-screen p-4 bg-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-4">
        <img src="/logo.png" alt="PiValidate" className="max-w-[150px]" />
        <p className="text-gray-400 text-xl mt-2 md:mt-0">
          Copyright @PiValidate {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
