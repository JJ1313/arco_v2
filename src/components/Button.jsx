import './Button.css'

const Button = ({label, onClick, width}) => {
  return <>
    <button className="button__container" onClick={onClick} style={width ? {width : width} : {}}>
      {label}
    </button>
  </>
}
 export default Button;
