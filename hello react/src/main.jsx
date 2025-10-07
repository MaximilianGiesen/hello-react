import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
    <main>
        <img src={new URL('./assets/react-logo.png', import.meta.url).href} alt="logo" width={40}/>
        <h1>Fun facts about react</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
)
