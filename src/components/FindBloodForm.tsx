export default function FindBloodForm(){
    return(
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
    )
}