import './FabToTop.css'

const FabToTop = () => {
  const handleClick = () => {
    console.log("Scroll to top pls");
  }
  return <button onClick={ handleClick}>
    ToTop
  </button>
}

export default FabToTop;
