import BtnBack from '../../Components/BtnBack'
import '../Intranet/Intranet.css'

export default function AcerteNumero() {
    return (
        <div>
            <h4 className='titulo-hg'>Cartões de visita</h4>
            <div className='container-hg d-flex justify-content-center align-items-center'>

                <a href="https://viniciusduarte-blog.vercel.app/" target="_blank" className=''>
                    <img src="./assets/img/projetos/acerte-um-numero-exemple.png" className="img-highlights"
                        alt="Img do Site" />
                </a>

                <div className='descricao-hg'>

                    <h6>Link do jogo (recomenda-se utilizar o google chrome)</h6>
                    <div className='links-hg d-flex'>
                        <a href="https://numero-secreto-kohl.vercel.app/" target="_blank" className='btn  btn-sm btn-hg'>Clique aqui</a>
                    </div>

                    <h6>Descrição</h6>
                    <p>O projeto é um jogo interativo desenvolvido utilizando HTML, CSS e JavaScript, com a integração da API de Reconhecimento de Voz (Web Speech API). O objetivo do jogo é adivinhar um número escolhido aleatoriamente entre 1 e 1000, utilizando comandos de voz para fazer as tentativas.</p>
                    <p>A dinâmica do jogo é simples: o jogador utiliza o microfone do dispositivo para fornecer suas respostas em forma de comando de voz. Ao iniciar o jogo, um número aleatório é selecionado como o número a ser adivinhado. O jogador pode dizer um palpite, e o programa irá interpretar e comparar a resposta com o número escolhido.</p>
                    <p>Através da integração com a Web Speech API, o programa é capaz de reconhecer e interpretar comandos de voz do jogador. Isso permite uma experiência de jogo única e interativa, em que o jogador pode se concentrar em adivinhar o número sem a necessidade de digitar respostas.</p>
                    <p>Além disso, o projeto conta com um design atraente e responsivo, proporcionando uma experiência visual agradável durante o jogo. O layout foi criado com HTML e estilizado com CSS, garantindo uma aparência moderna e intuitiva.</p>
                    <p>O jogo de adivinhação com reconhecimento de voz é uma maneira divertida e inovadora de testar suas habilidades de dedução. Combinando a interação por meio do reconhecimento de voz e a emoção de tentar adivinhar um número, o projeto oferece uma experiência envolvente e desafiadora.</p>
                    <p>Seja você um entusiasta de jogos ou alguém interessado em explorar as possibilidades do reconhecimento de voz, o jogo de adivinhação é uma ótima opção para se divertir e experimentar essa tecnologia promissora.</p>
                </div>
            </div>

            <BtnBack />
        </div >
    )
}