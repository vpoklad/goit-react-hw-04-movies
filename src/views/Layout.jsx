import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import ToTopButton from '../components/Buttons/ToTopButton';

export default function Layout({ children }) {
  return (
    <>
      <Toaster />
      <header>
        <Navbar />
      </header>
      <div className="container">
        <Outlet>{children}</Outlet>
      </div>
      <ToTopButton />
    </>
  );
}
