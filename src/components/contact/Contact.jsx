import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "./Animation_done.json";
import contactAnimation from "./Animation_Contact.json";
import './contact.css';

const Contact = () => {

    const [state, handleSubmit] = useForm("xpwajzpj");

    /* if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    } */

    return (

        <section className="contact-us">

            <h1 className="title">
                <i className="fa-solid fa-envelope"></i>
                Contact us
            </h1>

            <p className="sub-title">
                Contact us for more information and Get notified when I publish
                something new.
            </p>

            <div style={{ display: "flex", justifyContent: "space-between" }}>

                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="email">Email Address:</label>
                        <input required type="email" name="email" id="email" />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your message:</label>
                        <textarea required name="message" id="message"></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <button className="submit" disabled={state.submitting}>{state.submitting ? "Submitting ..." : "Submit"}</button>

                    {state.succeeded && (
                        <p style={{ marginTop: "1.7rem", display: "flex" }}>
                            <Lottie style={{ height: "36px" }} animationData={doneAnimation} loop={false} />
                            Your Message has been sent successfully
                        </p>
                    )
                    }

                </form>

                <div className='animation'>
                    <Lottie style={{ height:"355px" }} animationData={contactAnimation}/>
                </div>

            </div>

        </section>

    )
}

export default Contact;
