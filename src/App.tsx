// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  function clickHandler(){
    console.log('click')
  }
  return (
    <>
      <header>
        <h1>BloodLink</h1>
        <nav>
          <a href="#find-blood">Find Blood</a>
          <a href="#register-donor">Register as Donor</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="hero">
        <h2>Saving Lives, One Drop at a Time</h2>
        <button onClick={clickHandler}>Find Blood Now</button>
        <button onClick={clickHandler}>Register as Donor</button>
      </div>

    <section id="find-blood">
      <h3>Find Blood</h3>
      <form>
        <label >Blood Type:</label>
        <select id="blood-type">
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>
        </select>
        <label >Location:</label>
        <input type="text" id="location" placeholder="Enter City or Zip Code" />
        <label>Urgency:</label>
        <select id="urgency">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </section>

    <section id="register-donor">
      <h3>Register as Donor</h3>
      <form>
        <label >Name:</label>
        <input type="text" id="name" placeholder="Full Name" />
        <label >Email:</label>
        <input type="email" id="email" placeholder="Email Address" />
        <label >Location:</label>
        <input type="text" id="location-donor" placeholder="Enter City or Zip Code" />
        <label >Blood Type:</label>
        <select id="blood-type-donor">
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </section>

    <section id="about">
      <h3>About Us</h3>
      <p>We are committed to connecting those in need of blood with donors in their community. Join us to make a difference!</p>
    </section>

    <section id="contact">
      <h3>Contact Us</h3>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>

  <footer>
    <p>&copy; 2024 BloodLink. All Rights Reserved.</p>
  </footer>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

    </>
  )
}

export default App
