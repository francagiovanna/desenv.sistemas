import React from 'react'
import styles from './Footer.module.css'

export const Footer = ({name}) => {
    return (
        <footer className={styles.footer} >
            <h1 className={styles.name}> Feito por {name}</h1>
        </footer>
    )
}

