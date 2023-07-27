import '../Pages.css'
import BtnBack from '../../Components/BtnBack'


export default function MediaTube() {
    return (
        <div className='appJs'>
            <div className='container-hg d-flex justify-content-center align-items-center'>

                <img src="./assets/img/pages/MediaTube.png" className="img-fluid titulo-hg"
                    alt="Mão Segurando um Celular" />

                <div className='descricao-hg'>


                    <h6>Descrição</h6>
                    <p>O MediaTube é um emocionante projeto de aplicativo web que desenvolvi utilizando as tecnologias avançadas do ReactJS e o elegante Material UI 5. Esse aplicativo oferece aos usuários a possibilidade de pesquisar e visualizar vídeos diretamente do YouTube, utilizando a poderosa API do YouTube do Rapid API.</p>

                    <h6>Funcionalidades</h6>
                    <p><strong>O MediaTube oferece as seguintes funcionalidades:</strong></p>
                    <p><strong>Pesquisa de Vídeos: </strong>O MediaTube coloca o poder de busca do YouTube em suas mãos! Com uma barra de pesquisa intuitiva, os usuários podem digitar palavras-chave, temas ou tópicos de interesse e encontrar uma ampla variedade de vídeos relevantes em questão de segundos.</p>
                    <p><strong>Exibição de Resultados: </strong>Os resultados da pesquisa são exibidos em uma lista organizada de vídeos, fornecendo informações essenciais, como título, descrição e o canal associado a cada vídeo. Esses detalhes permitem que os usuários obtenham uma visão geral do conteúdo antes de decidirem qual vídeo assistir.</p>
                    <p><strong>Visualização de Vídeos: </strong>Com apenas um clique, os usuários podem mergulhar no mundo do entretenimento visual, visualizando os vídeos selecionados diretamente no aplicativo. A experiência de visualização é perfeita e contínua, graças à integração perfeita do ReactJS e da API do YouTube.</p>
                    
                    <h6>Como acessar?</h6>
                    <p><strong>Acesse o Projeto: </strong>Para explorar e experimentar o MediaTube, visite o seguinte link: <a className='navegação-hl' href='https://media-tube-sandy.vercel.app/' target='blank'>MediaTube - Acesse aqui!</a></p>
                </div>
            </div>

            <BtnBack />
        </div >
    )
}