// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
