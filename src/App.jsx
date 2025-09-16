import './App.css'

import Hero from './components/Hero'
import MainImage from './components/MainImage'
import CharacteristicItem from './components/CharacteristicItem'
import Portfolio from './components/Portfolio'
import Testimonial from './components/Testimonial'
import Founders from './components/Founders'

const App = () => {
  return (
    <div className="container">
      <Hero/>
      <MainImage />
      <CharacteristicItem  
        imgUrl={"https://picsum.photos/id/508/580/580"} 
        title="Escuchar y diagnosticar necesidades" 
        text={"Nos tomamos el tiempo de entender tus ideas, objetivos y contexto para brindar soluciones a tu medida"}
      />
      <CharacteristicItem  
        imgUrl={"https://picsum.photos/id/534/580/580"} 
        title="Diseñar con creatividad y técnica" 
        text={"Combinamos visión arquitectónica con innovación, funcionalidad y la mejor visualización de cada propuesta"}
        flip
      />
      <CharacteristicItem  
        imgUrl={"https://picsum.photos/id/623/580/580"} 
        title="Planificar y construir con calidad" 
        text={"Optimizamos recursos, mantenemos transparencia y llevamos tu obra a cabo garantizando confianza y excelencia."}
      />
      <Portfolio/>
      <Testimonial/>
      <Founders />
    </div>
  )
}

export default App;
