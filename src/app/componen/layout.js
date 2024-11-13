// components/Layout.js
import styles from './stylemodule/layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <nav>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="container">Profil</a></li>
                        <li><a href="navbar">Kontak</a></li>
                        <li><a href="button">Login</a></li>
                        <li><a href="#">Card</a></li>
                    </ul>
                </nav>
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
