import Skills from '../Skills'
import './About.css'


export default function About() {
    return (
        <section className='appJs'>

            <Skills />

            <h2 className='txt-abt'> Sobre Mim</h2>

            <div className="d-flex flex-column align-items-center justify-content-center pt-br">
                <p className='p-about'>Sou um profissional com algumas experiencias nas áreas de TI e Gestão, tais como o suporte técnico e desenvolvimento de sistemas. Tenho conhecimentos em hardware, software, redes, bancos de dados e programação.</p>
                <p className='p-about'>Atualmente trabalho como desenvolvedor, onde sou responsável pelo desenvolvimento e manutenção de uma plataforma de intranet para comunicação interna e compartilhamento de informações, gerenciamento de algumas aplicações web, criação de aplicativos entre outras funcionalidades. Também possuo uma posição mais analítca, onde sou responsável pela criação dos POPs (Procedimentos Operacionais Padrões), supervisiono a equipe relacionada ao controle de relógios e pontos, criando relatórios analíticos para a folha de pagamento e mantendo bancos de dados seguros e eficientes. </p>
                <p className='p-about'>Anteriormente, atuei como supervisor de operações, controlando e supervisionando atividades operacionais e estratégicas administrativas. Elaborei relatórios gerenciais, realizei reuniões, monitoramento das metas da equipe, análise de indicadores e elaboração de planilhas de controle.</p>
                <p className='p-about'>No início da minha carreira, fui estagiário no departamento de TI, prestando suporte técnico aos usuários da instituição, solucionando problemas relacionados a hardware, software, sistemas operacionais e redes. Também fiz manutenção dos computadores das unidades de Nova Iguaçu e Volta Redonda, bem como dos laboratórios de informática.</p>
                <p className='p-about'>Algumas das ferramentas que utilizo são: Excel, JavaScript, ReactJs, Bootstrap, Kotlin.</p>
            </div>

        </section>
    )
}