import React, { useState } from 'react'
import styled from 'styled-components'
import Title from '../Components/Title'
import { InnerLayout, MainLayout } from '../Styles/Layout'
import Button from '../Components/Button'
import ContactItem from '../Components/ContactItem'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { db } from '../firebase';

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('mail').add({
            name: name,
            email: email,
            subject: subject,
            message: message
        })
            .then(() => {
                setName('')
                setEmail('')
                setSubject('')
                setMessage('')
                alert("Thank you for contacting. Your message has been sent successfully.");
            })
            .catch((err) => {
                alert(err.message);
            });
        console.log("Adding data", name, email)
    };

    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactMain>
                <InnerLayout className='contact-section'>
                    <div className="left-content">
                        <div className="contact-title">
                            <h4>Get In Touch</h4>
                        </div>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-field">
                                <label htmlFor="name">Enter Your Name</label>
                                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-field">
                                <label htmlFor="email">Enter Your Email</label>
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-field">
                                <label htmlFor="subject">Enter Your Subject</label>
                                <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                            </div>
                            <div className="form-field">
                                <label htmlFor="text-area">Enter Your Message</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>
                            <div className="form-field f-button">
                                <Button title="Send Email" />
                            </div>
                        </form>
                    </div>
                    <div className="right-content">
                        <a href="tel:+917715050153">
                            <ContactItem
                                icon={<PhoneIcon />}
                                title={"Phone"}
                                contact={'+91 7715-050-153'}
                            />
                        </a>

                        <a href="mailto: faizaanlambe@gmail.com">
                            <ContactItem
                                icon={<EmailIcon />}
                                title={"Email"}
                                contact={'faizaanlambe1998@gmail.com'}
                            />
                        </a>

                        <a href="https://bit.ly/38jz8EB">
                            <ContactItem
                                icon={<LocationOnIcon />}
                                title={"Location"}
                                contact={'Malad (East), Mumbai - 400097, India'}
                            />
                        </a>
                    </div>
                </InnerLayout>
            </ContactMain>
        </MainLayout>

    )
}

const ContactMain = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 1300px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }

        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1f);
            @media screen and (max-width:640px){
                width: 70%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem, 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -22px;
                    display: inline-block;
                    background-color: var(--background-dark-color) ;
                    padding: 0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 40px;
                    padding: 0.5rem 15px;
                    width: 100%;
                    color: inherit;
                    @media screen and (max-width:640px){
                        width: 90%;
                    }
                }
                textarea{
                    background: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                    @media screen and (max-width:640px){
                        width: 90%;
                    }
                }
            }
        }
    }
`

export default Contact
