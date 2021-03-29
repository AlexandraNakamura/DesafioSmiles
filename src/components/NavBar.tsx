import styles from '../styles/components/NavBar.module.css';

export function NavBar(){

    return (
        <header className= {styles.navBar}>
        <div className= {styles.containerNavBar}>
            <img src="img/Logo.png" alt="Logo Smiles" />
        </div>
        </header>
    );
}