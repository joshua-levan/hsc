import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


import './ContactForm.css'

const ContactForm = () => {
    const [isSent, setIsSent] = useState(false)
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
        .sendForm('service_0lf49i4', 'template_kemj3v7', form.current!, {
            publicKey: 'K1TPPVfL7ja4ukT8j',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            form.current?.reset();
            setIsSent(true)
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
            <p>{isSent ?"**Your message has been sent successfully! We will be in touch shortly" : ''}</p>
            <button className='form-submit' type="submit">SEND</button>
        </div>
    </form>
  )
}

export default ContactForm