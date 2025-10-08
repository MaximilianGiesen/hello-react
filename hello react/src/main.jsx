import { createRoot } from 'react-dom/client'
import  Header from './components/header.jsx'
import  List from './components/list.jsx'
import  Footer from './components/footer.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <>
        <Header />
        <List />
        <Footer />
    </>
)
