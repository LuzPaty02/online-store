import { useEffect, useState } from 'react';
export const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        document.documentElement.setAttribute('data-theme', newMode ?
            'dark' : '');
        localStorage.setItem('darkMode', JSON.stringify(newMode));
    }

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode');
        const preferesDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const initialMode = savedMode ? JSON.parse(savedMode) : preferesDark;
        setIsDarkMode(initialMode);
        document.documentElement.setAttribute('data-theme', initialMode ?
            'dark' : '');
    }, []);

    return (
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? (
                <>
                    ☀ Light Mode
                </>
            ) : (
                <>
                    🌙 Dark Mode
                </>
            )}
        </button>
    );
}