import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css';
import AOS from 'aos'
import Introduction from './components/Introduction';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);


  return (
    <>
      <Navbar />
      <Introduction />
    </>
    
  );
}

export default App; 
