import React from 'react';
import './index.scss';
import { Loader } from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import Resume from "../../assets/Resume/Ritik Resume 2022.pdf";
import { saveAs } from "file-saver";
import { Button } from "reactstrap"
const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();
    useEffect(() => {
        const myFunc = () => { setTimeout(() => { setLetterClass('text-animate-hover') }, 4000) }
        myFunc();
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        const serviceID = process.env.REACT_APP_SERVICE_ID;
        const templateID = process.env.REACT_APP_TEMPLATE_ID;
        const public_key = process.env.REACT_APP_PUBLIC_KEY;
        emailjs
            .sendForm(
                serviceID,
                templateID,
                refForm.current,
                public_key
            )
            .then(
                () => {
                    alert('Thanks for your feedback. It is surely valuable for me')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }
    const downloadResume = () => {
        saveAs({ Resume }, "Resume.pdf");
        console.log("Resume")

    }
    return (<>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} indx={15} />
                </h1>

                <p>
                    I am interested in freelance opportunities - especially ambitious or
                    large projects. However, if you have other request or question,
                    don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type="email" name="email" placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder='Subject'
                                    type="text"
                                    name="subject"
                                    required />
                            </li>
                            <li>
                                <textarea placeholder='Message'
                                    name="message"
                                    required ></textarea>
                            </li>
                            <li>
                                <input type="submit"
                                    className='flat-button'
                                    value="SEND" />
                            </li>
                        </ul>
                    </form>
                    {/* <Button className='resume' onClick={downloadResume}>Download Resume</Button> */}
                </div>
            </div>
        </div>
        <Loader type="pacman" />
    </>)
}


export default Contact;