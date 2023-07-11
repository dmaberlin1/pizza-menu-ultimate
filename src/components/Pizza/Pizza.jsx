import React from "react";
import styles from './Pizza.module.css'



function Pizza({img,price,soldOut,title,info}) {
    if(soldOut) return (
        <li className={`${styles.pizza} ${styles.soldOut}`}>
            <img src={img} alt={'spinaci'}/>
            <h3>{title}</h3>
            <p>{info}</p>
            {/*<p>price: {price}$</p>*/}
            <p>Sold out</p>
        </li>
    )
    return(
        <li className={styles.pizza}>
            <img src={img} alt={'spinaci'}/>
            <h3>{title}</h3>
            <p>{info}</p>
            <p>price: {price}$</p>
            <p>{soldOut}</p>
        </li>
    )
}

export default Pizza;