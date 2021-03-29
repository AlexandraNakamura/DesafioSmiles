import styles from '../styles/components/Footer.module.css';

export function Footer(){
    return (
        <footer className={styles.containerFooter}>
            <div className={styles.smilesFooter}>
                <div className={styles.primeiraLinhaFooter}>
                    <div className={styles.tabelaLinkFooter}>
                        <div className={styles.smilerFooterLink}>
                            <div className={styles.colunaLinkFooter}>
                                <a href="https://www.smiles.com.br/programa-smiles">O Programa Smiles</a>
                            </div>
                            <div className={styles.colunaLinkFooter}>
                                        <a href="http://ri.smiles.com.br/">Investidores</a>
                            </div>
                            <div className={styles.colunaLinkFooter}>
                                <a href="https://imprensa.smiles.com.br/" target="_blank">Imprensa</a>
                            </div>
                            <div className={styles.colunaLinkFooter}>
                                <a href="https://www.smiles.com.br/regulamento-do-programa-smiles">Regulamento</a>
                            </div>
                            <div className={styles.colunaLinkFooter}>
                                <a href="https://www.smiles.com.br/mapa-do-site">Mapa do Site</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.tabelaLinkFooterBoxDireita}>
                        <div className={styles.smilerFooterLink}>
                            <div className={styles.colunaLinkAjudaFooter}>
                            <span>
                                <div className={styles.smilesFooterIconsBallon}>
                                <img src="img/IconBallon.png" alt="Logo Smiles" />
                                    <a href="https://www.smiles.com.br/fale-com-a-gente">Ajuda</a>
                                </div>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.smilesPartnersFooter}>
                    <div className={styles.smilesGrid}>
                        <div className={styles.boxGol}>
                        <p className={styles.footerTitleBoxes}><strong>Smiles.</strong> O programa de fidelidade da</p>
                        </div>
                        <div className={styles.boxAirlines}>
                            <p className={styles.footerTitleBoxes}>Companhias aéreas parceiras</p>
                            <ul className={styles.listPartnerFirstLine}>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <ul className={styles.listPartner}>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className={styles.boxApp}>
                            <p className={styles.footerTitleBoxes}> Aplicativos</p>
                        </div>
                    </div>
                </div> */}
            </div>
            

            <div className={styles.smilesBottomUltimaLinha}>
                <div className={styles.smilesBottomUltimaLinhaContainer}>
                    <div className={styles.smilesLogo}>
                        <img src="img/Logo.png" alt="Logo Smiles" /> 
                    </div>
                    <div className={styles.smileEnderecoBottom}>
                        <p><strong>SMILES FIDELIDADE S.A. </strong>CNPJ/MF 05.730.375/0001-20</p>
                        <p>Alameda Rio Negro, 585 - 2º andar Bloco B - Barueri/SP CEP: 06454-000</p>
                    </div>
                    <div className={styles.redeSocialBottom}>
                        <ul className={styles.socialListBottom}>
                            <li><a href="https://www.linkedin.com/company/smiles/?originalSubdomain=br" rel="nofollow" target="_blank"> <img src="img/IconLI.png" alt="Logo LinkedIn" /></a></li>
                            <li><a class="smiles-footer-icons facebook" href="https://www.facebook.com/smilesoficial" rel="nofollow" target="_blank"><img src="img/IconFace.png" alt="Logo FaceBook" /> </a></li>
                            <li><a class="smiles-footer-icons twitter" href="http://twitter.com/smilesoficial" rel="nofollow" target="_blank"><img src="img/IconTwitter.png" alt="Logo Twitter" /> </a></li>
                            <li><a class="smiles-footer-icons instagram" href="https://www.instagram.com/smiles.oficial" rel="nofollow" target="_blank"><img src="img/IconInsta.png" alt="Logo Instagram" /> </a></li>
                            <li><a class="smiles-footer-icons spotify" href="https://open.spotify.com/user/nwlniija6bhxjqdd2iusmzu9g" rel="nofollow" target="_blank"><img src="img/IconSpot.png" alt="Logo Spotify" /></a></li>
                            <li><a class="smiles-footer-icons youtube" href="https://www.youtube.com/channel/UC59HK2HLcg5mtdePe4uCpVQ" rel="nofollow" target="_blank"><img src="img/IconYT.png" alt="Logo Youtube" /></a></li>
                        </ul>
                    </div>
                    <div className={styles.smilesFooterABEMF}>
                    <p>Empresa associada à</p>
                    <img src="img/Associada.png" alt="Logo ABEMF" />
                    </div>
                </div>

            </div>
        </footer>
    );
}

				
				
				

				
							
							
							

							
							