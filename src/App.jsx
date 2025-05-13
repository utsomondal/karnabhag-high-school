import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#DDDDDD] scroll-smooth">
      <Navbar />
      <main className="flex-1 container mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
