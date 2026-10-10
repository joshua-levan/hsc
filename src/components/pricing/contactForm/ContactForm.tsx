import './ContactForm.css'

const ContactForm = () => {
  return (
    <form>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" name="first-name" required />
        <label htmlFor="name">Last Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="name">Email</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="name">Subject</label>
        <input type="text" id="name" name="name" required />
    </form>
  )
}

export default ContactForm