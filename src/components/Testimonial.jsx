import './Testimonial.css'

import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  return <div className="testimonial__container">
    <h3 className="testimonial__title"> Testimonios de clientes</h3>
    <h4 className="testimonial__subheading"> Opiniones reales</h4>
    <div className="testimonial__content">
      <TestimonialCard 
        name="Pedro"
        text='"Algunos ejemplos de proyectos residenciales, comerciales y turísticos realizados por ARCO estudio."'
        category="comercio"
      />
      <TestimonialCard 
        name="Juan"
        text='"Algunos ejemplos de proyectos residenciales, comerciales y turísticos realizados por ARCO estudio."'
        category="Residencial"
      />
      <TestimonialCard 
        name="Juan Maestro"
        text='"Algunos ejemplos de proyectos residenciales, comerciales y turísticos realizados por ARCO estudio."'
        category="Comercio"
      />
    </div>
  </div>
}
export default Testimonial;
