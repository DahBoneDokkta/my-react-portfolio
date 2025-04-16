import React from 'react'
import styles from './Experience.module.css'
import skills from '../../data/skills.json'
import history from '../../data/history.json'
import { getImageUrl } from '../../utils'

export const Experience = () => {
    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>

                {/* Icons */}
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Experiences */}
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img
                                    src={getImageUrl(historyItem.imageSrc)}
                                    alt={`${historyItem.organization} Logo`}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>{historyItem.experiences.map((experience, id) => {
                                        return <li key={id}>{experience}</li>
                                    })}</ul>
                                </div>
                            </li>
                        );
                    })
                    }
                </ul>
                {/* What Drives Me */}
                {/* <div className={styles.experienceNote}>
                    <h3>🧭 What Drives Me</h3>
                    <p>
                        I want to build software that helps people and makes a difference.
                        I believe in staying grounded and balanced – both in life and in code.
                        As a yoga teacher and someone who values health and personal growth,
                        I approach development with focus, curiosity and care.
                        My passion for cybersecurity is part of that – understanding threats
                        so I can help protect others, contribute to a safer digital world,
                        and support the people and systems that matter.
                    </p>
                </div> */}
            </div>
        </section>
    );
}
