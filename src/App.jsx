import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route,  Routes } from "react-router-dom";
import Main from "./components/Main";
import AddLesson from "./components/AddLesson/AddLesson";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="*" element={<Main />}/>
            <Route path="/addlesson" element={<AddLesson />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
