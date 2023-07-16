import './Skills.css'

export default function Skills() {
    return (
        <section className="meus-skills" id="skills">


            <h2 className="texto">Skills</h2>

            <div className="accordion accordion-flush border rounded-2 p-1" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                            <div>
                                <i><img src="../assets/img/icon/programacao.png" alt="caneca" /></i>
                                <span className="topico-skill">Technologies</span>
                            </div>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li>
                                    <div className="d-flex flex-column">
                                        <h6 className="titulo-skill">Frameworks and Libraries:</h6>
                                        <span className="mensagem-skill">React.js, Bootstrap.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex flex-column">
                                        <h6 className="titulo-skill">Languages:</h6>
                                        <span className="mensagem-skill">JavaScript.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex flex-column">
                                        <h6 className="titulo-skill">CSS Preprocessors</h6>
                                        <span className="mensagem-skill">SASS.</span>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <div>
                                <i><img src="../assets/img/icon/tela-de-computador.png" alt="caneca" /></i>
                                <span className="topico-skill">Tools</span>
                            </div>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li>
                                    <div className="d-flex flex-column">
                                        <h6 className="titulo-skill">Integrated Development Environment:</h6>
                                        <span className="mensagem-skill">Visual Studio Code, IntelliJ, Sublime Text.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex flex-column">
                                        <h6 className="titulo-skill">Package Management:</h6>
                                        <span className="mensagem-skill">Yarn (Node.js).</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex flex-column">
                                        <h6 className="titulo-skill">Verson Control:</h6>
                                        <span className="mensagem-skill">Git, Github.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex flex-column">
                                        <h6 className="titulo-skill">Web Design:</h6>
                                        <span className="mensagem-skill">Figma.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <div>
                                <i><img src="../assets/img/icon/traducao.png" alt="caneca" /></i>
                                <span className="topico-skill">Languages</span>
                            </div>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul>
                                <li>
                                    <div className="d-flex flex-column">
                                        <h6 className="titulo-skill">Portuguease:</h6>
                                        <span className="mensagem-skill">Native.</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex flex-column">
                                        <h6 className="titulo-skill">English:</h6>
                                        <span className="mensagem-skill">Intermediary.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
