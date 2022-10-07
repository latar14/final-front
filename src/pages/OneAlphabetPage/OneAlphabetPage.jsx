import React from 'react';
import styles from './oneAlphabetPage.module.css'

const OneAlphabetPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageField}>
                <h1>1213</h1>
                <img src='' alt='123'/>
            </div>
            <div  className={styles.textField}>
                <h1>category.name</h1>
                <p> category.description </p>
            </div> 
            <div className={styles.contentField}>

            </div>
        </div>
    );
};

export default OneAlphabetPage;