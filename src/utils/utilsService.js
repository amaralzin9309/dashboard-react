export function isSystemDarkTheme() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
        return true;
    } else {
        return false;
    }
}

export function findTheme() {
    if (localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
    } else {
        return isSystemDarkTheme() ? 'dark' : 'light';
    }
}