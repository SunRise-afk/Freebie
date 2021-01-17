import "./App.css";
import { Advantages } from "./components/Advantages/Advantages";
import { DesignedBuilt } from "./components/DesignedBuilt/DesignedBuilt";
import { Features } from "./components/Features/Features";
import { Header } from "./components/Header/Header";
import { Jackpot } from "./components/Jackpot/Jackpot";
import { Subscribes } from "./components/Subscribes/Subscribes";
import { TrustedCompanies } from "./components/TrustedCompanies/TrustedCompanies";
import { UltimateFeatures } from "./components/UltimateFeatures/UltimateFeatures";

function App() {
  return (
    <>
      <Header></Header>
      <TrustedCompanies></TrustedCompanies>
      <Features></Features>
      <Jackpot></Jackpot>
      <DesignedBuilt></DesignedBuilt>
      <Advantages></Advantages>
      <UltimateFeatures></UltimateFeatures>
      <Subscribes></Subscribes>
    </>
  );
}

export default App;
