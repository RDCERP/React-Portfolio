import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27982.358726410024!2d-95.98968389999999!3d28.755541750000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8641c366bcd96539%3A0x142eb3f1192ff576!2sSelkirk%20Island!5e0!3m2!1sen!2sus!4v1661271645337!5m2!1sen!2sus"
                    frameborder="0" style="border:0" allowfullscreen>
                </iframe>

            </div>

        </section >
        );
    }
}

export default Contact;
