import './FabToTop.css'

const FabToTop = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return <button
    onClick={handleClick}
    className="fabToTop__container"
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="fabToTop__label">
      <path d="M12 8.6L18 14.6L16.6 16L12 11.4L7.4 16L6 14.6L12 8.6Z" fill="#1D1B20" />
    </svg>
  </button>
}

export default FabToTop;
