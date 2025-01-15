import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import LockPage from './pages/Lockpage';
function App() {
  return (
    <div className="App ">
        {/* <Header/>  */}
        <LockPage/>
        {/* <Header/> */}
        <main className='container'>
          <Outlet/>
        </main>
        {/* <Footer /> */}
    </div>
  );
}
export default App;
