import BtnBack from '../../Components/BtnBack'
import styles from './Intranet.css'

export default function Intranet() {
    return (
        <div>
            <h4 className='titulo-hg'>Projeto: Intranet Sarton</h4>
            <div className='container-hg d-flex justify-content-center align-items-center'>

                <a href="https://viniciusduarte-blog.vercel.app/" target="_blank" className=''>
                    <img src="./assets/img/projetos/intranet-responsive.png" className="img-highlights"
                        alt="Img do Site" />
                </a>

                <div className='descricao-hg'>

                    <h6>Links</h6>
                    <div className='links-hg d-flex'>
                        <a href="https://intranet-sarton.vercel.app/" target="_blank" className='btn  btn-sm btn-hg'>Intranet - Colaboradores</a>
                        <a href="https://intranet-admsarton.vercel.app/" target="_blank" className='btn btn-sm btn-hg'>Intranet - Administrativo</a>
                        <a href="https://patrimonio-sarton.vercel.app/" target="_blank" className='btn btn-sm btn-hg'>Intranet - Patrimônios</a>
                    </div>

                    <h6>Descrição</h6>
                    <p>A Intranet Sarton é um projeto desenvolvido utilizando as tecnologias React, React Router DOM e Bootstrap. O objetivo principal do projeto é fornecer uma plataforma centralizada para diferentes setores de uma organização, permitindo o compartilhamento de informações importantes e o acesso a recursos específicos de cada área.</p>
                    <p>A plataforma conta com diversas páginas, cada uma direcionada a um setor específico da empresa. Para o setor operacional, há uma página dedicada que contém informações relevantes, como comunicados, normas e diretrizes, processos e treinamentos. Essa página visa fornecer aos colaboradores do setor operacional acesso rápido e fácil a recursos essenciais para o desempenho de suas funções.</p>
                    <p>Além disso, a Intranet Sarton possui uma página destinada ao setor administrativo. Nessa página, além das informações compartilhadas com o setor operacional, são disponibilizados recursos adicionais relacionados aos processos administrativos, financeiros, recursos humanos, tecnologia da informação e links para planilhas de controle, gestão de patrimônio e outros recursos relevantes para a área administrativa.</p>
                    <p>É importante ressaltar que o site já está em pleno funcionamento, oferecendo acesso às informações e recursos mencionados anteriormente. No entanto, ainda estão sendo desenvolvidas algumas funcionalidades adicionais para aprimorar a experiência do usuário e atender a demandas específicas de cada setor.</p>
                    <p>A Intranet Sarton se destaca como uma ferramenta eficiente e integrada, permitindo uma melhor comunicação e organização interna da empresa, além de facilitar o acesso a informações essenciais para o desempenho das atividades de cada setor.</p>
                </div>
            </div>

            <BtnBack />
        </div>
    )
}