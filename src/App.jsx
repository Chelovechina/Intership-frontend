import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CourseContainer from './components/Course/CourseContainer';
import { useState } from 'react';
import AdminContainer from './components/Admin/AdminContainer';

function App() {
  const [isAdmin, setIsAdmin] = useState(false)

  const changeUserStatus = () => {
    setIsAdmin(!isAdmin)
  }

  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <div className="container">
            {isAdmin ? <AdminContainer /> : <CourseContainer />}
            <button onClick={changeUserStatus} className="btn">Admin</button>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
