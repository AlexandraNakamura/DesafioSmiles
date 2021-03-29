import styles from '../styles/components/OQueSaoMilhas.module.css';

export function OQueSaoMilhas(){

    return (
        <section className={styles.OQueSaoMilhas}>
            <div className={styles.OQueSaoMilhasContainer}>
                <div className={styles.textOQueSaoMilhas}>
                    <h3>VOCÊ SABE O QUE SÃO MILHAS?</h3>
                    <p>assista agora os vídeos que a Te Levo de Milhas preparou pra você </p>
                </div>
                <div className={styles.videoConteiner}>
                    <img src="img/Video.png" alt="Video Milhas para iniciantes" />  {/* mudar para API de video */}
                    <img src="img/Playlist.png" alt="Playlist do Comece aqui!" /> {/*mudar para API playlist*/}
                </div>
                <div className={styles.buttonContainer}>
                        <button>quero me cadastrar</button>
                    </div>
            </div>
        </section>
    );
}