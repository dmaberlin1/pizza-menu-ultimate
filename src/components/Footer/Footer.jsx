import React, {useEffect, useState} from 'react';
import styles from './Footer.module.css'
import Order from "../Order/Order";

const Footer = () => {
    // const hourNow = new Date().getHours();
    // const timelocale=new Date().toLocaleTimeString()
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [isOpen, setIsOpen] = useState(false);
    const openHour = 9;
    const closeHour = 23;
    // const isOpen = hourNow >= openHour && hourNow <= closeHour

    useEffect(()=>{
        const updateClock=()=>{
            const currentTime=new Date()
            const currentHour=currentTime.getHours()
            const currentTimeString=currentTime.toLocaleTimeString()

            setTime(currentTimeString)
            setIsOpen(currentHour>=openHour && currentHour <= closeHour)
        }
        // Обновление времени и состояния открытия/закрытия каждую секунду
        const timer=setInterval(updateClock,1000)

        //Очистка интервала при размонтировании компонента
        return ()=>{
            clearInterval(timer);
        }

    },[])



    return (
        <>
        <footer className={styles.footer}>
            <span>{time}</span>
            {/*{isOpen && <p>We're currently open</p>}*/}
            {/*{!isOpen && <p>Sorry we're closed</p>}*/}
            <Order isOpen={isOpen}></Order>
        </footer>
            <div className={styles.border}></div>

        </>
    )
};

export default Footer;
