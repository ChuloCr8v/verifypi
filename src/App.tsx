import { ConfigProvider } from "antd";
import "./App.css";
import LandingPage from "./page/LandingPage";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#c5960f",
        },
      }}
    >
      <div className="h-screen w-screen">
        <LandingPage />
      </div>
    </ConfigProvider>
  );
}

export default App;
