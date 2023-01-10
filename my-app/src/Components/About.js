import React, { Component } from 'react';
import profile from '../images/profile.jpg';

class About extends Component {
    render() {
        return (
            <section id="about-me">
                <div class="flex-row">
                    <div class="section-title">
                        <h2>
                            About Me
                        </h2>
                    </div>
                    <div class="section-content sc-about">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem voluptatibus vitae eos possimus libero distinctio, doloremque nulla expedita repellendus? Corrupti necessitatibus dolor nobis perspiciatis doloremque animi doloribus vel quis optio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem voluptatibus vitae eos possimus libero distinctio, doloremque nulla expedita repellendus? Corrupti necessitatibus dolor nobis perspiciatis doloremque animi doloribus vel quis optio?
                        </p>
                        <img src={profile} class="profile-photo" alt="profile photo" />
                    </div>
                </div>
            </section>
        );
    }
}

export default About;





