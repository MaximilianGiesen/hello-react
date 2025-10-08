import { createRoot } from 'react-dom/client'
import  Header from './components/header.jsx'
import  List from './components/list.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <>
        <Header />
        <List />
    </>
)
