// app/componen/Navbar.js
import Link from 'next/link';
import styles from '../componen/stylemodule/cardNavbar.module.css'; // Gaya untuk Navbar

const Navbar = () => {
    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.navbar__container}>
                    <Link href="/" className={styles.navbar__brand}>
                        MyWebsite
                    </Link>
                    <div className={styles.navbar__buttons}>
                        <Link href="/info/home">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_primary}`}>
                                Home
                            </button>
                        </Link>
                        <Link href="/info/about">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_secondary}`}>
                                About
                            </button>
                        </Link>
                        <Link href="/info/kontak">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_success}`}>
                                Contact
                            </button>
                        </Link>
                        <Link href="/info/faq">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_danger}`}>
                                FAQ
                            </button>
                        </Link>
                        <Link href="/info/services">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_warning}`}>
                                Services
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
            <br />
            <nav className={styles.navbar2}>
                <div className={styles.navbar__container}>
                    <Link href="/" className={styles.navbar__brand}>
                        MyWebsite
                    </Link>
                    <div className={styles.navbar__buttons}>
                        <Link href="/info/home">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_primary}`}>
                                Home
                            </button>
                        </Link>
                        <Link href="/info/about">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_secondary}`}>
                                About
                            </button>
                        </Link>
                        <Link href="/info/kontak">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_success}`}>
                                Contact
                            </button>
                        </Link>
                        <Link href="/info/faq">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_danger}`}>
                                FAQ
                            </button>
                        </Link>
                        <Link href="/info/services">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_warning}`}>
                                Services
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
            <br />
            <nav className={styles.navbar3}>
                <div className={styles.navbar__container}>
                    <Link href="/" className={styles.navbar__brand}>
                        MyWebsite
                    </Link>
                    <div className={styles.navbar__buttons}>
                        <Link href="/info/home">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_primary}`}>
                                Home
                            </button>
                        </Link>
                        <Link href="/info/about">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_secondary}`}>
                                About
                            </button>
                        </Link>
                        <Link href="/info/kontak">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_success}`}>
                                Contact
                            </button>
                        </Link>
                        <Link href="/info/faq">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_danger}`}>
                                FAQ
                            </button>
                        </Link>
                        <Link href="/info/services">
                            <button className={`${styles.navbar__button} ${styles.navbar__button_warning}`}>
                                Services
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
