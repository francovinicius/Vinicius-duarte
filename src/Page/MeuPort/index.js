import BtnBack from '../../Components/BtnBack'

export default function MeuPort() {
    return (
        <div className='appJs'>
            <div className='container-hg d-flex justify-content-center align-items-center'>

                <img src="./assets/img/pages/Meu-port.svg" className="img-fluid titulo-hg"
                    alt="Mão Segurando um Celular" />

                <div className='descricao-hg'>


                    <h6>Descrição</h6>
                    <p>Este projeto consiste na criação de um portfólio desenvolvido por Vinicius Duarte, tem por finalidade a apresentação pessoal e profissional.</p>

                    <h6>Seções</h6>
                    <p><strong>Página Inicial:</strong> A página inicial apresenta uma introdução breve e atraente sobre Vinicius Duarte, destacando suas principais habilidades e áreas de expertise.</p>
                    <p><strong>Sobre Mim: </strong>Nesta seção, compartilho informações detalhadas sobre minha formação acadêmica, experiências profissionais e habilidades técnicas. Além disso, descrevo minha paixão pela área de desenvolvimento web e meu compromisso em entregar soluções de alta qualidade.</p>
                    <p><strong>Projetos: </strong>A seção de projetos destaca alguns dos trabalhos realizados por Vinicius Duarte. Cada projeto é apresentado com uma breve descrição, capturas de tela e links para acessá-los. Isso permite que os visitantes conheçam as habilidades e competências de Vinicius através dos projetos que ele realizou.</p>
                    <p><strong>Contato: </strong>Na seção de contato, Vinicius disponibiliza informações para que os visitantes possam entrar em contato com ele. É fornecido um formulário de contato que permite que as pessoas enviem mensagens diretamente para ele. Além disso, Vinicius também compartilha seus perfis nas redes sociais para facilitar a interação e conexão.</p>
                    <p><strong>Ebook: </strong>Nesta seção, Vinicius disponibiliza um ebook gratuito sobre um tópico relevante em desenvolvimento web. Os visitantes podem baixar o ebook fornecendo seu endereço de e-mail. Isso permite que Vinicius compartilhe conhecimentos e se conecte com potenciais clientes e seguidores.</p>

                </div>
            </div>

            <BtnBack />
        </div >
    )
}