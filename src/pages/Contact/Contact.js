import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { disabledButton, doubleStack, pageHeaderClickable, stack, submitButton, textContainer, textField } from '../../components/common/ClassNames';
import { ServiceID, TemplateID, UserID } from './secrets';
import Collapse from '../../components/common/Collapse/Collapse';

function Contact() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("");

    const formRef = useRef();

    const sendEmail = (event) => {
        event.preventDefault();  

        emailjs.sendForm(ServiceID,  TemplateID,  formRef.current, UserID)
        .then((result) => {
            alert("Message sent!");
            window.location.reload(); 
        }, (error) => {
            alert("Something went wrong!");
            window.location.reload();
        });
    };

    const content = [
            <input type="text" name="from_name" placeholder='Name' onChange={(event) => setName(event.target.value)} value={name} className={textField} required/>,
            <input type="email" name="from_email" placeholder='Email' onChange={(event) => setEmail(event.target.value)} value={email} className={textField} required/>,
            <input type="text" name="subject" placeholder='Subject' onChange={(event) => setSubject(event.target.value)} value={subject} className={textField} required/>,
            <textarea name="html_message" placeholder='Message' onChange={(event) => setMessage(event.target.value)} value={message} className={textField} required/>,
            <button  className={submitButton} value="Send">Send</button>
    ]


    return (
        <form className={`${stack} `} ref={formRef} onSubmit={sendEmail}>
            <Collapse open={true} trigger={<p className={pageHeaderClickable}>Contact</p>} content={content} />
        </form>
    );
}

export default Contact;