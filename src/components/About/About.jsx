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
                                    I enjoy building responsive, accessible interfaces using React.
                                    I focus on reusable components, clean structure, and user-friendly layouts.
                                </p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/servericon.png")} alt="Server icon" />
                            <div className={styles.aboutItemText}>
                                <h3>Backend Developer</h3>
                                <p>
                                    I've worked with C# and .NET to build APIs and backend logic.
                                    I care about writing maintainable code and building solid architectures
                                </p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/cursoricon.png")} alt="UI icon" />
                            <div className={styles.aboutItemText}>
                                <h3>Tech Explorer</h3>
                                <p>
                                    I'm always curious to learn new things - lately I've explored cybersecurity,
                                    dev tools, and architecture patterns
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
