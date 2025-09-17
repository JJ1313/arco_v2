import './ContactForm.css'
import Button from './Button'

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
  }
  return <div className="contactForm__container">
    <h2 className="contactForm__title">¿Listo para tu próximo proyecto?</h2>
    <h3 className="contactForm__subtitle">Déjanos tus datos y conversemos.</h3>
    <form className="contactForm__form" onSubmit={handleSubmit}>
      <div className="contactForm__inputContainer">
        <label className='contactForm__label'>Nombre</label>
        <input className="contactForm__input" />
      </div>
      <div className="contactForm__inputContainer">
        <label className='contactForm__label'>Correo Electrónico</label>
        <input className="contactForm__input" />
      </div>
      <div className="contactForm__inputContainer">
        <label className='contactForm__label'>Mensaje</label>
        <textarea className="contactForm__input" />
      </div>
      <Button label="Enviar" width="100%" />
    </form>
  </div>
}

export default ContactForm;
