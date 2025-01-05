// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AboutUs from './components/AboutUs.';
import ContactUs from './components/ContactUs';
import FindBloodForm from './components/FindBloodForm';
import Header from './components/Header';
import HeroButton from './components/HeroButton';
import RegisterDonorForm from './components/RegisterDonor';
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0)
 
  return (
    <>
      <div id="center-content">
        <Header />
        <HeroButton />
        <FindBloodForm />
        <RegisterDonorForm />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    </>
  )
}

export default App
