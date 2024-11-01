import { ConfigProvider } from "antd";
import "./App.css";
import LandingPage from "./page/LandingPage";

function App() {
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
