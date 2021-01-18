import { Advantages } from "./components/Advantages/Advantages";
import { ClientComments } from "./components/ClientComments/ClientComments";
import { DesignedBuilt } from "./components/DesignedBuilt/DesignedBuilt";
import { Features } from "./components/Features/Features";
import { Header } from "./components/Header/Header";
import { Jackpot } from "./components/Jackpot/Jackpot";
import { Subscribes } from "./components/Subscribes/Subscribes";
import { TrustedCompanies } from "./components/TrustedCompanies/TrustedCompanies";
import { UltimateFeatures } from "./components/UltimateFeatures/UltimateFeatures";
import { FAQ } from "./components/FAQ/FAQ";
import { Download } from "./components/Download/Download";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

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
      <ClientComments></ClientComments>
      <FAQ></FAQ>
      <Download></Download>
      <Footer></Footer>
    </>
  );
}

export default App;
