import React, { Component } from "react";


class Contact extends Component {
    render() {
        return (
            <section id="contact" class="contact">
                <div class="flex-row">
                    <h2 class="section-title secondary-border">
                        Contact
                    </h2>
                </div>

                <div class="contact-info">
                    <div>
                        <h3>Ryan Carroll</h3>
                        <p>
                            Solutions a click away
                        </p>

                        <address>
                            Selkirk Isle <br />
                            Matagorda, Tx <br />
                            77417<br />
                            P: 832.727.5199 (832.727.5199)<br />
                            E: <a href=" rdcerp@gmail.com">rdcerp@gmail.com"</a>
                        </address>

                    </div>

                    <div class="contact-form">
                        <h3>Message today!</h3>
                        <form>
                            <label for="contact-name">Your Name</label>
                            <input type="text" id="contact-name" placeholder="Your Name" />

                            <label for="contact-message">Message</label>
                            <textarea id="contact-message" placeholder="Message"></textarea>

                            <button type="submit">Submit</button>
                        </form>
                    </div>



                </div>

            </section >
        );
    }
}

export default Contact;


