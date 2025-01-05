export default function RegisterDonorForm() {
    return (
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
    )
}