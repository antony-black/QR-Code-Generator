export default function GenerationButton({inputValue, setQrCode, setInputValue}) {
  const handleButtonClick = (value) => {
    setQrCode(value);
    setInputValue('');
  }

  const isValue = (value) => {
    return value?.length > 0 ? false : true
  }

  const isDisabled = (value) => {
    return !isValue(value) ? "qr-btn" : "qr-btn disabled"
  }
  
  return (
  <button 
    disabled={isValue(inputValue)}
    className= {isDisabled(inputValue)}
    onClick={()=> handleButtonClick(inputValue)
    }>
    Generate QR Code
  </button>
  )
}