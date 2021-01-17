import "./App.css";
import { Features } from "./components/Features/Features";
import { Header } from "./components/Header/Header";
import { Jackpot } from "./components/Jackpot/Jackpot";
import { TrustedCompanies } from "./components/TrustedCompanies/TrustedCompanies";

function App() {
  return (
    <>
      <Header></Header>
      <TrustedCompanies></TrustedCompanies>
      <Features></Features>
      <Jackpot></Jackpot>
    </>
  );
}

export default App;
