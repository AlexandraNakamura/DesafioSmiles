import styles from '../styles/components/MilhasParaTodos.module.css';

export function MilhasParaTodos(){

    return (
        <section className={styles.milhasParaTodos}>
            <div className={styles.milhasParaTodosContainer}>
                <div className={styles.tituloMilhasParaTodos}>
                    <h3>NA SMILES ACUMULAR MILHAS É PARA TODOS!</h3>
                </div>
                <div className={styles.explicacaoContainer}>
                    <div className={styles.experienciaSmiles}>
                        <img src="img/Icon01.png" alt="Icon Criando experiencia smiles" />
                        <p>nos conte mais sobre você e tenha uma <span>experiência smiles</span></p>
                    </div>
                    <div className={styles.facilAcumular}>
                        <img src="img/Icon02.png" alt="Icon Carrinho acumulando" />
                        <p>te ensinamos de forma <span>fácil</span> como <span>acumular</span> milhas e <span>economizar</span> cada vez mais</p>
                    </div>
                    <div className={styles.personalizadoPerfil}>
                        <img src="img/Icon03.png" alt="Icon Tela de interface Personalizado" />
                        <p>tudo isso através de um menu <span>personalizado</span>, pensado em você e no <span>seu sonho</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
