import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // FOR SMOOTH SCROLLING TO SECTIONS
  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   }
  //   setMenuOpen(false); // Close the menu if it's open
  // };

  const handleLinkClick = (event, id) => {
    event.preventDefault(); // Prevent default anchor link behavior
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false); // Close the menu
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img className={styles.menuBtn}
          src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => handleLinkClick(e, 'experience')}>Experience</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
