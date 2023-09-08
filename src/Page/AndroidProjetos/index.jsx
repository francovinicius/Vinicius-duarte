import React from 'react'
import BtnBack from '../../Components/BtnBack'

const AndroidProjetos = () => {
    return (
        <div className='appJs'>
            <h4 className='titulo-hg'>Projetos Android com Kotlin</h4>
            <div className='container-hg d-flex justify-content-center align-items-center'>

                <img src="./assets/img/projetos/mobile-projects.svg" className="img-fluid"
                    alt="Mão Segurando um Celular" />

                <div className='descricao-hg'>

                    <h6>Projetos Kotlin</h6>
                    <p>Nesta seção, apresentamos alguns aplicativos Android desenvolvidos exclusivamente com a linguagem Kotlin:</p><br/><br/>
                    <a href="https://github.com/francovinicius/LuminusApp" target="_blank" className='btn btn-sm btn-hg'>Luminus App</a>
                    <a href="https://github.com/francovinicius/ClockInReminder" target="_blank" className='btn  btn-sm btn-hg'>Clock In Reminder</a>
                    <a href="https://github.com/francovinicius/NuCloneApp" target="_blank" className='btn btn-sm btn-hg'>Nu Clone App</a>
                    <a href="https://github.com/francovinicius/IMC-App" target="_blank" className='btn btn-sm btn-hg'>Imc App</a><br/><br/>
                </div>
            </div>

            <BtnBack />
        </div >
    )
}

export default AndroidProjetos