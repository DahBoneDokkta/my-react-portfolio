import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Simon</h1>
                <p className={styles.description}>I'm a fullstack developer soon graduating from a two-year .NET program at Teknikhögskolan in Gävle.
                    I've gained hands-on experience through two internships and personal projects like this portfolio.
                    I’m passionate about learning, building useful things, and writing clean, maintainable code.
                    Let’s connect!
                </p>
                <a href="mailto:simon.arnar@gmail.com" className={styles.ContactBtn}>
                    Contact Me</a>
            </div>
            <img src={getImageUrl("hero/meInLaptop.PNG")} alt="Hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};
