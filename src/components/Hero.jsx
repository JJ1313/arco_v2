import './Hero.css'
import Button from './Button'

const Hero = () => {
  return <div className="hero__container">
    <h1 className="hero__title" >Arquitectura y construcción</h1>
    <h3 className="hero__subtitle">Obras residenciales, comerciales y turísticas hechas a medida en Chile</h3>
    <Button label="Cancelar" width={"16rem"} onClick={() => console.log('clicked')}/>
  </div>
}

export default Hero;
