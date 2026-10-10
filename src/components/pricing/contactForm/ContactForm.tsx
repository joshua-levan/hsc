import './ContactForm.css'

const ContactForm = () => {
  return (
    <form>
        <div className="name">
            <div>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" required />
            </div>
            <div>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" required />
            </div>
        </div>
        <div className="email">
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
            </div>
        </div>
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
        <button>SEND</button>
    </form>
  )
}

export default ContactForm