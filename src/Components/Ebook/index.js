import './Ebook.css'
export default function Ebooks() {


    return (

        <section>
            <h2 className="meus-projetos tittle-ebooks">Baixe meu e-book gratuitamente</h2>

            <div className=" ebooks div-cards d-flex justify-content-center">

                <div className="card text-center mb-3 bg-dark">
                    <div className="card-body">
                        <img src="./assets/img/ebook/Como-vencer-a-procrastinacao-vinicius-duarte.png" className="card-img-top" alt="..." />
                        <h5 className="card-title text-center">Como vencer a procrastinação</h5>
                        <a href="https://chk.eduzz.com/1867535" className="download btn btn-primary">Fazer Download!</a>
                    </div>
                </div>
                
            </div>
        </section>





    )

}