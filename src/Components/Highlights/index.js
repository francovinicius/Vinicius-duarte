import styles from "./Highlights.css"

export default function Highlights() {
    return (
        <div className="highlights-div">

            <h3 className="meus-projetos">Destaques</h3>

            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">

                        <div className="div-hg-mobile">
                            <div className="div-hg-II d-flex flex-column justify-content-center align-items-center">
                                <h6>Intranet - Sarton</h6>
                                <div className="d-flex flex-column">
                                    <img src="./assets/img/projetos/intranet-s.png" className="img-hg" alt="Img do Site" />
                                    <p>Intranet Sarton: Projeto React com React Router DOM e Bootstrap para compartilhamento de informações e recursos específicos entre setores da organização, melhorando a comunicação interna e o acesso a informações essenciais.</p>
                                </div>
                                <a className="btn btn-sm btn-primary" href="/projects_intranet">Details
                                </a>
                            </div>
                            <div>

                            </div>
                        </div>

                        <div className="div-hg-desktop">
                            <div className="div-hg-II d-flex flex-column justify-content-center align-items-center">
                                <h6>Intranet - Sarton</h6>
                                <div className="d-flex">
                                    <img src="./assets/img/projetos/intranet-s.png" className="img-hg" alt="Img do Site" />
                                    <p>Intranet Sarton: Projeto React com React Router DOM e Bootstrap para compartilhamento de informações e recursos específicos entre setores da organização, melhorando a comunicação interna e o acesso a informações essenciais.</p>
                                </div>
                                <a className="btn btn-sm btn-primary" href="/projects_intranet">Details
                                </a>
                            </div>
                            <div>

                            </div>
                        </div>

                    </div>
                    <div class="carousel-item">
                        <div className="div-hg-mobile">
                            <div className="div-hg-II d-flex flex-column justify-content-center align-items-center">
                                <h6>Business Card</h6>
                                <div className="d-flex flex-column">
                                    <img src="./assets/img/projetos/pedro-assuncao.png" className="img-hg" alt="Img do Site" />
                                    <p>O projeto consiste na criação de um Busines Card interativo utilizando o framework React.js. A ideia central é proporcionar uma forma moderna e eficiente de apresentar a solicitante, fornecendo links para os principais canais de comunicação e informações relevantes.</p>
                                </div>
                                <a className="btn btn-sm btn-primary" href="/projects_cartoes-de-visita">Details
                                </a>
                            </div>
                            <div>

                            </div>
                        </div>

                        <div className="div-hg-desktop">
                            <div className="div-hg-II d-flex flex-column justify-content-center align-items-center">
                                <h6>Business Card</h6>
                                <div className="d-flex">
                                    <img src="./assets/img/projetos/pedro-assuncao.png" className="img-hg" alt="Img do Site" />
                                    <p>O projeto consiste na criação de um Business Card interativo utilizando o framework React.js. A ideia central é proporcionar uma forma moderna e eficiente de apresentar a solicitante, fornecendo links para os principais canais de comunicação e informações relevantes.</p>
                                </div>
                                <a className="btn btn-sm btn-primary" href="/projects_cartoes-de-visita">Details
                                </a>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                    <div className="div-hg-mobile">
                            <div className="div-hg-II d-flex flex-column justify-content-center align-items-center">
                                <h6>Jogo de Adivinhação com Reconhecimento de Voz</h6>
                                <div className="d-flex flex-column">
                                    <img src="./assets/img/projetos/acerte-um-numero.png" className="img-hg" alt="Img do Site" />
                                    <p>O projeto é um jogo interativo desenvolvido utilizando HTML, CSS e JavaScript, com a integração da API de Reconhecimento de Voz (Web Speech API). O objetivo do jogo é adivinhar um número escolhido aleatoriamente entre 1 e 1000, utilizando comandos de voz para fazer as tentativas.</p>
                                </div>
                                <a className="btn btn-sm btn-primary" href="/projects_intranet">Details
                                </a>
                            </div>
                            <div>

                            </div>
                        </div>

                        <div className="div-hg-desktop">
                            <div className="div-hg-II d-flex flex-column justify-content-center align-items-center">
                                <h6>Jogo de Adivinhação com Reconhecimento de Voz</h6>
                                <div className="d-flex">
                                    <img src="./assets/img/projetos/acerte-um-numero.png" className="img-hg" alt="Img do Site" />
                                    <p>O projeto é um jogo interativo desenvolvido utilizando HTML, CSS e JavaScript, com a integração da API de Reconhecimento de Voz (Web Speech API). O objetivo do jogo é adivinhar um número escolhido aleatoriamente entre 1 e 1000, utilizando comandos de voz para fazer as tentativas.</p>
                                </div>
                                <a className="btn btn-sm btn-primary" href="/projects_intranet">Details
                                </a>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}