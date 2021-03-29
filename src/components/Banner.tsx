import styles from '../styles/components/Banner.module.css';

export function Banner(){

    return (
        <section className={styles.banner}>
            <div className={styles.containerBanner}>
                <div className={styles.inforContainer}>
                    <img src="img/TituloLogo.png" alt="Logo Acumule Smiles" />
                    <div className={styles.textContainer}>
                        <h2>Aprenda a acumular milhas com a Smiles!</h2>
                        <p>te ensinamos a acumular milhas de forma fácil pra economizar nas suas próximas viagens e compras. <span>#milhasparatodos</span></p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button>quero me cadastrar</button>
                        <button>já tenho cadastro </button>
                    </div>
                </div>
            </div>
            
        </section>
    );
}
