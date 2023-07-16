import styles from './Banner.css'


export default function Banner() {
    return (
        <section>

            <img src="./assets/img/entrada-site.png" className="foto-banner" alt="Capa do portfolio" />

            <div className='d-flex justfy-content-center align-items-center'>

                <img src="./assets/img/Foto.svg" className="foto-mobile" alt="Capa do portfolio" />
                <div className='d-flex justfy-content-center align-items-center navegacao'>

                    <a className="navgation" aria-current="page" href="/">Sobre / Skills</a>
                    <a className="navgation" aria-current="page" href="/contact">Contatos</a>
                    <a className="navgation" aria-current="page" href="/projects">Projetos / Depoimentos</a>
                    <a className="navgation" aria-current="page" href="/ebook">Download Ebook</a>

                </div>
            </div>



        </section>
    )
}