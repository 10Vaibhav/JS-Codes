import "./App.css";
import Button from "./Components/buttons";
import Input from "./Components/input";
import Header from "./Components/header";
import SubHeader from "./Components/subhead";
import Otp from "./Components/Otp";

function App() {
  return (
    <div className="h-screen bg-blue-700 flex flex-col items-center justify-center space-y-8 text-center">
      <Header />
      <SubHeader />
      <Otp number={6}/>
      <Button disabled={true}>Verify</Button>
    </div>
  );
}

export default App;