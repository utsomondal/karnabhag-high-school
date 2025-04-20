import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <div className='container mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
