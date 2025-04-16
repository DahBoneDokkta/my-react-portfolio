import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutMe.PNG")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />

                <div className={styles.rightSide}>

                    <div className={styles.introText}>
                        <p>
                            I'm a fullstack developer with a strong interest in backend development, clean code and building intuitive UIs.
                            During my education, I've worked in agile teams, developed REST APIs, and built fullstack apps with C#, .NET and React.
                            I enjoy diving into new technologies, improving my skills, and solving real-world problems through code – recently I've been exploring cybersecurity in my spare time.
                        </p>
                    </div>
                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/cursoricon.png")} alt="Cursor icon" />
                            <div className={styles.aboutItemText}>
                                <h3>Frontend Developer</h3>
                                <p>
                                    I'm a frontend developer with experience in building responsive
                                    and optimized sites
                                </p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/servericon.png")} alt="Server icon" />
                            <div className={styles.aboutItemText}>
                                <h3>Backend Developer</h3>
                                <p>
                                    I have experience developing fast and optimized backend systems
                                    and APIs
                                </p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/cursoricon.png")} alt="UI icon" />
                            <div className={styles.aboutItemText}>
                                <h3>UI Designer</h3>
                                <p>
                                    I designed multiple landing pages
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
