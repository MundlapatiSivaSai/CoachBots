import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Get the element where the React app will be mounted.
const container = document.getElementById('root');

if (container !== null) {
    const root = createRoot(container);  // Only create root if container is not null

    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
} else {
    console.error("Failed to find the root element.");
}
