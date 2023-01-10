import React, { Component } from 'react';
import hero from '../images/hero-bg.jpeg';
import sky from '../images/sky.jpg';
import boardface from '../images/boardface.jpg';
import brain from '../images/brain.jpg';

class Portfolio extends Component {
    render() {
        return (
            <section id="portfolio">
                <div class="flex-row">
                    <div class="section-title">
                        <h2>
                            My Work
                        </h2>
                    </div>
                    <section class="section-content">
                        <a href="https://rdcerp.github.io/run-buddy/">
                            <img src={hero} alt="run-buddy" title="Run-Buddy" class="section-card" /><h2>Run Buddy</h2></a>
                        <section class="section-box">
                            <a href="https://rdcerp.github.io/recipefinder/">
                                <img src={sky} alt="sky" /><h3>Recipe Finder</h3></a>
                            <a href="https://rdcerp.github.io/portfolio/">
                                <img src={boardface} title="Portfolio" /><h3>Portfolio</h3></a>
                            <a href="https://byte-farmers-market.herokuapp.com/">
                                <img src={brain} /><h3>Byte-Farmers-Market</h3></a>
                        </section>
                    </section>
                </div>
            </section>
        );
    }
}

export default Portfolio;