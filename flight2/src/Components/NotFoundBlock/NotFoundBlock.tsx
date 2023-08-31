import React from 'react';
import styles from './NotFoundBlock.module.css'



const NotFoundBlock: React.FC = () => {
    return (
        <div className={styles.root}>
            <h1 > Not found </h1>
            <p className={styles.descripsion}> Unfortunately this page doesn't stored in our internet store</p>
        </div>

    );
};

export default NotFoundBlock;