import { createRoot } from 'react-dom/client'
import  Header from './components/header.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <main>
        <img src={new URL('./assets/react.svg', import.meta.url).href} alt="logo" width={40}/>
        <Header />
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
)
