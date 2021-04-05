import styles from '../styles/components/GanheMilhas.module.css';

export function GanheMilhas(){

    return (
        <section className={styles.GanheMilhas}>
            <div className={styles.GanheMilhasContainer}>
                <div className={styles.GanheMilhasTema}>
                    <h3>GANHE MILHAS COMPRANDO NAS SUAS MARCAS PREFERIDAS</h3>
                </div>
                <div className={styles.GanheMilhasExplicacao}>
                    <div className={styles.GanheMilhasComo}>
                        <p>Adicione o Smiles ao seu navegador e não perca mais a chance de ganhar milhas nas suas compras online!</p>
                        <div className={styles.GanheMilhasButton}>
                        <button><img src="img/Icon 17.png" alt="Logo Google Chrome" />Adicionar ao Chrome</button>
                        </div>
                    </div>
                    <div className={styles.GanheMilhasImagem}>
                        <img src="img/SiteParceiros.png" alt="Logo Google Chrome" />
                    </div>
                </div>
            </div>
        </section>
    );
}