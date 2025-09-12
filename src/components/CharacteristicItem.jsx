import './CharacteristicItem.css'

const CharacteristicItem = ({ imgUrl, flip, title, text }) => {
  return <div className="characteristicItem__container">
    <div className={`characteristicItem__content ${flip ? 'characteristicItem__content--flipped' : ''}`}>
      <div className="characteristicItem__innerContent" >
        <h3 className="characteristicItem__title"> {title}</h3>
        <p className="characteristicItem__text">{text}</p>
      </div>
    </div>
    <div className={`characteristicItem__imageContainer ${flip ? 'characteristicItem__imageContainer--flipped' : ''}`}>
      <img src={imgUrl} className="characteristicItem__image" />
    </div>
  </div>
}

export default CharacteristicItem;
