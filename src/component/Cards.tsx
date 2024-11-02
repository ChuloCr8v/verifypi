const cardData = [
  {
    title: "Decentralized",
    label:
      "Secure, Immutable, non-counterfeitable and interoperable digital money.",
    icon: "/decentralized.png",
  },
  {
    title: "Mobile First",
    label: "Works on your mobile phone and does not drain your battery.",
    icon: "/mobile.png",
  },
  {
    title: "User & Planet-Friendly",
    label:
      "Easy to use, secure at scale, without the massive electrical waste.",
    icon: "/planet.png",
  },
];

const Cards = () => {
  return (
    <div className="h-full py-24">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 h-full max-w-7xl w-full px-4">
        {cardData.map((item) => (
          <div
            data-aos="fade-down"
            className="max-w-[500px] lg:max-w-[250px] h-[300px] w-full flex flex-col items-center gap-2 shadow-2xl rounded-md p-4 py-12"
          >
            <img src={item.icon} alt={item.title} className="max-w-[60px]" />
            <p className="text-2xl text-center font-semibold text-gray-700">
              {item.title}
            </p>
            <p className="text-base text-center text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
