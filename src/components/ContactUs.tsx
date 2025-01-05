export default function ContactUs(){
    return(
        <section id="contact">
      <h3>Contact Us</h3>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
    )
}