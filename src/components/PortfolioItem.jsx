import './PortfolioItem.css'

const PortfolioItem = ({ title, year, imgUrl }) => {
  return <div class="portfolioItem__container">
    <div className="portfolioItem__imageContainer">
      <img className="portfolioItem__image" src={imgUrl} />
    </div>
    <h3 className="portfolioItem__title"> {title}</h3>
    <h4 className="portfolioItem__year"> {year} </h4>
  </div>
}
export default PortfolioItem;
