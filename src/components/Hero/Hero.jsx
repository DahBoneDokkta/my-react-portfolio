import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Simon</h1>
                <p className={styles.description}>With two internships at Knowit and several hands-on projects, I build pragmatic, maintainable solutions. I work across backend and frontend, SQL Server and CI/CD pipelines, and I have practical experience with network analysis and lab environments.
                    Let’s connect - I’m open to roles in system operations, backend development and security-minded engineering.
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
