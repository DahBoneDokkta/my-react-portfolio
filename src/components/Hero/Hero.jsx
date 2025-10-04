import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Simon</h1>
                <p className={styles.description}>I'm a soon-to-be fullstack .NET developer, graduating from Teknikhögskolan in Gävle.
                    Through two internships and personal projects like this portfolio, I've gained practical experience and a passion for writing clean, useful code.
                    <br />
                    Let’s connect!
                </p>
                <a href="" className={styles.ContactBtn}>
                    Contact Me</a>
            </div>
            <img src={getImageUrl("hero/meInLaptop.PNG")} alt="Hero image of me" className={styles.heroImg} />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};
