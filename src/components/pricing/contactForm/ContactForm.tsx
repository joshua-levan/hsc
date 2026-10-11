import './ContactForm.css'

const ContactForm = () => {
  return (
    <form aria-label="Contact Home Studio Consultants">
        <div className="name">
            <div>
                <label htmlFor="first-name">First Name</label>
                <input
                type="text"
                id="first-name"
                name="first-name"
                autoComplete="given-name"
                required
                />
            </div>
            <div>
                <label htmlFor="last-name">Last Name</label>
                <input
                type="text"
                id="last-name"
                name="last-name"
                autoComplete="family-name"
                required
                />
            </div>
        </div>
        <div className="email">
            <div>
                <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                />
            </div>
            <div>
                <label htmlFor="subject">Subject</label>
                <input
                type="text"
                id="subject"
                name="subject"
                required
            />
            </div>
        </div>
        <label htmlFor="message">Message</label>
        <textarea
        name="message"
        id="message"
        required
        />
        <div className="submit-container">
            <button className='form-submit' type="submit">SEND</button>
        </div>
    </form>
  )
}

export default ContactForm