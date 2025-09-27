import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Force dark theme by adding dark class to html
document.documentElement.classList.add('dark');
document.body.classList.add('dark');

createRoot(document.getElementById("root")!).render(<App />);
