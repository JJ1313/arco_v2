import './Portfolio.css'

import portfolioData from '../data/portfolio.json'

import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  return <div className="portfolio__container">
    <h2 className="portfolio__title"> Portafolio de Obras</h2>
    <p className="portfolio__description">
      Algunos ejemplos de proyectos
      residenciales, comerciales y turísticos
      realizados por ARCO estudio.</p>
    <div className="portfolio__content">
      {portfolioData.map((item) => (
        <PortfolioItem
          key={item.id}
          title={item.title}
          year={item.year}
          imgUrl={item.imgUrl}
        />
      ))}
    </div>
  </div>
}
export default Portfolio;
