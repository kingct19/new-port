import "./App.css";
import Header from "./components/Header/header";
import Home from "./components/Home/home";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
      </main>
    </>
  );
};

export default App;
