import pixellRiverLogo from "./pixell-river-logo.svg"
import styles from "./Header.module.css";

export function Header() {
    return(
        <header className={styles.header}>
            <a href="#">Pixell River Employee Directory</a>
            <img
                className={styles.logo} 
                src={pixellRiverLogo} 
                alt="Pixell River Financial Logo"
            />
        </header>
    )
}