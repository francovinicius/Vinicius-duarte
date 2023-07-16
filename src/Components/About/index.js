import Skills from '../Skills'
import styles from './About.css'


export default function About() {
    return (
        <section>

            <Skills />

            <h2 className='txt-abt'> Sobre Mim</h2>

            <div className="d-flex flex-column align-items-center justify-content-center pt-br">
                <p className='p-about'>Olá mundo! Eu sou Vinicius Franco Duarte, Desenvolvedor Web, posso desenvolver sites responsivos a partir do zero e transformá-los em experiências web modernas e fáceis de usar.</p>
                <p className='p-about'>Antes de mergulhar de cabeça no desenvolvimento web, trabalhei em uma empresa onde era responsável pela manutenção dos laboratórios de informática, fui supervisor de operações, ocupei a cadeira de professor de matemática e física em pré vestibulares, e realizei trabalhos voluntários que consistiam no ensino da Matemática de uma forma mais lúdica para comunidades carentes e zona rural. Foi um período de grande crescimento pessoal e profissional, onde adquiri aptidão para encarar situações de extrema pressão. Tenho experiência com resolução de problemas e tomadas de decisão, em supervisionar, traçar metas e estratégias em equipe, entre outras atividades.</p>
                <p className='p-about'>Já no âmbito da tecnologia, venho aprimorando meus conhecimentos em front-end, prezando sempre em entregar meus projetos com design responsivo começando pelo mobile (Mobile First). Tenho conhecimentos em HTML5, CSS3, JavaScript, e atualmente, venho aprofundando meus estudos nos frameworks React e Bootstrap.</p>
                <p className='p-about'>Hoje, além de trabalhar com desenvolvimento web, sou responsável por uma equipe que coordena toda a parte de banco de dados da empresa que presto serviços, juntamente com a tratativa e cruzamento de dados do sistema de ponto integrado.</p>
                <p className='p-about'>Sou formado em Matemática e estou cursando Análise e Desenvolvimento de Sistemas. Divido meu tempo livre em momentos de lazer com a família, igreja, amo tocar violão (montar aquela roda de amigos e fazer um som), gosto de frequentar a academia pela manhã e por último mas não menos importante gosto bastante de fazer trilhas e realizar esportes radicais.</p>
                <p className='p-about'>Estou sempre bem animado em conhecer pessoas novas, novos ensinamentos e novas culturas! Caso queira saber mais, entre em contato comigo. Um grande abraço!</p>
            </div>

        </section>
    )
}