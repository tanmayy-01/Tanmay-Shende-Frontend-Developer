import { useState, useEffect } from 'react'
import './App.css'
import Landing from './pages/landing'
import Header from './layout/header/index'
import Footer from './layout/footer/index'
function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 500) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='w-full'>
        {isHeaderVisible && <Header />}
        <Landing />
        <Footer />
      </div>
    </>
  )
}
export default App
