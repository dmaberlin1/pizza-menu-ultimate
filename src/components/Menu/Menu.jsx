import React from 'react';
import styles from './Menu.module.css'
import Pizza from "../Pizza/Pizza";
import pizzaData from '../../data'

const Menu = () => {
    const pizzas=pizzaData
    // const pizzas=[]
    const pizzasLength=pizzas.length



    return (
        <main className={styles.menu}>
            {pizzasLength >0 ? <h2>Our Menu</h2> :<h2>We're still working on our menu</h2>}
            {pizzasLength >0 && <ul className={styles.menu__pizzas}>
            {pizzaData.map((pizza)=>{
                return (
                    <Pizza key={pizza.name} price={pizza.price} soldOut={pizza.soldOut}  info={pizza.ingredients} img={pizza.photoName} title={pizza.name}></Pizza>)

            })}
            </ul>
            }
            {!pizzas && <h1 style={{color:"rgba(64, 161, 228, 0.3)",marginTop:'15rem',fontSize:'3rem'}}>Pizzas not enough, sorry. Try Again Later</h1>}
        </main>
    );
};

export default Menu;
