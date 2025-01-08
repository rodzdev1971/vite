import { useState } from 'react'

import './App.scss'
import AboutUs from './components/AboutUs.';
import ContactUs from './components/ContactUs';
import FindBloodForm from './components/FindBloodForm';
import Header from './components/Header';
import HeroButton from './components/HeroButton';
import RegisterDonorForm from './components/RegisterDonor';
import Footer from './components/Footer';
import DashBoard from './Dashboard/Dashboard';

function App() {
  const [dashBoard, setDashBoard] = useState(false)
 
  function showDashBoard(){
    setDashBoard(!dashBoard)
  }

  let content = <div id="center-content">
      <Header />
      <HeroButton />
      <FindBloodForm />
      <RegisterDonorForm />
      <AboutUs />
      <ContactUs />
      <Footer />
</div>



  return (
    <>
      <header>
        <button onClick={showDashBoard}>{!dashBoard ? "show Dashboard" : "Show Main Page"}</button>
      </header>
     {!dashBoard ? content : <DashBoard />}

    </>
  )
}

export default App
