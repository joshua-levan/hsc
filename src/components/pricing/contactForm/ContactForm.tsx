import { useRef } from 'react';
import emailjs from '@emailjs/browser';


import './ContactForm.css'

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
        .sendForm('service_z59wwwh', 'template_20d071w', form.current!, {
            publicKey: 'r82Pf0B6j1N7Buqt_',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            form.current?.reset();
            alert('Your message has been sent! We will respond ASAP')
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

  return (
    <form aria-label="Contact Home Studio Consultants" ref={form} onSubmit={sendEmail}>
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