import { createRoot } from 'react-dom/client'
import  Header from './components/Header.jsx'
import  Main from './components/Main.jsx'
import  Footer from './components/Footer.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <>
        <Header />
        <Main />
        <Footer />
    </>
)
