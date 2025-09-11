import './Button.css'

const Button = ({label, onClick, width}) => {
  const buttonWidth = width ? {width: width} : {}
  return <>
    <button className="button__container" onClick={onClick} style={buttonWidth}>
      {label}
    </button>
  </>
}
 export default Button;
