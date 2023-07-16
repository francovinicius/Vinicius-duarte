import BtnBack from '../../Components/BtnBack'
import styles from './CartoesVisita.css'

export default function CartoesVisita() {
    return (
        <div>
            <h4 className='titulo-hg'>Business Card</h4>
            <div className='container-hg d-flex justify-content-center align-items-center'>

                    <img src="./assets/img/projetos/apresentacao-card.png" className="img-carta-v"
                        alt="Mão Segurando um Celular" />

                <div className='descricao-hg'>

                    <h6>Links de alguns exemplos</h6>
                    <div className='links-hg d-flex'>
                    <a href="https://pedroassuncao-contatos.vercel.app/" target="_blank" className='btn btn-sm btn-hg'>Dr Pedro Assunção</a>
                        <a href="https://ricardinho-contatos.vercel.app/" target="_blank" className='btn  btn-sm btn-hg'>Youtuber e cantor Ricardinho</a>
                        <a href="https://priscila-cruz.vercel.app/" target="_blank" className='btn btn-sm btn-hg'>Pastora e Cantora Priscila Cruz</a>
                    </div>

                    <h6>Descrição</h6>
                    <p>O projeto consiste na criação de um Busines Card interativo utilizando o framework React.js. A ideia central é proporcionar uma forma moderna e eficiente de apresentar a solicitante, fornecendo links para os principais canais de comunicação e informações relevantes.</p>
                    <p>O Busines Card conta com uma breve descrição da solicitante, permitindo aos visitantes obterem uma visão geral dos serviços ou produtos oferecidos. Além disso, são disponibilizados links clicáveis que direcionam para os principais meios de contato, como website, redes sociais e outras plataformas relevantes.</p>
                    <p>Uma das principais funcionalidades do projeto é a exibição em destaque de um vídeo recentemente lançado no YouTube. Essa seção oferece aos visitantes a oportunidade de conhecerem melhor o trabalho da solicitante por meio de um conteúdo visual atraente e atualizado.</p>
                    <p>Adicionalmente, o Busines Card interativo inclui uma seção de contatos, onde os visitantes podem entrar em contato diretamente com a equipe da solicitante por meio de um formulário de envio de e-mail. Essa funcionalidade é implementada utilizando uma API, garantindo um processo de envio seguro e confiável.</p>
                    <p>O projeto utiliza o poderoso framework React.js para garantir uma experiência de usuário fluida e interativa. A integração de tecnologias modernas e o design atraente tornam o Busines Card uma ferramenta eficiente para promover a solicitante e facilitar o contato direto com a equipe.</p>
                    <p>Com o Busines Card interativo, a solicitante possui uma presença digital impactante e personalizada, permitindo que os visitantes encontrem facilmente as informações necessárias e estabeleçam uma comunicação direta e eficiente com a equipe.</p>
                </div>
            </div>

            <BtnBack />
        </div >
    )
}