import Links from '../Links'
import './Contact.css'

export default function Contact() {
    return (
        <section id='form appJs'>

            <div className='txt-entrada'>
                <h3 className='text-center'>Entre em contato comigo por aqui</h3>
            </div>

            <form action="https://formsubmit.co/duartevini.dev@gmail.com" method="POST">
                <div className='alinhar-div'>

                    <input type="text" name="name" aria-label="Name" className=" form-control bg-forms" required placeholder='Full Name' />
                    <input type="email" name="email" aria-label="E-mail" className=" form-control bg-forms" required placeholder='Your e-mail' />
                    <input type="tel" name="tel" aria-label="tel" className=" form-control bg-forms" required placeholder='Your number' />
                    <input type="local-evento" name="subject" aria-label="text" className=" form-control bg-forms" required placeholder='Subject' />
                    <textarea className="form-control bg-forms" name="menssage" id="exampleFormControlTextarea1" rows="5" required placeholder='Type message here'></textarea>

                    <button type="button d-flex justify-content-center submit" className="btn btnn" target="blank">Send</button>

                    <input type="hidden" name="_subject" value="Novo Contato!" />
                    <input type="text" name="_honey" className='display-none' />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://port-test-reactjs.vercel.app/" target="blank" />
                </div>
            </form>

            <Links/>



        </section>
    )
}