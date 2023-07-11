import React from "react";
import ReactDOM from 'react-dom/client'
import pizzaData from './data'
import Pizza from "./components/Pizza/Pizza";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './index.css'
import Menu from "./components/Menu/Menu";
function App() {
    return (
        <div className={'container'}>
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    )
}



//
// React v18
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>
)

//React before 18
// React.render(<App/>)