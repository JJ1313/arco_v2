import './TestimonialCard.css'

const TestimonialCard = ({name, text, category}) => {
  return <div className="testimonialCard__container">
    <p className="testimonialCard__text">{text}</p>
    <div className="testimonialCard__name">{name}</div>
    <h4 className="testimonialCard__category">{category}</h4>
  </div>
}

export default TestimonialCard;
