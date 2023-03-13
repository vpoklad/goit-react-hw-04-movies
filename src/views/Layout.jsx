import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { Toaster } from 'react-hot-toast';
import ToTopButton from '../components/Buttons/ToTopButton';

export default function Layout({ children }) {
  return (
    <>
      <Toaster />
      <header style={{position: "fixed", zIndex:10, top:0, left:0, width:"100%"}}>
        <Navbar />
      </header>

      
        <Outlet>{children}</Outlet>
      
      <ToTopButton />
    </>
  );
}
