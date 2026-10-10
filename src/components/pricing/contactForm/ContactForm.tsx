import './ContactForm.css'

const ContactForm = () => {
  return (
    <form>
        <div className="name">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" required />
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" required />
        </div>
        <div className="email">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required />
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
        </div>
        <textarea name="message" id="message"></textarea>
        <button>SEND</button>
    </form>
  )
}

export default ContactForm