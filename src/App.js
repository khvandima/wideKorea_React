import HomePage from "./Pages/HomePage";
import Header from "./Components/Header/Header"



function App() {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
