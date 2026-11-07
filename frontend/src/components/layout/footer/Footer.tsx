import style from "./Footer.module.css";

export function Footer() {
    return(
        <footer className={style.footer}>
            <p>
                Copyright Pixell River Financial {new Date().getFullYear()}
            </p>
        </footer>
    )
}