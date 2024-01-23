// components/Footer.tsx
import React from 'react';
import styles from './styles.module.scss'

const Footer: React.FC = () => {
  return <footer className={styles.dashboard}>
      <div>
        <p>&copy; 2024 IT Developers</p>
      </div>
    </footer>;
};

export default Footer;