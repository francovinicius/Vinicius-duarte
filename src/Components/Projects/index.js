import './Projects.css'
import projetosData from './Project.json';
import destaquesData from './Destaque.json';

function ProjetoCard({ projeto }) {
    return (
        <div className="card bg-dark text-bg-dark card-projetos">
            <a href={projeto.link} target="_blank">
                <img src={projeto.image} className="card-img-top card-img-top-projetos" alt="Foto do Projeto" />
            </a>
            <div className="div-cards card-body card-body-projetos">
                <h5 className="card-title text-center">{projeto.name}</h5>
                <p className="card-text">{projeto.description}</p>
                <div className="d-flex justify-content-between align-items-end">
                    <div className="btn-group btn-al">
                        <a type="button" href={projeto.link} target="_blank" className="btn btn-sm btn-outline-secondary">View</a>
                        <a type="button" href={projeto.repository} target="_blank" className="btn btn-sm btn-outline-secondary">Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function DestaqueCard({ projeto }) {
    return (
        <div className="card bg-dark text-bg-dark card-projetos">
            <a href={projeto.link} target="_blank">
                <img src={projeto.image} className="card-img-top card-img-top-projetos" alt="Foto do Projeto" />
            </a>
            <div className="div-cards card-body card-body-projetos">
                <h5 className="card-title text-center">{projeto.name}</h5>
                <p className="card-text">{projeto.description}</p>
                <div className="d-flex justify-content-between align-items-end">
                    <div className="btn-group btn-al">
                        <a type="button" href={projeto.link} target="_blank" className="btn btn-sm btn-outline-secondary">View</a>
                        <a type="button" href={projeto.repository} target="_blank" className="btn btn-sm btn-outline-secondary">Repository</a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default function Projects() {
    return (
        <section className="projetos appJs" id="projetos">

            <h3 className="meus-projetos">Projetos em destaque</h3>

            <div className="d-flex justify-content-center cards-projetos">
                {destaquesData.map((projeto, index) => (
                    <DestaqueCard key={index} projeto={projeto} />
                ))}
            </div>


            <h3 className="meus-projetos">Todos os projetos</h3>

            <div className="d-flex justify-content-center cards-projetos">
                {projetosData.map((projeto, index) => (
                    <ProjetoCard key={index} projeto={projeto} />
                ))}
            </div>


        </section>

    )
}